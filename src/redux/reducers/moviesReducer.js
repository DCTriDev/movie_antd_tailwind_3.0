import {GET_DETAILS_MOVIES, GET_LIST_MOVIES, SET_LIST_CINEMA} from "../constants/moviesTypes";

const initialState = {
    listMovies: [],
    detailsMovies: {},
    listCinema: [],
}

const moviesReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_LIST_MOVIES: {
            return {...state, listMovies: action.payload}
        }
        case GET_DETAILS_MOVIES: {
            return {...state, detailsMovies: action.payload}
        }
        case SET_LIST_CINEMA: {
            return {...state,listCinema: action.payload}
        }
        default:
            return state
    }
}

export default moviesReducer;