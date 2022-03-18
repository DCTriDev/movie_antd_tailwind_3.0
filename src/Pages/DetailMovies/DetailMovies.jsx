import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {setDetailsMoviesAction, setListMoviesAction} from "../../redux/actions/moviesActions";

function DetailMovies({maPhim}) {
    let {listMovies} = useSelector(state =>state.moviesReducer)
    console.log(maPhim)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(setDetailsMoviesAction(maPhim))
    }, []);

    return (
        <div>Details</div>

    );
}

export default DetailMovies;