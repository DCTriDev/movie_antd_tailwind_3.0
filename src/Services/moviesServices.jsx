import axios from "axios";
import {BASE_URL, TOKEN_CYBERSOFT} from "../utils/config";

const moviesServices = {
    getMoviesServicesAPI: () => {
        return axios({
            url: `${BASE_URL}/api/QuanLyPhim/LayDanhSachPhim`,
            method: 'GET',
            headers: {
                TokenCybersoft: TOKEN_CYBERSOFT
            }
        })
    },
    getDetailsMoviesServicesAPI: (values) => {
        return axios({
            url: `${BASE_URL}/api/QuanLyPhim/LayThongTinPhim?MaPhim=${values}`,
            method: 'GET',
            headers: {
                TokenCybersoft: TOKEN_CYBERSOFT
            }
        })
    }
}

export default moviesServices;