import { combineReducers } from "redux";
import countReducer from "./incDecReducer";
import fetchNews  from "./fetchNewsReducer";
import { reducer as formReducer } from 'redux-form'

const allReducers = combineReducers({
    countReducer: countReducer,
    fetchNews: fetchNews,
    form: formReducer
});

export default allReducers;