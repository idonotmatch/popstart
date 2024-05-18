const redis = require('redis');

async function createRedisClient() {
  const client = redis.createClient({
    url: process.env.REDIS_URL,
  });

  client.on('error', (err) => {
    console.log('Redis Client Error', err);
  });

  try {
    await client.connect();
    console.log('Connected to Redis');
  } catch (err) {
    console.error('Failed to connect to Redis', err);
  }

  return client;
}

module.exports = createRedisClient();
