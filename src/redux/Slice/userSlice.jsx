import localServices from "../../Services/localServices";
import {createSlice} from "@reduxjs/toolkit";
import httpService from "../../Services/http.service";

const initialState = {
    userInfo: localServices.getUserInfo(),
}

const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {
        setUserInfo: (state, action) => {
            console.log(action.payload)
            state.userInfo = action.payload
            localServices.setUserInfo(action.payload)
        },
        removeUserInfo: (state) => {
            state.userInfo = null
        }
    }
})

export const userLoginActionThunk = (values) => {
    return (dispatch) => {
        httpService.login(values).then((res) => {
            dispatch(userSlice.actions.setUserInfo(res.data.content))
            window.location.href = '/'
        })
    }
}

export const {removeUserInfo} = userSlice.actions

export default userSlice.reducer;