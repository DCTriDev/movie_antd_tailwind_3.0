import {combineReducers} from "redux";
import userReducer from "./userReducer";
import moviesReducer from "./moviesReducer";

const rootReducer = combineReducers({
    userReducer,
    moviesReducer,
})

export default rootReducer;