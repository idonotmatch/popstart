import { ApolloServer, gql } from 'apollo-server-micro';
import axios from 'axios';
import Redis from 'ioredis';

// Initialize Redis client
const redisClient = new Redis(process.env.REDIS_URL);

redisClient.on('error', (err) => {
  console.error('Redis Client Error:', err);
});

const typeDefs = gql`
  type Query {
    searchProducts(searchTerm: String!, source: String!, sortBy: String, page: Int): [Product]
    searchProductsCombined(searchTerm: String!, sortBy: String, page: Int): [Product]
  }

  type Product {
    asin: String
    title: String
    link: String
    image: String
    isPrime: Boolean
    rating: Float
    ratingsTotal: Int
    price: String
    availability: String
    source: String
    brand: String
    delivery: Delivery
    sponsored: Boolean
    description: String
  }

  type Delivery {
    tagline: String
    price: String
  }
`;

const mapWalmartProduct = (item) => ({
  asin: item.id,
  title: item.name,
  link: item.link,
  image: item.image,
  isPrime: false,
  rating: item.rating?.rating || 0,
  ratingsTotal: item.rating?.count || 0,
  price: item.offers?.primary?.price ? `$${item.offers.primary.price}` : "N/A",
  availability: item.offers?.availability || "Unavailable",
  source: 'walmart',
  brand: item.brand || 'N/A',
  delivery: {
    tagline: item.offers?.delivery?.delivery_string || "Delivery information unavailable",
    price: item.offers?.delivery?.delivery_price || ""
  },
  sponsored: item.sponsored || false,
  description: item.description || '',
});

const mapAmazonProduct = (item) => ({
  asin: item.asin,
  title: item.title,
  link: item.url,
  image: item.image,
  isPrime: item.prime,
  rating: item.rating || 0,
  ratingsTotal: item.ratings_total || 0,
  price: item.price?.current_price ? `$${item.price.current_price}` : "N/A",
  availability: item.availability?.status || "Unavailable",
  source: 'amazon',
  brand: item.brand || 'N/A',
  delivery: {
    tagline: item.delivery?.tagline || "Delivery information unavailable",
    price: item.delivery?.price || ""
  },
  sponsored: item.sponsored || false,
  description: item.description || '',
});

const filterSponsoredProducts = (products) => {
  return products.filter(product => {
    if (product.sponsored === true) {
      return false;
    }
    const sponsoredKeywords = ['Sponsored', 'Ad', 'Advertised'];
    const lowercaseTitle = product.title.toLowerCase();
    const lowercaseDescription = (product.description || '').toLowerCase();
    return !sponsoredKeywords.some(keyword => 
      lowercaseTitle.includes(keyword.toLowerCase()) || 
      lowercaseDescription.includes(keyword.toLowerCase())
    );
  });
};

const fetchProducts = async (searchTerm, source, sortBy, page) => {
  const cacheKey = `${source}:${searchTerm}:${sortBy || 'default'}:${page || 1}`;
  
  try {
    const cachedResults = await redisClient.get(cacheKey);
    if (cachedResults) {
      const parsedResults = JSON.parse(cachedResults);
      if (Array.isArray(parsedResults) && parsedResults.length > 0) {
        console.log('Returning cached results');
        return parsedResults;
      }
    }

    const url = `https://api.scraperapi.com/structured/${source}/search`;
    const params = {
      api_key: process.env.SCRAPER_API_KEY,
      query: searchTerm,
      country: 'us',
      page: page || '1',
      sort_by: sortBy || '',
      exclude_sponsored: 'true'
    };

    const response = await axios.get(url, { params });
    console.log(`Raw API response from ${source}:`, JSON.stringify(response.data));

    if (!response.data || !response.data.results || !Array.isArray(response.data.results)) {
      console.error(`Invalid API response from ${source}:`, response.data);
      return [];
    }

    const mappedData = source === 'walmart' 
      ? response.data.results.map(mapWalmartProduct)
      : response.data.results.map(mapAmazonProduct);
    
    const filteredData = filterSponsoredProducts(mappedData);

    await redisClient.set(cacheKey, JSON.stringify(filteredData), {
      EX: 86400, // 24 hours
    });

    return filteredData;
  } catch (error) {
    console.error(`Error fetching data from ${source} API:`, error.message);
    return [];  // Return an empty array instead of throwing an error
  }
};

const resolvers = {
  Query: {
    searchProducts: async (_, { searchTerm, source, sortBy, page }) => {
      return fetchProducts(searchTerm, source, sortBy, page);
    },
    searchProductsCombined: async (_, { searchTerm, sortBy, page }) => {
      const [walmartResults, amazonResults] = await Promise.all([
        fetchProducts(searchTerm, 'walmart', sortBy, page),
        fetchProducts(searchTerm, 'amazon', sortBy, page)
      ]);
      return [...walmartResults, ...amazonResults];
    }
  }
};

let apolloServer = null;
const initializeApolloServer = async () => {
  if (!apolloServer) {
    apolloServer = new ApolloServer({ typeDefs, resolvers });
    await apolloServer.start();
  }
};

export default async function handler(req, res) {
  await initializeApolloServer();
  return apolloServer.createHandler({ path: '/api/graphql' })(req, res);
}

export const config = {
  api: {
    bodyParser: false,
  },
};