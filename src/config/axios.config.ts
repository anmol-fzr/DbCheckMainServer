import axios from "axios";
import env from "../util/env";

const baseURL = env.SERVICE_URL;

const instance = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/octet-stream",
  },
});

export default instance;
