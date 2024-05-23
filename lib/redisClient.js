import Redis from 'ioredis';

const redisUrl = process.env.UPSTASH_REDIS_URL;

if (!redisUrl) {
  throw new Error("UPSTASH_REDIS_URL environment variable is not set");
}

const redis = new Redis(redisUrl, {
  tls: {
    rejectUnauthorized: false, // Set to true in production with a trusted certificate authority
  },
  connectTimeout: 10000, // 10 seconds connection timeout
  maxRetriesPerRequest: 5,
  retryStrategy: (times) => {
    const delay = Math.min(times * 50, 2000); // Try up to 2 seconds between retries
    console.log(`Reconnecting to Redis after ${delay}ms`);
    return delay;
  },
});

redis.on('error', (err) => {
  console.error('Redis error:', err);
});

redis.on('connect', () => {
  console.log('Connected to Redis');
});

redis.on('reconnecting', (delay) => {
  console.log(`Reconnecting to Redis after ${delay}ms`);
});

redis.on('end', () => {
  console.log('Redis connection ended');
});

redis.on('ready', () => {
  console.log('Redis client is ready to use');
});

export default redis;
