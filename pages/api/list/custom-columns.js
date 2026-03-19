import { getSession } from '@auth0/nextjs-auth0';
import { pool } from '../../../lib/db';

export default async function handler(req, res) {
  const session = await getSession(req, res);
  if (!session?.user) return res.status(401).json({ error: 'Unauthorized' });
  const userId = session.user.sub;

  if (req.method === 'GET') {
    const cols = await pool.query(
      'SELECT * FROM custom_columns WHERE user_id = $1 ORDER BY col_order ASC',
      [userId]
    );
    return res.status(200).json(cols.rows);
  }

  if (req.method === 'POST') {
    const { name, col_type = 'text' } = req.body;
    if (!name?.trim()) return res.status(400).json({ error: 'Name required' });
    const orderRes = await pool.query(
      'SELECT COALESCE(MAX(col_order), -1) + 1 AS next_order FROM custom_columns WHERE user_id = $1',
      [userId]
    );
    const col = await pool.query(
      'INSERT INTO custom_columns (user_id, name, col_type, col_order) VALUES ($1, $2, $3, $4) RETURNING *',
      [userId, name.trim(), col_type, orderRes.rows[0].next_order]
    );
    return res.status(201).json(col.rows[0]);
  }

  if (req.method === 'DELETE') {
    const { id } = req.query;
    await pool.query('DELETE FROM custom_columns WHERE id = $1 AND user_id = $2', [id, userId]);
    return res.status(200).json({ ok: true });
  }

  if (req.method === 'PATCH') {
    // Rename or reorder
    const { id } = req.query;
    const { name, col_order } = req.body;
    const updates = [];
    const values = [];
    if (name !== undefined) { updates.push(`name = $${values.length + 1}`); values.push(name); }
    if (col_order !== undefined) { updates.push(`col_order = $${values.length + 1}`); values.push(col_order); }
    if (!updates.length) return res.status(400).json({ error: 'Nothing to update' });
    values.push(id, userId);
    await pool.query(
      `UPDATE custom_columns SET ${updates.join(', ')} WHERE id = $${values.length - 1} AND user_id = $${values.length}`,
      values
    );
    return res.status(200).json({ ok: true });
  }

  res.status(405).end();
}
