import {REMOVE_USER_LOCAL, SET_USER_LOCAL} from "../constants/userTypes";
import localServices from "../../Services/localServices";

const initialState = {
    userInfo: localServices.getUserInfo()
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_LOCAL: {
            return {...state, userInfo: action.payload}
        }
        case REMOVE_USER_LOCAL: {
            return {...state, userInfo: ''}
        }
        default:
            return state
    }
}

export default userReducer;