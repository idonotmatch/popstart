import { Pool } from 'pg';

// Create a new pool using the DATABASE_URL environment variable
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false // Required for some hosting platforms
  }
});

// Helper function to process API results
export function processApiResults(results, source) {
  return results.map(item => ({
    source: source,
    product_id: item.id || item.asin,
    name: item.name || item.title,
    brand: item.brand || '',
    price: parseFloat(item.price) || parseFloat(item.price_string?.replace('$', '')),
    image_url: item.image,
    product_url: item.url || item.link,
    rating: parseFloat(item.rating?.average_rating || item.stars),
    review_count: parseInt(item.rating?.number_of_reviews || item.total_reviews),
    availability: item.availability || 'In stock',
    full_description: item.full_description || '',
    small_description: item.small_description || '',
    product_category: item.product_category || '',
    model: item.model || '',
    shipping_price: parseFloat(item.shipping_price) || null,
    shipping_time: item.shipping_time || '',
    is_coupon_exists: item.is_coupon_exists || false,
    coupon_text: item.coupon_text || '',
    feature_bullets: Array.isArray(item.feature_bullets) ? item.feature_bullets : [],
    brand_url: item.brand_url || '',
    shipping_condition: item.shipping_condition || '',
    fabric_type: item.fabric_type || '',
    care_instructions: item.care_instructions || '',
    origin: item.origin || '',
    pattern: item.pattern || '',
    country_of_origin: item.country_of_origin || ''
  }));
}

// Function to insert or update a single product
export async function upsertProduct(product) {
  const query = `
    INSERT INTO products (
      source, product_id, name, brand, price, image_url, product_url, rating, review_count, availability,
      full_description, small_description, product_category, model, shipping_price, shipping_time,
      is_coupon_exists, coupon_text, feature_bullets, brand_url, shipping_condition, fabric_type,
      care_instructions, origin, pattern, country_of_origin
    )
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22, $23, $24, $25, $26)
    ON CONFLICT (source, product_id) DO UPDATE SET
    name = EXCLUDED.name,
    brand = EXCLUDED.brand,
    price = EXCLUDED.price,
    image_url = EXCLUDED.image_url,
    product_url = EXCLUDED.product_url,
    rating = EXCLUDED.rating,
    review_count = EXCLUDED.review_count,
    availability = EXCLUDED.availability,
    full_description = EXCLUDED.full_description,
    small_description = EXCLUDED.small_description,
    product_category = EXCLUDED.product_category,
    model = EXCLUDED.model,
    shipping_price = EXCLUDED.shipping_price,
    shipping_time = EXCLUDED.shipping_time,
    is_coupon_exists = EXCLUDED.is_coupon_exists,
    coupon_text = EXCLUDED.coupon_text,
    feature_bullets = EXCLUDED.feature_bullets,
    brand_url = EXCLUDED.brand_url,
    shipping_condition = EXCLUDED.shipping_condition,
    fabric_type = EXCLUDED.fabric_type,
    care_instructions = EXCLUDED.care_instructions,
    origin = EXCLUDED.origin,
    pattern = EXCLUDED.pattern,
    country_of_origin = EXCLUDED.country_of_origin,
    updated_at = CURRENT_TIMESTAMP
    RETURNING *
  `;
  const values = [
    product.source,
    product.product_id,
    product.name,
    product.brand,
    product.price,
    product.image_url,
    product.product_url,
    product.rating,
    product.review_count,
    product.availability,
    product.full_description,
    product.small_description,
    product.product_category,
    product.model,
    product.shipping_price,
    product.shipping_time,
    product.is_coupon_exists,
    product.coupon_text,
    JSON.stringify(product.feature_bullets),
    product.brand_url,
    product.shipping_condition,
    product.fabric_type,
    product.care_instructions,
    product.origin,
    product.pattern,
    product.country_of_origin
  ];
  try {
    const result = await pool.query(query, values);
    console.log('Product inserted/updated successfully');
    return result.rows[0];
  } catch (e) {
    console.error('Error upserting product:', e);
    throw e;
  }
}

// Function to insert or update multiple products
export async function insertProducts(products) {
  const client = await pool.connect();
  try {
    await client.query('BEGIN');
    for (let product of products) {
      await upsertProduct(product);
    }
    await client.query('COMMIT');
    console.log('Products inserted/updated successfully');
  } catch (e) {
    await client.query('ROLLBACK');
    throw e;
  } finally {
    client.release();
  }
}

// Function to retrieve products
export async function getProducts(source, limit = 10) {
  const query = 'SELECT * FROM products WHERE source = $1 ORDER BY created_at DESC LIMIT $2';
  try {
    const result = await pool.query(query, [source, limit]);
    return result.rows;
  } catch (e) {
    console.error('Error fetching products:', e);
    return [];
  }
}

// Function to retrieve a specific product
export async function getSpecificProduct(source, productId) {
  const query = 'SELECT * FROM products WHERE source = $1 AND product_id = $2';
  try {
    const result = await pool.query(query, [source, productId]);
    return result.rows[0] || null;
  } catch (e) {
    console.error('Error fetching specific product:', e);
    return null;
  }
}

// Function to store API results
export async function storeApiResults(amazonResults, walmartResults) {
  const amazonProducts = processApiResults(amazonResults, 'amazon');
  const walmartProducts = processApiResults(walmartResults, 'walmart');
  
  try {
    await insertProducts([...amazonProducts, ...walmartProducts]);
    console.log('API results stored successfully');
  } catch (e) {
    console.error('Error storing API results:', e);
  }
}

// Function to update product price and add to price history
export async function updateProductPrice(productId, source, currentPrice, originalPrice = null) {
  const client = await pool.connect();
  try {
    await client.query('BEGIN');

    // Update the product's current price
    const updateProductQuery = `
      UPDATE products
      SET price = $1, updated_at = CURRENT_TIMESTAMP
      WHERE product_id = $2 AND source = $3
    `;
    await client.query(updateProductQuery, [currentPrice, productId, source]);

    // Add entry to price history
    const insertPriceHistoryQuery = `
      INSERT INTO price_history (product_id, source, current_price, original_price)
      VALUES ($1, $2, $3, $4)
    `;
    await client.query(insertPriceHistoryQuery, [productId, source, currentPrice, originalPrice]);

    await client.query('COMMIT');
    console.log(`Price updated for product ${productId}`);
  } catch (e) {
    await client.query('ROLLBACK');
    console.error('Error updating product price:', e);
    throw e;
  } finally {
    client.release();
  }
}

// Function to get price history for a product
export async function getProductPriceHistory(productId, source) {
  const query = `
    SELECT * FROM price_history
    WHERE product_id = $1 AND source = $2
    ORDER BY timestamp DESC
  `;
  try {
    const result = await pool.query(query, [productId, source]);
    return result.rows;
  } catch (e) {
    console.error('Error fetching price history:', e);
    return [];
  }
}

export { pool };