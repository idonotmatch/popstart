import axios from 'axios';
import Redis from 'ioredis';

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
const cacheHelper = {
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

const mapProduct = (item, source) => {
  if (source === 'walmart') {
    return {
      asin: item.id || '',
      brand: item.brand || 'N/A',
      title: item.name || '',
      link: item.url || '',
      image: item.image || '',
      isPrime: false,
      rating: item.rating?.average_rating ? Number(item.rating.average_rating).toFixed(1) : '0.0',
      ratingsTotal: item.rating?.number_of_reviews || 0,
      price: item.price ? `${item.price_currency}${Number(item.price).toFixed(2)}` : "N/A",
      availability: item.availability || "Unavailable",
      source: 'walmart',
      sponsored: item.sponsored || false,
    };
  } else if (source === 'amazon') {
    return {
      asin: item.asin || '',
      brand: item.brand || 'N/A',
      title: item.name || '',
      link: item.url || '',
      image: item.image || '',
      isPrime: item.has_prime || false,
      rating: item.stars ? Number(item.stars).toFixed(1) : '0.0',
      ratingsTotal: item.total_reviews || 0,
      price: item.price ? `$${Number(item.price).toFixed(2)}` : "N/A",
      availability: item.availability || "Unavailable",
      source: 'amazon',
      sponsored: item.sponsored || false,
    };
  }
};

const filterSponsoredProducts = (products) => {
  return products.filter(product => !product.sponsored);
};

const fetchProducts = async (term, source, sortBy, page = 1) => {
  const url = `https://api.scraperapi.com/structured/${source}/search`;
  const params = {
    api_key: process.env.SCRAPER_API_KEY,
    query: term,
    country: 'us',
    page: page.toString(),
    sort_by: sortBy || '',
    exclude_sponsored: 'true'
  };

  try {
    const response = await axios.get(url, { params });
    console.log(`Raw API response from ${source}:`, JSON.stringify(response.data, null, 2));

    let jsonData = response.data;

    let results = [];
    let totalPages = 1;

    if (source === 'walmart' && jsonData.items) {
      results = jsonData.items;
      totalPages = jsonData.total_pages || 1;
    } else if (source === 'amazon' && jsonData.results) {
      results = jsonData.results;
      totalPages = jsonData.total_pages || 1;
    } else {
      console.error(`Invalid API response structure from ${source}:`, jsonData);
      return { results: [], totalPages: 0 };
    }

    const mappedResults = results.map(item => mapProduct(item, source));
    console.log(`Mapped results for ${source}:`, JSON.stringify(mappedResults, null, 2));

    return { results: filterSponsoredProducts(mappedResults), totalPages };
  } catch (error) {
    console.error(`Error fetching data from ${source} API:`, error.message);
    throw error;
  }
};

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).end();
  }

  const { term, page = '1', sort_by, source = 'all' } = req.query;

  res.setHeader('Content-Type', 'application/json');

  const results = [];

  const streamResults = async (sourceToFetch) => {
    const cacheKey = `search:${sourceToFetch}:${term}:${sort_by}:${page}`;
    try {
      const cachedResults = await cacheHelper.get(cacheKey);

      if (cachedResults) {
        results.push({ source: sourceToFetch, ...JSON.parse(cachedResults) });
      } else {
        const { results: sourceResults, totalPages } = await fetchProducts(term, sourceToFetch, sort_by, parseInt(page));
        results.push({ source: sourceToFetch, results: sourceResults, totalPages });
        await cacheHelper.set(cacheKey, JSON.stringify({ results: sourceResults, totalPages }), { EX: 3600 }); // Cache for 1 hour
      }
    } catch (error) {
      console.error(`Error streaming results from ${sourceToFetch}:`, error.message);
      results.push({ source: sourceToFetch, error: `Failed to fetch data from ${sourceToFetch}: ${error.message}` });
    }
  };

  if (source === 'all') {
    await Promise.all([
      streamResults('walmart'),
      streamResults('amazon')
    ]);
  } else {
    await streamResults(source);
  }

  res.status(200).json(results);
}