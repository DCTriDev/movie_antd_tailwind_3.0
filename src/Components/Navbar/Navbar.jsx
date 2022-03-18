import React from 'react';
import UserNav from "./UserNav";
import {NavLink} from "react-router-dom";

function Navbar() {
    return (
        <div className='flex justify-between items-center px-8 py-4 bg-gray-300'>
            <NavLink to='/'><div>Movie</div></NavLink>
            <div>Menu</div>
            <UserNav/>
        </div>
    );
}

export default Navbar;