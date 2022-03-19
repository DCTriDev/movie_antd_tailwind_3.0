import {combineReducers} from "redux";
import userReducer from "./userReducer";
import moviesReducer from "./moviesReducer";
import loadingAnimateReducer from "./loadingAnimateReducer";

const rootReducer = combineReducers({
    userReducer,
    moviesReducer,
    loadingAnimateReducer,
})

export default rootReducer;