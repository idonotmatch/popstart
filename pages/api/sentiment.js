/**
 * GET /api/sentiment?brand=Sony&category=headphones
 *
 * Returns a brand trust score based on Reddit discussions, analyzed with VADER.
 * Caches in Redis (24hr) and Postgres (persistent).
 */

import { searchRedditForBrand } from '../../lib/reddit';
import {
  extractTextFromThreads,
  applyHeuristicFilters,
  analyzeSentimentWithVader,
} from '../../lib/sentiment';
import { pool } from '../../lib/db';
import IORedis from 'ioredis';

const CACHE_TTL_SECONDS = 60 * 60 * 24; // 24 hours
const METHODOLOGY_VERSION = 'v2-brand-vader';

let redisClient = null;
try {
  if (process.env.REDIS_URL) {
    redisClient = new IORedis(process.env.REDIS_URL, { lazyConnect: true, enableOfflineQueue: false });
    redisClient.on('error', () => { redisClient = null; });
  }
} catch { redisClient = null; }

// Normalize brand names to a consistent cache key
function brandSlug(brand) {
  return brand.trim().toLowerCase().replace(/[^\w]+/g, '-');
}

async function ensureTable() {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS brand_sentiment (
        id SERIAL PRIMARY KEY,
        brand VARCHAR(255) NOT NULL UNIQUE,
        score INTEGER,
        label VARCHAR(20),
        confidence VARCHAR(10),
        summary TEXT,
        signal_count INTEGER DEFAULT 0,
        filtered_count INTEGER DEFAULT 0,
        filter_reasons JSONB DEFAULT '[]',
        sources_used JSONB DEFAULT '{}',
        reddit_threads JSONB DEFAULT '[]',
        methodology_version VARCHAR(20) DEFAULT 'v2-brand-vader',
        volume_factor INTEGER,
        velocity_factor INTEGER,
        velocity_label VARCHAR(50),
        available BOOLEAN DEFAULT false,
        calculated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);
  } catch { /* non-fatal */ }
}

// If a cached result has threads but none mention the brand, it's stale garbage data.
// Treat as cache miss so we re-fetch with the new hard-gate filter.
function isCacheValid(cached, brand) {
  if (!cached?.available) return true; // no-data results are always valid
  const threads = cached.reddit_threads || [];
  if (threads.length === 0) return true;
  const brandLower = brand.trim().toLowerCase();
  return threads.some(t => (t.title || '').toLowerCase().includes(brandLower));
}

async function getCached(brand) {
  const slug = brandSlug(brand);
  const cacheKey = `brand_sentiment:${slug}`;

  try {
    if (redisClient) {
      const val = await redisClient.get(cacheKey);
      if (val) {
        const parsed = JSON.parse(val);
        if (isCacheValid(parsed, brand)) return parsed;
        // Stale — evict from Redis so next call re-fetches
        redisClient.del(cacheKey).catch(() => {});
      }
    }
  } catch { /* miss */ }

  try {
    const result = await pool.query(
      `SELECT * FROM brand_sentiment
       WHERE brand = $1
       AND calculated_at > NOW() - INTERVAL '24 hours'`,
      [slug]
    );
    if (result.rows.length > 0) {
      const r = result.rows[0];
      const cached = {
        brand: r.brand,
        score: r.score,
        label: r.label,
        confidence: r.confidence,
        summary: r.summary,
        signal_count: r.signal_count,
        filtered_count: r.filtered_count,
        filter_reasons: r.filter_reasons,
        sources_used: r.sources_used,
        reddit_threads: r.reddit_threads,
        methodology_version: r.methodology_version,
        volume_factor: r.volume_factor,
        velocity_factor: r.velocity_factor,
        velocity_label: r.velocity_label,
        available: r.available,
        calculated_at: r.calculated_at,
      };
      if (isCacheValid(cached, brand)) return cached;
      // Stale DB record — delete it so next save overwrites cleanly
      pool.query('DELETE FROM brand_sentiment WHERE brand = $1', [slug]).catch(() => {});
    }
  } catch { /* miss */ }

  return null;
}

