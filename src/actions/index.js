import { GET_MINICART, GET_MINICARTShow, GET_MINICARTPopover } from "./const";
import { GetMiniCart } from "../services/MiniCart";
import MiniCartPopover from "../services/MiniCartPopover";
import WebProperties from "properties/web.content.json";


function getMinicart() {
  return dispatch => {
    GetMiniCart()
      .then(function(response) {
        dispatch({ type: GET_MINICART, payload: response.data.minicart });
      })
      .catch(function(error) {
        dispatch({
          type: GET_MINICART,
          payload: `${WebProperties.errorInAction} ${GET_MINICART}`
        });
      });
  };
}
function getMinicartPopover() {
  return dispatch => {
    MiniCartPopover.GetMinicartPopover()
      .then(function(response) {
        dispatch({ type: GET_MINICARTPopover, payload: response.data });
      })
      .catch(function(error) {
        dispatch({
          type: GET_MINICARTPopover,
          payload: `${WebProperties.errorInAction} ${GET_MINICARTPopover}`
        });
      });
  };
}
function getMinicartShow(){
  return dispatch => {
    MiniCartPopover.GetMinicartShow()
      .then(function(response) {
        dispatch({ type: GET_MINICARTShow, payload: response });
      })
      .catch(function(error) {
        dispatch({
          type: GET_MINICARTShow,
          payload: `${WebProperties.errorInAction} ${GET_MINICARTShow}`
        });
      });
  };
}

const actions = {
    getMinicart,
    getMinicartPopover,
    getMinicartShow
};

export default actions;
