import React from 'react';
import Navbar from "../../Components/Navbar/Navbar";
import ListMovies from "./ListMovies/ListMovies";
import ListCinemaTabs from "./ListCinemaTabs/ListCinemaTabs";

function HomePage() {
    return (
        <div>
            <Navbar/>
            <ListMovies/>
            <ListCinemaTabs/>
        </div>
    );
}

export default HomePage;