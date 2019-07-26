  const init = {
    email: '',
    password: ''
  }
  const myFormsReducer = (state = init, action) => {
      let newState = Object.assign({}, state);
      switch (action.type) {
        case "ADD_USER":
          newState.user = action.payload;
          return newState;       
        default:      
          return state
      }
  }
  export default myFormsReducer;