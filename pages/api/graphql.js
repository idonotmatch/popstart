import { ApolloServer, gql } from 'apollo-server-micro';
import got from 'got';
import redisClient from '../../lib/redisClient.js';

const typeDefs = gql`
  type Query {
    searchProducts(searchTerm: String!, source: String!): [Product]
    searchProductsCombined(searchTerm: String!): [Product]
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
  }
`;

const fetchWithRetry = async (url, params, retries = 3) => {
  let lastError;
  const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

  for (let i = 0; i < retries; i++) {
    try {
      const response = await got(url, { searchParams: params, responseType: 'json' });
      if (response.statusCode === 200) {
        return response.body;
      }
      lastError = new Error(`API call failed with status: ${response.statusCode}`);
    } catch (error) {
      lastError = error;
    }
    await delay(1000 * Math.pow(2, i)); // Exponential backoff
  }
  throw lastError;
};

const mapRainforestProduct = (item) => ({
  asin: item.asin,
  title: item.title,
  link: item.link,
  image: item.image,
  isPrime: item.is_prime,
  rating: item.rating,
  ratingsTotal: item.ratings_total,
  price: item.price?.value ? `$${item.price.value}` : 'Unavailable',
  availability: item.availability || 'Unavailable',
  source: 'rainforest',
  brand: item.brand || 'Unavailable'
});

const mapBluecartProduct = (item) => ({
  asin: item.product.item_id,
  title: item.product.title,
  link: item.product.link,
  image: item.product.main_image || (item.product.images.length > 0 ? item.product.images[0] : ""),
  isPrime: false,
  rating: item.product.rating || 0,
  ratingsTotal: item.product.ratings_total || 0,
  price: item.offers.primary ? `${item.offers.primary.currency_symbol}${item.offers.primary.price}` : "N/A",
  availability: item.inventory.in_stock ? "In stock" : "Out of stock",
  source: 'bluecart',
  brand: item.product.brand || 'Unavailable'
});

const resolvers = {
  Query: {
    searchProducts: async (_, { searchTerm, source }) => {
      let data = [];
      const start = performance.now(); // Start timer for logging

      // Generate a unique cache key based on the search term and source
      const cacheKey = `${source}:${searchTerm}`;

      // Check Redis cache
      const cachedResults = await redisClient.get(cacheKey);
      if (cachedResults) {
        console.log('Returning cached results');
        return JSON.parse(cachedResults);
      }

      if (source === 'rainforest') {
        const params = {
          api_key: process.env.RAINFOREST_API_KEY,
          type: "search",
          amazon_domain: "amazon.com",
          search_term: searchTerm,
          fields: "asin,title,link,image,is_prime,rating,ratings_total,price,availability,brand" // Request only necessary fields
        };

        try {
          const response = await fetchWithRetry('https://api.rainforestapi.com/request', params);
          data = response.search_results.map(mapRainforestProduct);
        } catch (error) {
          console.error('Failed to fetch data from Rainforest API:', error);
          throw new Error('Failed to fetch data');
        }
      } else if (source === 'bluecart') {
        const params = {
          api_key: process.env.BLUECART_API_KEY,
          search_term: searchTerm,
          type: "search",
          sort_by: "best_match",
          page: "1",
          max_page: "1",
          output: "json",
          include_html: "false"
        };

        try {
          const response = await fetchWithRetry('https://api.bluecartapi.com/request', params);
          data = response.search_results.map(mapBluecartProduct);
        } catch (error) {
          console.error('Failed to fetch data from Bluecart API:', error);
          throw new Error('Failed to fetch data');
        }
      }

      // Store results in Redis with a 24-hour expiration time
      await redisClient.set(cacheKey, JSON.stringify(data), {
        EX: 86400, // 24 hours
      });

      const end = performance.now(); // End timer
      console.log(`API call for ${source} took ${end - start} milliseconds`); // Log time taken

      return data;
    },
    searchProductsCombined: async (_, { searchTerm }) => {
      const start = performance.now(); // Start timer
      const [rainforestResults, bluecartResults] = await Promise.all([
        resolvers.Query.searchProducts(_, { searchTerm, source: 'rainforest' }),
        resolvers.Query.searchProducts(_, { searchTerm, source: 'bluecart' })
      ]);
      const end = performance.now(); // End timer
      console.log(`Combined search took ${end - start} milliseconds`); // Log time taken

      return [...rainforestResults, ...bluecartResults];
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
