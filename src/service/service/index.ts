import requests from "../requests";
import IFreqRes from "../../type/response";

const FREQ = {
  GET_DOMINANT: (body: Buffer) => requests.POST<IFreqRes, Buffer>("/", body),
};

export default FREQ;
