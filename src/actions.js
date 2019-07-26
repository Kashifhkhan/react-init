const INCREAMENT = "INCREAMENT";
const DECREAMENT = "DECREAMENT";
const GET_NEWS = "GET_NEWS";
const ADD_USER = "ADD_USER";

function inc(txt) {
    return { type: INCREAMENT, payload: txt }
};

function dec(txt) {
    return { type: DECREAMENT, payload: txt }
};

function registerUser(user){
    return {
        type: ADD_USER,
        payload: user
    }
}

function getNews() {
   return { type: GET_NEWS }
}

const customActions = {
    inc,
    dec,
    getNews,
    registerUser
}

export default customActions;