async function saveResult(brand, result) {
  const slug = brandSlug(brand);
  const cacheKey = `brand_sentiment:${slug}`;

  try {
    if (redisClient) {
      await redisClient.set(cacheKey, JSON.stringify(result), 'EX', CACHE_TTL_SECONDS);
    }
  } catch { /* non-fatal */ }

  try {
    await pool.query(
      `INSERT INTO brand_sentiment
        (brand, score, label, confidence, summary, signal_count, filtered_count,
         filter_reasons, sources_used, reddit_threads, methodology_version,
         volume_factor, velocity_factor, velocity_label, available, calculated_at)
       VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,NOW())
       ON CONFLICT (brand) DO UPDATE SET
         score=$2, label=$3, confidence=$4, summary=$5,
         signal_count=$6, filtered_count=$7, filter_reasons=$8,
         sources_used=$9, reddit_threads=$10, methodology_version=$11,
         volume_factor=$12, velocity_factor=$13, velocity_label=$14,
         available=$15, calculated_at=NOW()`,
      [
        slug,
        result.score, result.label, result.confidence, result.summary,
        result.signal_count, result.filtered_count,
        JSON.stringify(result.filter_reasons), JSON.stringify(result.sources_used),
        JSON.stringify(result.reddit_threads), METHODOLOGY_VERSION,
        result.volume_factor ?? null, result.velocity_factor ?? null,
        result.velocity_label ?? null, result.available ?? false,
      ]
    );
  } catch (e) {
    console.warn('Brand sentiment DB save failed (non-fatal):', e.message);
  }
}

ensureTable().catch(() => {});

export default async function handler(req, res) {
  if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed' });

  const { brand, category } = req.query;
  if (!brand || brand === 'N/A') {
    return res.status(400).json({ error: 'brand is required' });
  }

  // 1. Cache check
  const cached = await getCached(brand);
  if (cached) return res.status(200).json({ ...cached, cached: true });

  // 2. Reddit not configured — return gracefully
  if (!process.env.REDDIT_CLIENT_ID || !process.env.REDDIT_CLIENT_SECRET) {
    return res.status(200).json({ available: false, score: null, signal_count: 0,
      summary: 'Reddit API credentials not configured.' });
  }

  try {
    // 3. Fetch Reddit threads about this brand
    const threads = await searchRedditForBrand({ brand, category });

    // 4. Extract raw comment text
    const rawComments = extractTextFromThreads(threads);

    // 5. Apply heuristic filters
    const { kept, filtered } = applyHeuristicFilters(rawComments);

    const sourcesUsed = {
      reddit: {
        threads_found: threads.length,
        comments_collected: rawComments.length,
        comments_after_filter: kept.length,
      },
    };

    const redditThreadMeta = threads.map(t => ({
      title: t.title, subreddit: t.subreddit, score: t.score,
      url: t.url, comment_count: t.comments?.length || 0,
    }));

    // 6. Not enough signal
    if (kept.length < 3) {
      const noDataResult = {
        brand: brandSlug(brand),
        score: null, label: null, confidence: 'low',
        summary: `Only ${kept.length} signal(s) found for ${brand} — insufficient to score.`,
        signal_count: kept.length, filtered_count: filtered.length,
        filter_reasons: filtered.map(f => f.reason),
        sources_used: sourcesUsed, reddit_threads: redditThreadMeta,
        methodology_version: METHODOLOGY_VERSION, available: false,
      };
      saveResult(brand, noDataResult).catch(() => {});
      return res.status(200).json(noDataResult);
    }

    // 7. VADER sentiment analysis
    const analysis = analyzeSentimentWithVader(kept, threads);
    if (!analysis) return res.status(200).json({ available: false, signal_count: 0 });

    const result = {
      brand: brandSlug(brand),
      ...analysis,
      filtered_count: filtered.length,
      filter_reasons: [...new Set(filtered.map(f => f.reason))],
      sources_used: sourcesUsed,
      reddit_threads: redditThreadMeta,
      methodology_version: METHODOLOGY_VERSION,
      available: true,
      cached: false,
    };

    // 8. Persist (non-blocking)
    saveResult(brand, result).catch(() => {});

    return res.status(200).json(result);
  } catch (error) {
    console.error('Brand sentiment API error:', error.message);
    return res.status(200).json({ available: false, score: null, signal_count: 0, error: error.message });
  }
}
