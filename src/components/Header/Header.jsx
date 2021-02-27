import React from 'react';
import logo from "../../assets/img/atom.svg";
import "./Header.css"

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <img className="logo" src={logo} alt=""/>
            </div>
        </header>
    );
};

export default Header;