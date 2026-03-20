import { getSession } from '@auth0/nextjs-auth0';
import { pool, upsertProduct, updateProductPrice  } from '../../lib/db';
import { fetchProducts } from './search'; // Make sure this import path is correct

let schemaReady = false;
async function ensureSchema() {
  if (schemaReady) return;
  await pool.query(`
    CREATE TABLE IF NOT EXISTS products (
      source VARCHAR(50) NOT NULL,
      product_id VARCHAR(255) NOT NULL,
      name TEXT, brand VARCHAR(255), price NUMERIC, image_url TEXT,
      product_url TEXT, rating NUMERIC, review_count INTEGER,
      availability VARCHAR(100), full_description TEXT, small_description TEXT,
      product_category VARCHAR(255), model VARCHAR(255), shipping_price NUMERIC,
      shipping_time VARCHAR(100), is_coupon_exists BOOLEAN DEFAULT false,
      coupon_text TEXT, feature_bullets JSONB DEFAULT '[]', brand_url TEXT,
      shipping_condition VARCHAR(255), fabric_type VARCHAR(255),
      care_instructions TEXT, origin VARCHAR(255), pattern VARCHAR(255),
      country_of_origin VARCHAR(255),
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      PRIMARY KEY (source, product_id)
    )
  `);
  await pool.query(`
    CREATE TABLE IF NOT EXISTS list_items (
      id SERIAL PRIMARY KEY,
      user_id VARCHAR(255) NOT NULL,
      product_id VARCHAR(255) NOT NULL,
      source VARCHAR(50) NOT NULL,
      quantity INTEGER DEFAULT 1,
      notes TEXT,
      row_order INTEGER,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      UNIQUE (user_id, product_id, source)
    )
  `);
  await pool.query(`
    CREATE TABLE IF NOT EXISTS price_history (
      id SERIAL PRIMARY KEY,
      product_id VARCHAR(255) NOT NULL,
      source VARCHAR(50) NOT NULL,
      current_price NUMERIC,
      original_price NUMERIC,
      timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `);
  schemaReady = true;
}

export default async function handler(req, res) {
  try {
    await ensureSchema();
    const session = await getSession(req, res);

    if (!session || !session.user) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    const userId = session.user.sub;

    switch (req.method) {
      case 'POST':
        try {
          console.log('Received POST request:', req.body);
          const { product_id, name, price, quantity = 1, image_url, source, ...otherFields } = req.body;
          
          // Check if upsertProduct is a function
          if (typeof upsertProduct !== 'function') {
            throw new Error('upsertProduct is not a function');
          }

          // Use the upsertProduct function
          const productResult = await upsertProduct({
            product_id,
            source,
            name,
            price,
            image_url,
            ...otherFields
          });
          console.log('Product insert/update result:', productResult);

          // Now, add or update the item in the list_items table
          const listItemResult = await pool.query(
            `INSERT INTO list_items (user_id, product_id, source, quantity)
             VALUES ($1, $2, $3, $4)
             ON CONFLICT (user_id, product_id, source) 
             DO UPDATE SET quantity = list_items.quantity + EXCLUDED.quantity
             RETURNING *`,
            [userId, product_id, source, quantity]
          );
          console.log('List item insert/update result:', listItemResult.rows[0]);

          // Update the price history (non-fatal — don't fail the add if price_history insert fails)
          updateProductPrice(product_id, source, price).catch(e =>
            console.warn('price_history update failed (non-fatal):', e.message)
          );

          res.status(200).json(listItemResult.rows[0]);
        } catch (error) {
          console.error('Error adding item to list:', error);
          res.status(500).json({ error: 'Internal Server Error', details: error.message, stack: error.stack });
        }
        break;

      case 'GET':
        try {
          const result = await pool.query(
            `SELECT p.*, l.quantity, l.notes, l.row_order, l.user_id
             FROM list_items l
             JOIN products p ON l.product_id = p.product_id AND l.source = p.source
             WHERE l.user_id = $1
             ORDER BY l.row_order ASC, l.created_at ASC`,
            [userId]
          );
          res.status(200).json(result.rows);
        } catch (error) {
          console.error('Error fetching list:', error);
          res.status(500).json({ error: 'Internal Server Error', details: error.message });
        }
        break;

      case 'DELETE':
        try {
          await pool.query('DELETE FROM list_items WHERE user_id = $1', [userId]);
          res.status(200).json({ message: 'List cleared successfully' });
        } catch (error) {
          console.error('Error clearing list:', error);
          res.status(500).json({ error: 'Internal Server Error', details: error.message });
        }
        break;

      case 'PUT':
        try {
          console.log('Refresh request received');
          // Fetch the user's current list
          const currentList = await pool.query(
            `SELECT p.*, l.quantity
             FROM list_items l
             JOIN products p ON l.product_id = p.product_id AND l.source = p.source
             WHERE l.user_id = $1`,
            [userId]
          );
          console.log('Current list fetched:', currentList.rows);

          // Refresh each item in the list
          const refreshedItems = await Promise.all(currentList.rows.map(async (item) => {
            try {
              console.log(`Fetching fresh data for ${item.product_id} from ${item.source}`);
              // Fetch fresh data from ScraperAPI
              const { results } = await fetchProducts(item.product_id, item.source, null, 1);
              console.log(`ScraperAPI response for ${item.product_id}:`, results);
              
              if (results && results.length > 0) {
                const freshData = results[0];

                console.log(`Updating database for ${item.product_id}`);
                // Use the upsertProduct function
                if (typeof upsertProduct !== 'function') {
                  throw new Error('upsertProduct is not a function');
                }
                await upsertProduct(freshData);

                // Update the price history
                await updateProductPrice(item.product_id, item.source, freshData.price);

                console.log(`Database updated for ${item.product_id}`);
                // Return both old and new data for comparison
                return { 
                  old: item,
                  new: { ...freshData, quantity: item.quantity }
                };
              } else {
                console.warn(`No fresh data found for product ${item.product_id} from ${item.source}`);
                return { old: item, new: item };
              }
            } catch (error) {
              console.error(`Error refreshing item ${item.product_id} from ${item.source}:`, error);
              return { old: item, new: item, error: error.message };
            }
          }));

          console.log('All items refreshed');
          res.status(200).json(refreshedItems);
        } catch (error) {
          console.error('Error refreshing list:', error);
          res.status(500).json({ error: 'Internal Server Error', details: error.message });
        }
        break;

      default:
        res.setHeader('Allow', ['GET', 'POST', 'DELETE', 'PUT']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  } catch (error) {
    console.error('Unexpected error:', error);
    res.status(500).json({ error: 'Internal Server Error', details: error.message, stack: error.stack });
  }
}