const init = {
  count: 0
}
const reducer = (state = init, action) => {
    let newState = Object.assign({}, state);
    switch (action.type) {
      case "INCREAMENT":
        newState.count = state.count + action.data;
        return newState;
      case "DECREAMENT":
         newState.count = state.count - action.data;
         return newState;
      default:
        return state
    }
}
export default reducer;