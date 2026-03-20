/**
 * Reddit API helper — client credentials OAuth flow (read-only, no user auth needed)
 * Docs: https://www.reddit.com/dev/api
 *
 * Search strategy: multi-pass — brand+model name first, then broader fallback.
 * ASINs are NOT used as queries (they don't appear in Reddit posts).
 */

const REDDIT_TOKEN_URL = 'https://www.reddit.com/api/v1/access_token';
const REDDIT_API_BASE = 'https://oauth.reddit.com';
const USER_AGENT = process.env.REDDIT_USER_AGENT || 'popstart/1.0 (consumer sentiment)';

// Subreddits known for high-quality product reviews and discussions
const REVIEW_SUBREDDITS = [
  'BuyItForLife', 'ZeroWaste', 'Frugal', 'personalfinance',
  'gadgets', 'headphones', 'audiophile', 'homeimprovement',
  'buildapc', 'laptops', 'androidquestions', 'iphone',
  'cordcutters', 'smarthome', 'HomeImprovement', 'malelivingspace',
  'AskTechSupport', 'techsupport',
].join('+');

// In-memory token cache (valid for 1hr per Reddit spec)
let _tokenCache = null;

async function getAccessToken() {
  if (_tokenCache && _tokenCache.expires_at > Date.now()) {
    return _tokenCache.access_token;
  }

  const clientId = process.env.REDDIT_CLIENT_ID;
  const clientSecret = process.env.REDDIT_CLIENT_SECRET;

  if (!clientId || !clientSecret) {
    throw new Error('REDDIT_CLIENT_ID and REDDIT_CLIENT_SECRET are required');
  }

  const credentials = Buffer.from(`${clientId}:${clientSecret}`).toString('base64');

  const res = await fetch(REDDIT_TOKEN_URL, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${credentials}`,
      'Content-Type': 'application/x-www-form-urlencoded',
      'User-Agent': USER_AGENT,
    },
    body: 'grant_type=client_credentials',
  });

  if (!res.ok) {
    throw new Error(`Reddit token request failed: ${res.status} ${res.statusText}`);
  }

  const data = await res.json();
  _tokenCache = {
    access_token: data.access_token,
    expires_at: Date.now() + (data.expires_in - 60) * 1000, // 60s buffer
  };

  return _tokenCache.access_token;
}

/**
 * Clean a product name into a concise search-friendly string.
 * Strips special chars, model numbers that are too long, and common
 * retailer filler words that add noise ("4K UHD", "Bundle", etc.).
 */
function buildProductQuery(name, brand) {
  const NOISE_WORDS = new Set([
    'bundle', 'pack', 'set', 'kit', 'edition', 'version', 'model',
    '4k', 'uhd', 'hd', 'fhd', 'oled', 'qled', 'led',
    'renewed', 'refurbished', 'certified', 'open', 'box',
    'black', 'white', 'silver', 'gold', 'blue', 'red',
    'with', 'and', 'for', 'the', 'new',
  ]);

  // Take the first 6 meaningful words of the product name
  const tokens = (name || '')
    .replace(/[^\w\s-]/g, ' ')
    .split(/\s+/)
    .filter(t => t.length > 1 && !NOISE_WORDS.has(t.toLowerCase()))
    .slice(0, 6);

  // Brand + first 4-5 tokens is usually enough for a precise query
  const cleanBrand = (brand && brand !== 'N/A' && brand.length < 30) ? brand.trim() : null;
  const cleanName = tokens.join(' ');

  return { cleanBrand, cleanName };
}

/**
 * Run a single Reddit search pass. Returns raw post data array.
 */
async function runSearch(query, token, limit = 15, timeRange = 'year') {
  const params = new URLSearchParams({
    q: query,
    sort: 'relevance',
    t: timeRange,
    limit: String(limit),
    type: 'link',
  });

  const res = await fetch(`${REDDIT_API_BASE}/search.json?${params}`, {
    headers: {
      Authorization: `Bearer ${token}`,
      'User-Agent': USER_AGENT,
    },
  });

  if (!res.ok) {
    throw new Error(`Reddit search failed: ${res.status}`);
  }

  const data = await res.json();
  return (data?.data?.children || []).map(p => p.data);
}

/**
 * Filter raw posts to high-signal ones.
 */
function filterPosts(posts) {
  return posts.filter(p =>
    p.score >= 2 &&
    p.num_comments >= 2 &&
    !p.over_18 &&
    !p.locked
  );
}

// Non-commercial signals grouped by confusion type.
// Each category is checked independently — a post hitting 2+ signals
// from the SAME category is a strong indicator of off-topic content.
const NON_COMMERCIAL_CATEGORIES = {
  ethnic_cultural: [
    'tribe', 'tribal', 'clan', 'nation', 'nations', 'indigenous', 'native american',
    'first nation', 'first nations', 'reservation', 'treaty', 'chief', 'shaman',
    'ancestry', 'ethnic', 'heritage', 'native people', 'aboriginal', 'peoples',
  ],
  geographic: [
    'city of', 'town of', 'county', 'river', 'mountain', 'valley', 'lake',
    'territory', 'province', 'district', 'township', 'municipality',
    'geography', 'geographic', 'region of', 'located in', 'situated in',
  ],
  historical: [
    'history of', 'historically', 'colonial', 'colonization', 'founded in',
    'century', 'era', 'ancient', 'archaeological', 'excavation', 'artifact',
    'war of', 'battle of', 'siege', 'empire', 'kingdom', 'dynasty',
  ],
  media_fictional: [
    'movie', 'film', 'tv show', 'television series', 'episode', 'season',
    'fictional', 'character', 'novel', 'book series', 'comic', 'anime',
    'video game', 'protagonist', 'villain', 'plot', 'screenplay',
  ],
  scientific_natural: [
    'species', 'subspecies', 'genus', 'taxonomy', 'specimen', 'habitat',
    'bird', 'mammal', 'reptile', 'insect', 'plant species', 'botanical',
    'scientific name', 'zoology', 'ornithology', 'entomology',
  ],
  political: [
    'political party', 'senator', 'congressman', 'governor', 'politician',
    'election', 'vote', 'ballot', 'campaign', 'legislature', 'parliament',
    'government of', 'prime minister', 'president of',
  ],
  mythological_religious: [
    'mythology', 'mythological', 'legend', 'deity', 'god of', 'goddess',
    'spiritual', 'sacred', 'ritual', 'worship', 'prayer', 'folk tale',
  ],
};

// Title patterns that reliably indicate non-commercial usage regardless of category
const NON_COMMERCIAL_TITLE_PATTERNS = [
  /\bhistory of\b/i,
  /\bwho (are|were) the\b/i,
  /\bwhat (is|are|was|were) (the )?\w+ (tribe|nation|people|city|town|river|mountain)/i,
  /\bmeaning of\b/i,
  /\borigins? of\b/i,
  /\bculture of\b/i,
  /\blegend of\b/i,
  /\bthe \w+ (tribe|nation|people|war|battle|empire|kingdom)/i,
];

// Subreddits that are always commercial/product-focused
const TRUSTED_PRODUCT_SUBS = new Set([
  'BuyItForLife', 'frugal', 'Frugal', 'gadgets', 'headphones', 'audiophile',
  'buildapc', 'laptops', 'homeimprovement', 'HomeImprovement', 'AskTechSupport',
  'techsupport', 'cordcutters', 'smarthome', 'malelivingspace',
  'femalefashionadvice', 'malefashionadvice', 'fashionadvice',
  'AutoDetailing', 'cars', 'Cartalk', 'running', 'cycling', 'hiking',
]);

// Subreddits that are never about consumer products
const EXCLUDED_SUBS = new Set([
  'history', 'AskHistory', 'worldhistory', 'HistoryMemes', 'badhistory',
  'AskAnthropology', 'Anthropology', 'IndigenousPeoples', 'NativeAmerican',
  'geography', 'Maps', 'MapPorn', 'GeographyNow',
  'movies', 'television', 'books', 'literature', 'scifi',
  'biology', 'zoology', 'botany', 'Ornithology',
  'politics', 'PoliticalDiscussion', 'Conservative', 'Liberal',
  'mythology', 'religion', 'Christianity', 'islam',
  'explainlikeimfive', 'AskReddit', 'TodayILearned',
]);

// Signals that indicate a thread IS about a commercial product or brand
const COMMERCIAL_SIGNALS = [
  'buy', 'bought', 'purchase', 'purchased', 'price', 'cost', 'cheap', 'expensive',
  'quality', 'review', 'recommend', 'worth it', 'owned', 'tried',
  'product', 'brand', 'store', 'shop', 'amazon', 'walmart', 'target', 'retailer',
  'size', 'fit', 'fits', 'wear', 'wearing', 'use', 'using',
  'material', 'fabric', 'durable', 'lasts', 'broke', 'defective', 'warranty',
  'customer service', 'return', 'refund', 'shipping',
];

/**
 * Returns true if the post appears to be about the brand in a commercial context.
 *
 * Strategy:
 * 1. Hard-reject posts from known non-product subreddits.
 * 2. Hard-accept posts from known product review subreddits.
 * 3. Reject posts matching non-commercial title patterns ("history of X", "who are the X").
 * 4. Reject posts where any single non-commercial category scores 2+ hits.
 * 5. Accept posts with at least 1 commercial signal.
 * 6. Accept posts where the product category appears in the text.
 * 7. Fallback: accept high-engagement posts with no strong signal either way.
 */
function isCommerciallyRelevant(post, category, brand) {
  const sub = (post.subreddit || '').replace(/^r\//i, '');

  // Hard gate: the brand name must actually appear in the thread title or body.
  // Reddit's search occasionally returns loose matches that mention the brand nowhere.
  if (brand) {
    const brandLower = brand.toLowerCase();
    const titleAndBody = `${post.title || ''} ${post.selftext || ''}`.toLowerCase();
    if (!titleAndBody.includes(brandLower)) return false;
  }

  // 1. Hard-reject known non-product subreddits
  if (EXCLUDED_SUBS.has(sub)) return false;

  // 2. Hard-accept known product review subreddits
  if (TRUSTED_PRODUCT_SUBS.has(sub)) return true;

  const title = (post.title || '').toLowerCase();
  const text = [title, (post.selftext || '').slice(0, 500)].join(' ');

  // 3. Reject non-commercial title patterns
  if (NON_COMMERCIAL_TITLE_PATTERNS.some(p => p.test(post.title || ''))) return false;

  // 4. Reject if any single non-commercial category has 2+ hits
  for (const signals of Object.values(NON_COMMERCIAL_CATEGORIES)) {
    const hits = signals.filter(s => text.includes(s)).length;
    if (hits >= 2) return false;
  }

  // 5. Accept if commercial signals present
  const commercialHits = COMMERCIAL_SIGNALS.filter(s => text.includes(s)).length;
  if (commercialHits >= 1) return true;

  // 6. Accept if product category appears in thread
  if (category) {
    const catTokens = category.toLowerCase().split(/\s+/);
    if (catTokens.some(t => t.length > 3 && text.includes(t))) return true;
  }

  // 7. Fallback: keep well-engaged posts with no strong signal either way
  return post.num_comments >= 5;
}

/**
 * Merge post arrays, deduplicating by post ID. Keeps first occurrence.
 */
function mergePosts(arrays) {
  const seen = new Set();
  const merged = [];
  for (const posts of arrays) {
    for (const p of posts) {
      if (!seen.has(p.id)) {
        seen.add(p.id);
        merged.push(p);
      }
    }
  }
  return merged;
}

/**
 * Search Reddit for discussions about a brand.
 * Multi-pass strategy:
 *   Pass 1: brand + trust/quality signals across all of Reddit (past year)
 *   Pass 2: brand in targeted review subreddits (all-time)
 *   Pass 3: broader fallback if fewer than 4 posts found
 *
 * Returns an array of { title, subreddit, score, url, body, comments[], created_utc }
 */
export async function searchRedditForBrand({ brand, category, limit = 15 }) {
  if (!brand || brand === 'N/A') return [];

  const token = await getAccessToken();
  const cleanBrand = brand.trim().replace(/[^\w\s-]/g, '').slice(0, 40);

  const allPosts = [];

  // Pass 1: brand name + trust/quality signals, past year
  const q1 = `"${cleanBrand}" review OR quality OR reliable OR recommend OR avoid`;
  const p1 = await runSearch(q1, token, limit, 'year');
  allPosts.push(...filterPosts(p1).filter(p => isCommerciallyRelevant(p, category, cleanBrand)));

  // Pass 2: brand in review subreddits, all-time
  const q2 = `"${cleanBrand}" subreddit:${REVIEW_SUBREDDITS}`;
  const p2 = await runSearch(q2, token, limit, 'all');
  allPosts.push(...filterPosts(p2).filter(p => isCommerciallyRelevant(p, category, cleanBrand)));

  // Pass 3: broader fallback if still < 4 results
  if (mergePosts([allPosts]).length < 4) {
    const q3 = category
      ? `${cleanBrand} ${category} experience OR opinion`
      : `${cleanBrand} brand experience OR opinion`;
    const p3 = await runSearch(q3, token, limit, 'all');
    allPosts.push(...filterPosts(p3).filter(p => isCommerciallyRelevant(p, category, cleanBrand)));
  }

  // Deduplicate, sort by most discussed, take top 8
  const top = mergePosts([allPosts])
    .sort((a, b) => b.num_comments - a.num_comments)
    .slice(0, 8);

  // Fetch comments for top 5 posts
  const postsWithComments = await Promise.all(
    top.slice(0, 5).map(post => fetchTopComments(post, token))
  );

  return postsWithComments;
}

async function fetchTopComments(post, token) {
  try {
    const res = await fetch(
      `${REDDIT_API_BASE}/comments/${post.id}.json?limit=25&sort=top&depth=1`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'User-Agent': USER_AGENT,
        },
      }
    );

    if (!res.ok) {
      return buildPostObject(post, []);
    }

    const data = await res.json();
    const commentListing = data?.[1]?.data?.children || [];

    const comments = commentListing
      .map(c => c.data)
      .filter(c =>
        c.body &&
        c.body !== '[deleted]' &&
        c.body !== '[removed]' &&
        c.score >= 1 &&
        c.body.split(' ').length >= 10
      )
      .slice(0, 20)
      .map(c => ({
        body: c.body,
        score: c.score,
        author: c.author,
        created_utc: c.created_utc,
      }));

    return buildPostObject(post, comments);
  } catch {
    return buildPostObject(post, []);
  }
}

function buildPostObject(post, comments) {
  return {
    title: post.title,
    subreddit: post.subreddit_name_prefixed,
    score: post.score,
    created_utc: post.created_utc,
    url: `https://reddit.com${post.permalink}`,
    body: post.selftext || '',
    comments,
  };
}
