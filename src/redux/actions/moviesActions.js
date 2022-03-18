import {GET_DETAILS_MOVIES, GET_LIST_MOVIES} from "../constants/moviesTypes";
import moviesServices from "../../Services/moviesServices";

export const getListMoviesAction = (values) => ({
    type: GET_LIST_MOVIES,
    payload: values
});

export const getDetailsMoviesAction = (values) => ({
    type: GET_DETAILS_MOVIES,
    payload: values
});

export const setListMoviesAction = () => {
    return (dispatch) => {
        moviesServices.getMoviesServicesAPI()
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
                console.log(res)
                dispatch(getDetailsMoviesAction(res.data.content))
            })
            .catch((err) => {
                console.log(err)
            })
    }
}

