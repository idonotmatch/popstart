/**
 * Consumer sentiment analysis using VADER (rule-based, no API cost).
 * Applies layered bot/AI heuristic filters before scoring.
 */

import { SentimentIntensityAnalyzer } from 'vader-sentiment';

// ─── Bot / AI Heuristic Filters ─────────────────────────────────────────────

/**
 * Applies heuristic filters to an array of comment strings.
 * Returns { kept: string[], filtered: { text, reason }[] }
 */
export function applyHeuristicFilters(comments) {
  const kept = [];
  const filtered = [];

  for (const comment of comments) {
    const text = typeof comment === 'string' ? comment : comment.body || '';
    const wordCount = text.trim().split(/\s+/).length;

    // 1. Too short — low signal
    if (wordCount < 15) {
      filtered.push({ text: text.slice(0, 60), reason: 'too short (<15 words)' });
      continue;
    }

    // 2. Uniform sentence lengths — AI-generated signal
    const sentences = text.split(/[.!?]+/).filter(s => s.trim().length > 0);
    if (sentences.length >= 4) {
      const lengths = sentences.map(s => s.trim().split(/\s+/).length);
      const avg = lengths.reduce((a, b) => a + b, 0) / lengths.length;
      const variance = lengths.reduce((sum, l) => sum + Math.pow(l - avg, 2), 0) / lengths.length;
      if (variance < 2) {
        filtered.push({ text: text.slice(0, 60), reason: 'uniform sentence length (likely AI)' });
        continue;
      }
    }

    // 3. Generic praise with no product-specific detail
    const genericPatterns = [
      /^(great|amazing|excellent|perfect|awesome|fantastic)\s+(product|item|buy|purchase)\.?$/i,
      /^highly recommend\.?$/i,
      /^five stars\.?$/i,
    ];
    if (genericPatterns.some(p => p.test(text.trim()))) {
      filtered.push({ text: text.slice(0, 60), reason: 'generic praise, no specifics' });
      continue;
    }

    // 4. Excessive exclamation marks
    const exclamations = (text.match(/!/g) || []).length;
    if (exclamations > 4 && wordCount < 50) {
      filtered.push({ text: text.slice(0, 60), reason: 'excessive exclamation marks' });
      continue;
    }

    kept.push(text);
  }

  return { kept, filtered };
}

// ─── Extract text from Reddit threads ───────────────────────────────────────

export function extractTextFromThreads(threads) {
  const chunks = [];
  for (const thread of threads) {
    if (thread.body && thread.body.length > 20) chunks.push(thread.body);
    for (const comment of thread.comments || []) {
      const body = typeof comment === 'string' ? comment : comment.body;
      if (body) chunks.push(body);
    }
  }
  return chunks;
}

// ─── VADER Sentiment Scoring ─────────────────────────────────────────────────

/**
 * Score a single text string. Returns compound in [-1, 1].
 */
function scoreText(text) {
  return SentimentIntensityAnalyzer.polarity_scores(text).compound;
}

/**
 * Extract the most positive / most negative sentences across all comments.
 * Used for pros/cons without an LLM.
 */
