import axios from "axios";
import { requestUrl } from "config";

function GetMinicartPopover() {
  return axios.get(`${requestUrl}Cart_react-MiniCartPopover`);
}

function GetMinicartShow() {
  return axios.get(`${requestUrl}Cart-MiniCartShow`);
}

const MiniCartPopover = {
  GetMinicartPopover,
  GetMinicartShow
}

export default MiniCartPopover;
