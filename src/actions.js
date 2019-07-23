const INCREAMENT = "INCREAMENT";
const DECREAMENT = "DECREAMENT";
const GET_NEWS = "GET_NEWS";

function inc(txt) {
    return { type: INCREAMENT, payload: txt }
};

function dec(txt) {
    return { type: DECREAMENT, payload: txt }
};

function getNews() {
   return { type: GET_NEWS }
}

const actions = {
    inc,
    dec,
    getNews
}

export default actions;