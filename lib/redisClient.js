import Redis from 'ioredis';
import dotenv from 'dotenv';

// Load environment variables from .env.local
dotenv.config();

// Extract the Redis URL from environment variables
const redisUrl = process.env.UPSTASH_REDIS_URL;

// Initialize Redis client with enhanced settings and TLS/SSL enabled
const redisClient = new Redis(redisUrl, {
  tls: {
    rejectUnauthorized: false, // Set to true in production with a trusted certificate authority
  },
  connectTimeout: 10000, // 10 seconds connection timeout
  retryStrategy: (times) => {
    // Exponential backoff retry strategy
    const delay = Math.min(times * 50, 2000); // Try up to 2 seconds between retries
    console.log(`Reconnecting to Redis after ${delay}ms`);
    return delay;
  },
});

redisClient.on('error', (err) => {
  console.error('Redis error:', err);
});

redisClient.on('connect', () => {
  console.log('Connected to Redis');
});

redisClient.on('reconnecting', (delay) => {
  console.log(`Reconnecting to Redis after ${delay}ms`);
});

export default redisClient;
