import axios from "axios";
import { requestUrl } from "config";

function GetMiniCart() {
  return axios.get(`${requestUrl}Cart_react-MiniCart`);
}

export { GetMiniCart };
