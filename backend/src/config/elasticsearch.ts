import { Client } from "@elastic/elasticsearch";
import dotenv from "dotenv"

dotenv.config()

const esClient = new Client({
    node: process.env.ELASTICSEARCH_URL as string,
    auth: {
        username: process.env.ELASTICSEARCH_USER as string,
        password: process.env.ELASTICSEARCH_PASS as string,
    }
})

esClient.ping().then(() => console.log("Elasticsearch is connected")).catch((error) => console.error("Elasticsearch error occured:", error))

export default esClient