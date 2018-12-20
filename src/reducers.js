const initialState = {
    count: 0
};

function reducer(state = initialState, action) {   
    switch (action.type) {
        case "INCREAMENT" :
        return {
            count: state.count + 1   
        }
        case "DECREAMENT" :
        return {
            count: state.count - 1   
        }
        default:
        return state;
    }
}

export default reducer;