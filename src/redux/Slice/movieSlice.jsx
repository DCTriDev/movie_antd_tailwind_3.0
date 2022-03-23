import {createSlice} from "@reduxjs/toolkit";
import httpService from "../../Services/http.service";

const initialState = {
    listMovie: null,
    listCinema: null,
}

const movieSlice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers: {
        setListMovie: (state, action) => {
            state.listMovie = action.payload
        },
        setListCinema: (state, action) => {
            state.listCinema = action.payload
        },
    }
})

export const setListMovieAction = () => {
    return (dispatch) => httpService.getListMovies()
        .then(res => {
            dispatch(movieSlice.actions.setListMovie(res.data.content))
        })
        .catch(err => console.log(err))
}

export const setListCinemaAction = () => {
    return (dispatch) => httpService.getListCinema()
        .then(res => {
            dispatch(movieSlice.actions.setListCinema(res.data.content))
        })
        .catch(err => console.log(err))
}

export default movieSlice.reducer;