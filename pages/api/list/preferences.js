import { getSession } from '@auth0/nextjs-auth0';
import { pool } from '../../../lib/db';

export default async function handler(req, res) {
  const session = await getSession(req, res);
  if (!session?.user) return res.status(401).json({ error: 'Unauthorized' });
  const userId = session.user.sub;

  if (req.method === 'GET') {
    const result = await pool.query(
      'SELECT column_config FROM user_list_preferences WHERE user_id = $1',
      [userId]
    );
    return res.status(200).json({ column_config: result.rows[0]?.column_config || null });
  }

  if (req.method === 'PUT') {
    const { column_config } = req.body;
    await pool.query(
      `INSERT INTO user_list_preferences (user_id, column_config, updated_at)
       VALUES ($1, $2, NOW())
       ON CONFLICT (user_id) DO UPDATE SET column_config = $2, updated_at = NOW()`,
      [userId, JSON.stringify(column_config)]
    );
    return res.status(200).json({ ok: true });
  }

  res.status(405).end();
}
