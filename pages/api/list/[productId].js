import { getSession } from '@auth0/nextjs-auth0';
import { pool } from '../../../lib/db';

export default async function handler(req, res) {
  const session = await getSession(req, res);

  if (!session || !session.user) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  const userId = session.user.sub;
  const { productId } = req.query;

  switch (req.method) {
    case 'PATCH':
      try {
        const { quantity, notes } = req.body;
        const result = await pool.query(
          `UPDATE list_items 
           SET quantity = COALESCE($1, quantity), 
               notes = COALESCE($2, notes)
           WHERE user_id = $3 AND product_id = $4
           RETURNING *`,
          [quantity, notes, userId, productId]
        );
        if (result.rows.length === 0) {
          return res.status(404).json({ error: 'Item not found' });
        }
        res.status(200).json(result.rows[0]);
      } catch (error) {
        console.error('Error updating list item:', error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
      break;

    case 'DELETE':
      try {
        const result = await pool.query(
          'DELETE FROM list_items WHERE user_id = $1 AND product_id = $2 RETURNING *',
          [userId, productId]
        );
        if (result.rows.length === 0) {
          return res.status(404).json({ error: 'Item not found' });
        }
        res.status(200).json({ message: 'Item removed successfully' });
      } catch (error) {
        console.error('Error removing list item:', error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
      break;

    default:
      res.setHeader('Allow', ['PATCH', 'DELETE']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}