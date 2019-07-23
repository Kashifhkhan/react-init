const init = {
  count: 0
}
const countReducer = (state = init, action) => {
    let newState = Object.assign({}, state);
    switch (action.type) {
      case "INCREAMENT":
        newState.count = state.count + action.payload;
        return newState;
      case "DECREAMENT":
         newState.count = state.count - action.payload;
         return newState;
      case "GET_NEWS": 
          return newState;
      case "NEWS_RECEIVED":
          newState.news = action.json;
          return newState;
      default:      
        return state
    }
}
export default countReducer;