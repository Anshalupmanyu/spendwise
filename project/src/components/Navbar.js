import React from 'react';
import '../styles/Navbar.css'
import logo from '../assets/logo-no-background.png'

const Navbar = () => {
    return (
    <nav className="navbar">
        <img src={logo} className="logo" />
        <div className="center-links">
            <a href="#">Home</a>
            <a href="#">Budget</a>
            <a href="#">History</a>
            <a href="#">Suggestions</a>
        </div>


        <div className="right-links">
            <a href="#">Sign In</a>
        </div>
    </nav>
    );
};

export default Navbar;