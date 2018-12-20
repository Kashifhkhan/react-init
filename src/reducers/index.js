import { combineReducers } from "redux";
import countReducer from "./incDecReducer";

const allReducers = combineReducers({
    countReducer: countReducer
});

export default allReducers;