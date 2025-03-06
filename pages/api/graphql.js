import { ApolloServer, gql } from 'apollo-server-micro';
import axios from 'axios';
import Redis from 'ioredis';
import { upsertProduct, getCurrentProductInfo, getProductPriceHistory } from '../lib/db';

// Initialize Redis client
const redisClient = new Redis(process.env.REDIS_URL);

redisClient.on('error', (err) => {
  console.error('Redis Client Error:', err);
});

const typeDefs = gql`
  type Query {
    searchProducts(searchTerm: String!, source: String!, sortBy: String, page: Int): [Product]
    searchProductsCombined(searchTerm: String!, sortBy: String, page: Int): [Product]
    getProductDetails(productId: String!, source: String!): Product
    getProductPriceHistory(productId: String!, source: String!): [PriceHistory]
  }

  type Product {
    product_id: String!
    source: String!
    name: String
    brand: String
    price: Float
    image_url: String
    product_url: String
    rating: Float
    review_count: Int
    availability: String
    full_description: String
    small_description: String
    product_category: String
    model: String
    shipping_price: Float
    shipping_time: String
    is_coupon_exists: Boolean
    coupon_text: String
    feature_bullets: [String]
    brand_url: String
    shipping_condition: String
    shipping_details_url: String
    images: [String]
    average_rating: Float
    fabric_type: String
    care_instructions: String
    origin: String
    pattern: String
    country_of_origin: String
  }

  type PriceHistory {
    timestamp: String
    price: Float
    original_price: Float
    currency: String
    is_on_sale: Boolean
    discount_percentage: Float
  }
`;

const mapWalmartProduct = (item) => ({
  product_id: item.id,
  source: 'walmart',
  name: item.name,
  brand: item.brand || 'N/A',
  price: parseFloat(item.offers?.primary?.price) || null,
  image_url: item.image,
  product_url: item.link,
  rating: item.rating?.rating || null,
  review_count: item.rating?.count || 0,
  availability: item.offers?.availability || "Unavailable",
  full_description: item.description || '',
  small_description: item.short_description || '',
  product_category: item.category || '',
  model: item.model || '',
  shipping_price: parseFloat(item.offers?.delivery?.delivery_price) || null,
  shipping_time: item.offers?.delivery?.delivery_string || '',
  is_coupon_exists: item.coupon ? true : false,
  coupon_text: item.coupon || '',
  feature_bullets: item.feature_bullets || [],
  brand_url: item.brand_url || '',
  shipping_condition: item.offers?.delivery?.delivery_condition || '',
  shipping_details_url: item.shipping_details_url || '',
  images: item.additional_images || [],
  average_rating: item.rating?.average_rating || null,
  fabric_type: item.fabric_type || '',
  care_instructions: item.care_instructions || '',
  origin: item.origin || '',
  pattern: item.pattern || '',
  country_of_origin: item.country_of_origin || ''
});

const mapAmazonProduct = (item) => ({
  product_id: item.asin,
  source: 'amazon',
  name: item.title,
  brand: item.brand || 'N/A',
  price: parseFloat(item.price?.current_price) || null,
  image_url: item.image,
  product_url: item.url,
  rating: item.rating || null,
  review_count: item.ratings_total || 0,
  availability: item.availability?.status || "Unavailable",
  full_description: item.description || '',
  small_description: item.feature_bullets?.join(' ') || '',
  product_category: item.categories?.join(' > ') || '',
  model: item.model || '',
  shipping_price: parseFloat(item.delivery?.price) || null,
  shipping_time: item.delivery?.tagline || '',
  is_coupon_exists: item.coupon ? true : false,
  coupon_text: item.coupon || '',
  feature_bullets: item.feature_bullets || [],
  brand_url: item.brand_url || '',
  shipping_condition: item.delivery?.condition || '',
  shipping_details_url: item.shipping_details_url || '',
  images: item.images || [],
  average_rating: item.rating || null,
  fabric_type: item.fabric_type || '',
  care_instructions: item.care_instructions || '',
  origin: item.origin || '',
  pattern: item.pattern || '',
  country_of_origin: item.country_of_origin || ''
});

const filterSponsoredProducts = (products) => {
  return products.filter(product => {
    if (product.sponsored === true) {
      return false;
    }
    const sponsoredKeywords = ['Sponsored', 'Ad', 'Advertised'];
    const lowercaseTitle = product.name.toLowerCase();
    const lowercaseDescription = (product.full_description || '').toLowerCase();
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

    // Save products to database
    await Promise.all(filteredData.map(product => upsertProduct(product)));

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
      try {
        return await fetchProducts(searchTerm, source, sortBy, page);
      } catch (error) {
        console.error(`Error in searchProducts resolver: ${error.message}`);
        throw new Error('An error occurred while searching for products');
      }
    },
    searchProductsCombined: async (_, { searchTerm, sortBy, page }) => {
      try {
        const [walmartResults, amazonResults] = await Promise.all([
          fetchProducts(searchTerm, 'walmart', sortBy, page),
          fetchProducts(searchTerm, 'amazon', sortBy, page)
        ]);
        return [...walmartResults, ...amazonResults];
      } catch (error) {
        console.error(`Error in searchProductsCombined resolver: ${error.message}`);
        throw new Error('An error occurred while searching for products');
      }
    },
    getProductDetails: async (_, { productId, source }) => {
      try {
        return await getCurrentProductInfo(productId, source);
      } catch (error) {
        console.error(`Error in getProductDetails resolver: ${error.message}`);
        throw new Error('An error occurred while fetching product details');
      }
    },
    getProductPriceHistory: async (_, { productId, source }) => {
      try {
        return await getProductPriceHistory(productId, source);
      } catch (error) {
        console.error(`Error in getProductPriceHistory resolver: ${error.message}`);
        throw new Error('An error occurred while fetching price history');
      }
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