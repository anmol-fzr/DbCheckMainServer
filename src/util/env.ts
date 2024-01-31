import { config } from "dotenv";
config();

const isDev = process.env.MODE === "DEV";

export default {
  isDev,
  PORT: process.env.PORT || 8000,
  DB_URL: process.env.DB_URL || "mongodb://localhost:27017",
  SERVICE_URL: process.env.SERVICE_URL || "http://localhost:5000",
};
