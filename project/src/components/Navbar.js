import React from 'react';
import 'D:/SpendWise/project/src/styles/Navbar.css';

const Navbar = () => {
    return (
    <nav className="navbar">
        <img src="D:\SpendWise\project\assets\logo-no-background.png" className="logo"/>
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