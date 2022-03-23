import AxiosServ from "./axios.service";

/* eslint-disable no-useless-constructor */
class HttpRequestService {
    constructor() {
    }

    login = (data, setLoading = true) => {
        const uri = "/api/QuanLyNguoiDung/DangNhap";
        return AxiosServ.postMethod(uri, data, setLoading);
    };

    signup = (data, setLoading = true) => {
        const uri = "/api/QuanLyNguoiDung/DangKy";
        return AxiosServ.postMethod(uri, data, setLoading);
    };

    getListMovies = (data, setLoading = true) => {
        const uri = '/api/QuanLyPhim/LayDanhSachPhim'
        return AxiosServ.getMethod(uri, data, setLoading)
    }

    getListCinema = (data, setLoading = true) => {
        const uri = '/api/QuanLyRap/LayThongTinLichChieuHeThongRap'
        return AxiosServ.getMethod(uri, data, setLoading)
    }
}

const httpService = new HttpRequestService();

export default httpService;
