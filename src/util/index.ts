import requests from "./service/requests";

const SERVICE = {
  getFreqs: (body: unknown) => requests.POST("/", body),
};

export default SERVICE;
