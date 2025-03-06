import axios from 'axios';
import Redis from 'ioredis';
import { insertProducts, getProducts } from '../../lib/db';

// Initialize Redis client with fallback
let redisClient;
try {
  redisClient = new Redis(process.env.REDIS_URL, {
    maxRetriesPerRequest: 1,
    retryStrategy: () => null
  });
  redisClient.on('error', (err) => {
    console.warn('Redis Client Error:', err);
    redisClient = null; // Disable Redis client on error
  });
} catch (error) {
  console.warn('Failed to initialize Redis:', error);
  redisClient = null;
}

// Cache helper function
export const cacheHelper = {
  get: async (key) => {
    if (redisClient) {
      try {
        return await redisClient.get(key);
      } catch (error) {
        console.warn('Redis get error:', error);
      }
    }
    return null;
  },
  set: async (key, value, options) => {
    if (redisClient) {
      try {
        await redisClient.set(key, value, options);
      } catch (error) {
        console.warn('Redis set error:', error);
      }
    }
  }
};

export const mapProduct = (item, source) => {
  console.log(`Mapping product from ${source}:`, JSON.stringify(item, null, 2));

  const parsePrice = (price) => {
    if (typeof price === 'number') return price;
    if (typeof price === 'string') return Number(price.replace(/[^0-9.-]+/g,""));
    return null;
  };

  if (source === 'walmart') {
    return {
      source: 'walmart',
      product_id: item.id || '',
      name: item.name || '',
      brand: item.brand || 'N/A',
      price: parsePrice(item.price),
      image_url: item.image || '',
      product_url: item.url || '',
      rating: item.rating?.average_rating ? Number(item.rating.average_rating) : null,
      review_count: item.rating?.number_of_reviews || 0,
      availability: item.availability || "Unavailable",
      full_description: item.full_description || '',
      product_category: item.product_category || '',
      model: item.model || '',
      small_description: item.small_description || ''
    };
  } else if (source === 'amazon') {
    return {
      source: 'amazon',
      product_id: item.asin || '',
      name: item.name || item.title || '',
      brand: item.brand || 'N/A',
      price: parsePrice(item.price),
      image_url: item.image || (item.images && item.images[0]) || '',
      product_url: item.url || item.link || '',
      rating: item.stars ? Number(item.stars) : null,
      review_count: item.total_reviews || item.ratings_total || 0,
      availability: item.availability || "Unavailable",
      full_description: item.full_description || '',
      product_category: item.product_category || '',
      model: item.model || '',
      small_description: item.small_description || ''
    };
  }
};

const filterSponsoredProducts = (products) => {
  return products.filter(product => !product.sponsored);
};

