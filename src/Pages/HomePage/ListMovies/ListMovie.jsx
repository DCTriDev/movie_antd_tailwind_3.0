import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {setListMovieAction} from "../../../redux/Slice/movieSlice";
import ItemMovie from "./ItemMovie";

function ListMovie() {
    const dispatch = useDispatch()

    let {listMovie} = useSelector(state => state.movieSlice)

    console.log(listMovie)
    useEffect(() => {
        dispatch(setListMovieAction())
    }, [])

    return (
        <div className='px-8 py-4 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-8'>
            {listMovie?.map((item,key) => {
                return <ItemMovie data={item} key={key}/>
            })}
        </div>
    );
}

export default ListMovie;