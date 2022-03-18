import React, {useEffect} from 'react';
import {setListMoviesAction} from "../../../redux/actions/moviesActions";
import {useDispatch, useSelector} from "react-redux";
import ItemMovies from "./ItemMovies";

function ListMovies() {
    const dispatch = useDispatch()
    let {listMovies} = useSelector(state => state.moviesReducer)
    useEffect(() => {
        dispatch(setListMoviesAction())
    },[])

    return (
        <div className='px-8 py-4 grid grid-cols-4 gap-8'>
            {listMovies.map((item,key) => {
                return <ItemMovies data={item} key={key}/>
            })}
        </div>
    );
}

export default ListMovies;