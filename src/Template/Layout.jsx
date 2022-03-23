import React from 'react';
import Navbar from "../Components/Navbar/Navbar";

function Layout({Component}) {
    return (
        <div>
            <Navbar/>
            <Component/>
        </div>
    );
}

export default Layout;