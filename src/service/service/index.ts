import requests from "../requests";

const FREQ = {
  GET_DOMINANT: (body: unknown) => requests.POST("/", body),
};

export default FREQ;
