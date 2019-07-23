import { combineReducers } from "redux";
import countReducer from "./incDecReducer";
import fetchNews  from "./fetchNewsReducer";

const allReducers = combineReducers({
    countReducer: countReducer,
    fetchNews: fetchNews
});

export default allReducers;