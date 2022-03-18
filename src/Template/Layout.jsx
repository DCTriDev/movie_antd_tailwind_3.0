import React from 'react';
import Navbar from "../Components/Navbar/Navbar";

function Layout({Component, maPhim}) {
    return (
        <div>
            <Navbar/>
            <Component maPhim={maPhim}/>
        </div>
    );
}

export default Layout;