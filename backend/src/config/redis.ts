import Redis from "ioredis";
import dotenv from "dotenv"

dotenv.config();

const redis = new Redis({
    host: process.env.REDIS_HOST,
    port: Number(process.env.REDIS_PORT)
})

redis.on("connect", () => console.log("Redis is connected"))
redis.on("error", (error) => console.error("Redis error occured:", error))

export default redis