import axios from 'axios';
import Redis from 'ioredis';
import { Pool } from 'pg';

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

// Initialize PostgreSQL connection pool
let pool;
try {
  pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false
    }
  });

  // Test the connection
  pool.query('SELECT NOW()', (err, res) => {
    if (err) {
      console.error('Error connecting to the database:', err);
    } else {
      console.log('Successfully connected to the database');
    }
  });
} catch (error) {
  console.error('Failed to initialize database pool:', error);
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
  console.log(`Mapping product from ${source}:`, JSON.stringify(item, null, 2));

  if (source === 'walmart') {
    return {
      id: item.id || '',
      brand: item.brand || 'N/A',
      title: item.name || '',
      link: item.url || '',
      image: item.image || '',
      isPrime: false,
      rating: item.rating?.average_rating ? Number(item.rating.average_rating).toFixed(1) : '0.0',
      ratingsTotal: item.rating?.number_of_reviews || 0,
      price: item.price ? `${item.price_currency || '$'}${Number(item.price).toFixed(2)}` : "N/A",
      availability: item.availability || "Unavailable",
      source: 'walmart',
      sponsored: item.sponsored || false,
      full_description: item.full_description || '',
      product_category: item.product_category || '',
      model: item.model || '',
      small_description: item.small_description || ''
    };
  } else if (source === 'amazon') {
    return {
      asin: item.asin || '',
      brand: item.brand || 'N/A',
      title: item.name || item.title || '',
      link: item.url || item.link || '',
      image: item.image || (item.images && item.images[0]) || '',
      isPrime: item.has_prime || item.isPrime || false,
      rating: item.stars || item.average_rating ? Number(item.stars || item.average_rating).toFixed(1) : '0.0',
      ratingsTotal: item.total_reviews || item.ratings_total || 0,
      price: item.price || item.pricing || "N/A",
      availability: item.availability || "Unavailable",
      source: 'amazon',
      sponsored: item.sponsored || false,
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

const insertProduct = async (product) => {
  if (!pool) {
    console.error('Database pool not initialized');
    return;
  }

  const client = await pool.connect();
  try {
    await client.query('BEGIN');

    // Insert into products table
    const productQuery = `
      INSERT INTO products (retailer_id, source, title, brand, image_url, link, full_description, product_category)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
      ON CONFLICT (retailer_id, source) DO UPDATE
      SET title = EXCLUDED.title, brand = EXCLUDED.brand, image_url = EXCLUDED.image_url, 
          link = EXCLUDED.link, full_description = EXCLUDED.full_description, 
          product_category = EXCLUDED.product_category
      RETURNING product_id
    `;
    const productValues = [
      product.id || product.asin,
      product.source,
      product.title,
      product.brand,
      product.image,
      product.link,
      product.full_description,
      product.product_category
    ];
    const productResult = await client.query(productQuery, productValues);
    const productId = productResult.rows[0].product_id;

    // Insert into product_details table
    const detailsQuery = `
      INSERT INTO product_details (product_id, rating, ratings_total, is_prime, model, small_description)
      VALUES ($1, $2, $3, $4, $5, $6)
      ON CONFLICT (product_id) DO UPDATE
      SET rating = EXCLUDED.rating, ratings_total = EXCLUDED.ratings_total, 
          is_prime = EXCLUDED.is_prime, model = EXCLUDED.model, 
          small_description = EXCLUDED.small_description
    `;
    const detailsValues = [
      productId,
      parseFloat(product.rating) || null,
      parseInt(product.ratingsTotal) || null,
      product.isPrime || false,
      product.model,
      product.small_description
    ];
    await client.query(detailsQuery, detailsValues);

    // Insert into price_history table
    if (product.price && product.price !== "N/A") {
      const priceQuery = `
        INSERT INTO price_history (product_id, price, availability)
        VALUES ($1, $2, $3)
      `;
      const priceValues = [
        productId,
        parseFloat(product.price.replace(/[^0-9.-]+/g,"")) || null,
        product.availability || 'Unknown'
      ];
      await client.query(priceQuery, priceValues);
    }

    await client.query('COMMIT');
    console.log(`Inserted/Updated product in database: ${product.title}`);
  } catch (e) {
    await client.query('ROLLBACK');
    console.error('Error inserting/updating product in database:', e);
  } finally {
    client.release();
  }
};

const fetchProducts = async (term, source, sortBy, page = 1) => {
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
      await insertProduct(mappedProduct);
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
      for (const product of mappedResults) {
        await insertProduct(product);
      }

      return { results: filterSponsoredProducts(mappedResults), totalPages };
    }
  } catch (error) {
    console.error(`Error fetching data from ${source} API:`, error.message);
    console.error(`Error details:`, error.response ? error.response.data : 'No response data');
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
        console.log(`Using cached results for ${sourceToFetch}`);
        results.push({ source: sourceToFetch, ...JSON.parse(cachedResults) });
      } else {
        console.log(`Fetching fresh results for ${sourceToFetch}`);
        const { results: sourceResults, totalPages } = await fetchProducts(term, sourceToFetch, sort_by, parseInt(page));
        results.push({ source: sourceToFetch, results: sourceResults, totalPages });
        await cacheHelper.set(cacheKey, JSON.stringify({ results: sourceResults, totalPages }), { EX: 3600 }); // Cache for 1 hour
      }
    } catch (error) {
      console.error(`Error streaming results from ${sourceToFetch}:`, error.message);
      results.push({ 
        source: sourceToFetch, 
        error: `Failed to fetch data from ${sourceToFetch}: ${error.message}`,
        details: error.response ? error.response.data : 'No response data'
      });
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