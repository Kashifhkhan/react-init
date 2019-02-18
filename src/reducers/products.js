import { GET_PRODUCTS, SORT_PRODUCTS } from "actions/const";

const initialState = {
  list: [],
  loading: false,
  error: null
};

function reducer(state = initialState, action) {
  const nextState = Object.assign({}, state);
  switch (action.type) {
    case GET_PRODUCTS:
      nextState.list = action.payload;
      nextState.loading = false;
      return nextState;
    case SORT_PRODUCTS:

    console.log(action.payload);
      nextState.list = action.payload;
      nextState.loading = false;
      return nextState;
  }
  return state;
}

export default reducer;
