import React from 'react';
import Navbar from "../../Components/Navbar/Navbar";
import ListMovie from "./ListMovies/ListMovie";
import ListCinemaTabs from "./ListCinemaTabs/ListCinemaTabs";

function HomePage() {
    return (
        <div>
            <ListMovie/>
            <ListCinemaTabs/>
        </div>
    );
}

export default HomePage;