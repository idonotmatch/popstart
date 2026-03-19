import { getSession } from '@auth0/nextjs-auth0';
import { pool } from '../../../lib/db';

export default async function handler(req, res) {
  const session = await getSession(req, res);
  if (!session?.user) return res.status(401).json({ error: 'Unauthorized' });
  const userId = session.user.sub;

  if (req.method === 'GET') {
    const result = await pool.query(
      'SELECT * FROM custom_cell_values WHERE user_id = $1',
      [userId]
    );
    return res.status(200).json(result.rows);
  }

  if (req.method === 'PUT') {
    const { product_id, source, column_id, value } = req.body;
    await pool.query(
      `INSERT INTO custom_cell_values (user_id, product_id, source, column_id, value, updated_at)
       VALUES ($1, $2, $3, $4, $5, NOW())
       ON CONFLICT (user_id, product_id, source, column_id)
       DO UPDATE SET value = $5, updated_at = NOW()`,
      [userId, product_id, source, column_id, value]
    );
    return res.status(200).json({ ok: true });
  }

  res.status(405).end();
}
