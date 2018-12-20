const INCREAMENT = "INCREAMENT";
const DECREAMENT = "DECREAMENT";

function inc(text) {
    return dispatch => {
        dispatch({ type: INCREAMENT, data: text });
    }
};

function dec(text) {
    return dispatch => {
        dispatch({ type: DECREAMENT, data: text });
    }
};

const actions = {
    inc,
    dec
}

export default actions;