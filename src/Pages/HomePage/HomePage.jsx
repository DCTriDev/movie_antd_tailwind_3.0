import React from 'react';
import Navbar from "../../Components/Navbar/Navbar";
import ListMovies from "./ListMovies/ListMovies";

function HomePage() {
    return (
        <div>
            <Navbar/>
            <ListMovies/>
        </div>
    );
}

export default HomePage;