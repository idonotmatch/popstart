import { getSession } from '@auth0/nextjs-auth0';
import { pool } from '../../../lib/db';

export default async function handler(req, res) {
  if (req.method !== 'PUT') return res.status(405).end();
  const session = await getSession(req, res);
  if (!session?.user) return res.status(401).json({ error: 'Unauthorized' });
  const userId = session.user.sub;

  // orderedIds: [{ product_id, source }, ...] in desired order
  const { orderedIds } = req.body;
  if (!Array.isArray(orderedIds)) return res.status(400).json({ error: 'orderedIds required' });

  const client = await pool.connect();
  try {
    await client.query('BEGIN');
    for (let i = 0; i < orderedIds.length; i++) {
      const { product_id, source } = orderedIds[i];
      await client.query(
        'UPDATE list_items SET row_order = $1 WHERE user_id = $2 AND product_id = $3 AND source = $4',
        [i, userId, product_id, source]
      );
    }
    await client.query('COMMIT');
    res.status(200).json({ ok: true });
  } catch (e) {
    await client.query('ROLLBACK');
    res.status(500).json({ error: e.message });
  } finally {
    client.release();
  }
}
