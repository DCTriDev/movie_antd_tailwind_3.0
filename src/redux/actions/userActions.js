import {REMOVE_USER_LOCAL, SET_USER_LOCAL} from "../constants/userTypes";
import userServices from "../../Services/userServices";
import localServices from "../../Services/localServices";

export const userLoginAction = (values) => ({
    type: SET_USER_LOCAL,
    payload: values
})

export const userLogoutAction = () => ({
    type: REMOVE_USER_LOCAL,
})

export const userLoginThunkAction = (values, showErr = () => {}) => {
    return (dispatch) => {
        userServices.signInServiceAPI(values)
            .then((res) => {
                dispatch(userLoginAction(res.data.content))
                localServices.setUserInfo(res.data.content)
                window.location.href='/'
            })
            .catch((err) => {
                showErr(err.response.data.content)
            })
    }
}