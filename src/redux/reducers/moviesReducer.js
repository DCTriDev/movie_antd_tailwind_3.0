import {GET_LIST_MOVIES} from "../constants/moviesTypes";

const initialState = {
    listMovies: []
}

const moviesReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_LIST_MOVIES: {
            return {...state,listMovies: action.payload}
        }
        default:
            return state
    }
}

export default moviesReducer;