function extractProsCons(comments) {
  const allSentences = [];

  for (const comment of comments) {
    const sentences = comment
      .split(/(?<=[.!?])\s+/)
      .map(s => s.trim())
      .filter(s => s.split(/\s+/).length >= 6 && s.split(/\s+/).length <= 30);

    for (const sentence of sentences) {
      const compound = scoreText(sentence);
      allSentences.push({ sentence, compound });
    }
  }

  const sorted = allSentences.sort((a, b) => b.compound - a.compound);

  const pros = sorted
    .filter(s => s.compound >= 0.3)
    .slice(0, 3)
    .map(s => s.sentence.replace(/^["']+|["']+$/g, '').trim());

  const cons = sorted
    .filter(s => s.compound <= -0.2)
    .reverse()
    .slice(0, 3)
    .map(s => s.sentence.replace(/^["']+|["']+$/g, '').trim());

  return { pros, cons };
}

// ─── Volume multiplier ───────────────────────────────────────────────────────
// Dampens scores toward 0 when signal count is low.
// The score needs real backing before we show strong sentiment.
function volumeMultiplier(count) {
  if (count === 0) return 0;
  if (count < 5)  return 0.25;
  if (count < 10) return 0.45;
  if (count < 20) return 0.65;
  if (count < 40) return 0.80;
  if (count < 75) return 0.90;
  return 1.0;
}

// ─── Velocity multiplier ─────────────────────────────────────────────────────
// Weights recency of discussions. Stale conversations count less.
function velocityMultiplier(threads) {
  if (!threads || threads.length === 0) return 0.5;

  const now = Date.now() / 1000; // unix seconds
  const ages = threads
    .filter(t => t.created_utc)
    .map(t => (now - t.created_utc) / (60 * 60 * 24)); // age in days

  if (ages.length === 0) return 0.6;

  const avgAgeDays = ages.reduce((a, b) => a + b, 0) / ages.length;
  const recentCount = ages.filter(a => a <= 90).length;
  const recentFraction = recentCount / ages.length;

  // Base multiplier on average age
  let base;
  if (avgAgeDays <= 30)  base = 1.1;  // very active recently
  else if (avgAgeDays <= 90)  base = 1.0;
  else if (avgAgeDays <= 180) base = 0.85;
  else if (avgAgeDays <= 365) base = 0.70;
  else base = 0.55;

  // Boost if many recent threads, even if average is older
  const recencyBoost = recentFraction >= 0.5 ? 0.1 : 0;

  return Math.min(base + recencyBoost, 1.15);
}

/**
 * Main sentiment analysis entry point.
 * Returns { score, rawScore, label, confidence, pros, cons, summary,
 *           signal_count, volume_factor, velocity_factor }
 */
export function analyzeSentimentWithVader(filteredComments, threads = []) {
  if (!filteredComments || filteredComments.length === 0) return null;

  // Score each comment
  const scores = filteredComments.map(c => scoreText(c));
  const avgCompound = scores.reduce((a, b) => a + b, 0) / scores.length;

  // Raw VADER score [-10, 10]
  const rawScore = avgCompound * 10;

  // Apply volume + velocity dampening
  const volFactor  = volumeMultiplier(filteredComments.length);
  const velFactor  = velocityMultiplier(threads);
  const dampened   = rawScore * volFactor * velFactor;
  const score      = Math.round(Math.max(-10, Math.min(10, dampened)));

  // Label based on dampened score
  let label;
  if (score >= 3) label = 'positive';
  else if (score <= -3) label = 'negative';
  else label = 'mixed';

  // Confidence incorporates both volume and velocity
  const effectiveFactor = volFactor * velFactor;
  let confidence;
  if (filteredComments.length >= 20 && effectiveFactor >= 0.75) confidence = 'high';
  else if (filteredComments.length >= 8 && effectiveFactor >= 0.5) confidence = 'medium';
  else confidence = 'low';

  // Pros / cons from sentence-level scoring
  const { pros, cons } = extractProsCons(filteredComments);

  // Velocity context for display
  const now = Date.now() / 1000;
  const recentThreads = threads.filter(t => t.created_utc && (now - t.created_utc) < 90 * 86400).length;
  const velocityLabel = recentThreads >= 2 ? 'active' : recentThreads === 1 ? 'some recent activity' : 'older discussions';

  // Summary
  const pct = Math.round(scores.filter(s => s >= 0.05).length / scores.length * 100);
  const summary = `${pct}% of ${filteredComments.length} signals positive · ${velocityLabel}. ` +
    `Score dampened by volume (${Math.round(volFactor * 100)}%) and recency (${Math.round(velFactor * 100)}%).`;

  return {
    score, label, confidence, pros, cons, summary,
    signal_count: filteredComments.length,
    volume_factor: Math.round(volFactor * 100),
    velocity_factor: Math.round(velFactor * 100),
    velocity_label: velocityLabel,
  };
}
