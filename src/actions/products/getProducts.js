import { GET_PRODUCTS } from "actions/const";
import { GetProducts } from "services/Products";
import WebProperties from "properties/web.content.json";

function action() {
  return dispatch => {
    GetProducts()
      .then(function(response) {
        console.log(response.data);
        dispatch({ type: GET_PRODUCTS, payload: response.data });
      })
      .catch(function(error) {
        dispatch({
          type: GET_PRODUCTS,
          payload: `${WebProperties.errorInAction} ${GET_PRODUCTS}`
        });
      });
  };
}
export default action;
