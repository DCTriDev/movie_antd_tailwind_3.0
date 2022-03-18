import axios from "axios";
import {BASE_URL, TOKEN_CYBERSOFT} from "../utils/config";

const userServices = {
    signUpServiceAPI: (values) => {
        return axios({
            url: `${BASE_URL}/api/QuanLyNguoiDung/DangKy`,
            method: 'POST',
            data: values,
            headers: {
                TokenCybersoft: TOKEN_CYBERSOFT
            }
        })
    },
    signInServiceAPI: (values) => {
        return axios({
            url: `${BASE_URL}/api/QuanLyNguoiDung/DangNhap`,
            method: 'POST',
            data: values,
            headers: {
                TokenCybersoft: TOKEN_CYBERSOFT
            }
        })
    }
}

export default userServices;