import axios from "axios";
import { requestUrl } from "config";

function GetProducts() {
  return axios.get(`${requestUrl}products`);
}

export { GetProducts };
