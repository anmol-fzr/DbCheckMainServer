import { AxiosRequestConfig } from "axios";
import instance from "../config/axios.config";

const requests = {
  POST: <O, I>(URL: string, body: I, config?: AxiosRequestConfig) =>
    instance.post<O>(URL, body, config),
};

export default requests;
