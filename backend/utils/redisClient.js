const redis = require("redis");
require("dotenv").config();

const redisClient = redis.createClient({
  socket: {
    port: process.env.REDIS_PORT,
    host: process.env.REDIS_HOST,
  },
  password: process.env.REDIS_PASSWORD,
  legacyMode: true,
});
redisClient.on("connect", () => console.log("Connected to Redis!"));
redisClient.on("error", (err) => console.log("Redis Client Error", err));

redisClient.connect();

module.exports = redisClient;