export const fetchProducts = async (term, source, sortBy, page = 1) => {
  let url;
  let params;

  // Remove any quotes from the API key
  const apiKey = process.env.SCRAPER_API_KEY.replace(/[''"]+/g, '');

  if (source === 'amazon') {
    if (term.match(/^[A-Z0-9]{10}$/)) {  // Check if term is an ASIN
      url = `https://api.scraperapi.com/structured/amazon/product`;
      params = {
        api_key: apiKey,
        asin: term,
        country_code: 'us',
        tld: 'com'
      };
    } else {
      url = `https://api.scraperapi.com/structured/amazon/search`;
      params = {
        api_key: apiKey,
        query: term,
        country: 'us',
        page: page.toString(),
        sort_by: sortBy || '',
        exclude_sponsored: 'true'
      };
    }
  } else if (source === 'walmart') {
    if (term.match(/^[0-9]+$/)) {  // Check if term is a Walmart product ID
      url = `https://api.scraperapi.com/structured/walmart/product`;
      params = {
        api_key: apiKey,
        product_id: term,
        country_code: 'us',
        tld: 'com'
      };
    } else {
      url = `https://api.scraperapi.com/structured/walmart/search`;
      params = {
        api_key: apiKey,
        query: term,
        country: 'us',
        page: page.toString(),
        sort_by: sortBy || '',
        exclude_sponsored: 'true'
      };
    }
  }

  try {
    console.log(`Fetching ${source} results for term: "${term}", page: ${page}, sortBy: ${sortBy}`);
    console.log('API Request URL:', url);
    console.log('API Request Params:', { ...params, api_key: '[REDACTED]' });

    const response = await axios.get(url, { params, timeout: 30000 });
    console.log(`Raw API response from ${source}:`, JSON.stringify(response.data, null, 2));

    let jsonData = response.data;

    if ((source === 'amazon' && term.match(/^[A-Z0-9]{10}$/)) || 
        (source === 'walmart' && term.match(/^[0-9]+$/))) {
      // If it's a product query, wrap the result in an array
      const mappedProduct = mapProduct(jsonData, source);
      await insertProducts([mappedProduct]);
      return { results: [mappedProduct], totalPages: 1 };
    } else {
      // For search queries, process as before
      let results = [];
      let totalPages = 1;

      if (source === 'walmart' && jsonData.items && Array.isArray(jsonData.items)) {
        results = jsonData.items;
        totalPages = jsonData.total_pages || 1;
      } else if (source === 'amazon' && jsonData.results) {
        results = jsonData.results;
        totalPages = jsonData.total_pages || 1;
      } else {
        console.error(`Invalid API response structure from ${source}:`, jsonData);
        throw new Error(`Invalid API response structure from ${source}`);
      }

      const mappedResults = results.map(item => mapProduct(item, source));
      console.log(`Mapped results for ${source}:`, JSON.stringify(mappedResults, null, 2));

      // Insert all products into the database
      await insertProducts(mappedResults);

      return { results: filterSponsoredProducts(mappedResults), totalPages };
    }
  } catch (error) {
    console.error(`Error fetching data from ${source} API:`, error.message);
    console.error(`Error details:`, error.response ? error.response.data : 'No response data');
    throw error;
  }
};

export const streamResults = async (sourceToFetch, term, sort_by, page) => {
  const cacheKey = `search:${sourceToFetch}:${term}:${sort_by}:${page}`;
  try {
    const cachedResults = await cacheHelper.get(cacheKey);

    if (cachedResults) {
      console.log(`Using cached results for ${sourceToFetch}`);
      return { source: sourceToFetch, ...JSON.parse(cachedResults) };
    } else {
      console.log(`Fetching fresh results for ${sourceToFetch}`);
      
      // First, try to get results from our database
      let dbResults = await getProducts(sourceToFetch, term, parseInt(page), 20); // Assuming 20 results per page
      
      if (dbResults.length > 0) {
        console.log(`Found ${dbResults.length} results in database for ${sourceToFetch}`);
        return { source: sourceToFetch, results: dbResults, totalPages: Math.ceil(dbResults.length / 20) };
      } else {
        // If no results in database, fetch from API
        const { results: sourceResults, totalPages } = await fetchProducts(term, sourceToFetch, sort_by, parseInt(page));
        await cacheHelper.set(cacheKey, JSON.stringify({ results: sourceResults, totalPages }), { EX: 3600 }); // Cache for 1 hour
        return { source: sourceToFetch, results: sourceResults, totalPages };
      }
    }
  } catch (error) {
    console.error(`Error streaming results from ${sourceToFetch}:`, error.message);
    return { 
      source: sourceToFetch, 
      error: `Failed to fetch data from ${sourceToFetch}: ${error.message}`,
      details: error.response ? error.response.data : 'No response data'
    };
  }
};

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).end();
  }

  const { term, page = '1', sort_by, source = 'all' } = req.query;

  res.setHeader('Content-Type', 'application/json');

  let results = [];

  if (source === 'all') {
    results = await Promise.all([
      streamResults('walmart', term, sort_by, page),
      streamResults('amazon', term, sort_by, page)
    ]);
  } else {
    results = [await streamResults(source, term, sort_by, page)];
  }

  res.status(200).json(results);
}