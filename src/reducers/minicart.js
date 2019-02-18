import { GET_MINICART,  GET_MINICARTShow, GET_MINICARTPopover } from "actions/const";

function reducer(state = null, action) {
  const nextState = Object.assign({}, state);
  switch (action.type) {
    case GET_MINICART:
      nextState.minicart = action.payload;
      return nextState;
    case GET_MINICARTShow:
      nextState.minicartshow = action.payload;
      return nextState;
    case GET_MINICARTPopover:
      nextState.minicartpopover = action.payload;
      return nextState;
  }
  
  return state;
}

export default reducer;
