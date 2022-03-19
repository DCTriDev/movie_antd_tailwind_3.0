import {GET_DETAILS_MOVIES, GET_LIST_MOVIES, SET_LIST_CINEMA} from "../constants/moviesTypes";
import moviesServices from "../../Services/moviesServices";
import httpService from "../../Services/http.service";

export const getListMoviesAction = (values) => ({
    type: GET_LIST_MOVIES,
    payload: values
});

export const getDetailsMoviesAction = (values) => ({
    type: GET_DETAILS_MOVIES,
    payload: values
});

export const setListCinemaAction = (values) => ({
    type: SET_LIST_CINEMA,
    payload: values
});

export const setListMoviesAction = () => {
    return (dispatch) => {
        httpService.getListMovies()
            .then((res) => {
                dispatch(getListMoviesAction(res.data.content))
            })
            .catch((err) => {
                console.log(err)
            })
    }
}

export const setDetailsMoviesAction = (values) => {
    return (dispatch) => {
        moviesServices.getDetailsMoviesServicesAPI(values)
            .then((res) => {
                dispatch(getDetailsMoviesAction(res.data.content))
            })
            .catch((err) => {
                console.log(err)
            })
    }
}

export const getListCinemaAction = () => {
    return (dispatch) => {
        httpService.getListCinema()
            .then((res) => {
                dispatch(setListCinemaAction(res.data.content))
            })
            .catch((err) => {
                console.log(err)
            })
    }
}

