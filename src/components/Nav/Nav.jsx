import React from 'react';
import "./Nav.css"

const Nav = () => {
    return (
        <nav className="nav">
            <ul className="nav__menu">
                <li className="nav__item">
                    <a className="nav__link" href="#">Profile</a>
                </li>
                <li className="nav__item">
                    <a className="nav__link" href="#">Messages</a>
                </li>
                <li className="nav__item">
                    <a className="nav__link" href="#">Users</a>
                </li>
                <li className="nav__item">
                    <a className="nav__link" href="#">Settings</a>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;