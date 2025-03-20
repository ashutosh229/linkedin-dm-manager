import express from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import sequelize from "./config/database";
import redis from "./config/redis";
import esClient from "./config/elasticsearch";

dotenv.config();

const app = express();
app.use(cors())
app.use(express.json())
app.use(morgan("dev"))

app.get("/", (req, res) => {
    res.send("Linkedin DM Manager API is running")
})

sequelize.authenticate().then(() => console.log("Postgres is connected")).catch((error) => console.error("Postgres error occured:", error))

export default app