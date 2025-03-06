import { getSession } from '@auth0/nextjs-auth0';
import { pool, upsertProduct, updateProductPrice  } from '../../lib/db';
import { fetchProducts } from './search'; // Make sure this import path is correct

export default async function handler(req, res) {
  try {
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

          // Update the price history
          await updateProductPrice(product_id, source, price);

          res.status(200).json(listItemResult.rows[0]);
        } catch (error) {
          console.error('Error adding item to list:', error);
          res.status(500).json({ error: 'Internal Server Error', details: error.message, stack: error.stack });
        }
        break;

      case 'GET':
        try {
          const result = await pool.query(
            `SELECT p.*, l.quantity, l.user_id
             FROM list_items l
             JOIN products p ON l.product_id = p.product_id AND l.source = p.source
             WHERE l.user_id = $1`,
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