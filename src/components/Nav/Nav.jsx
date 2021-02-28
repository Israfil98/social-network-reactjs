import React from 'react';
import s from "./Nav.module.css"
import {NavLink} from "react-router-dom";

const Nav = () => {
    return (
        <nav className={s.nav}>
            <ul className={s.navMenu}>
                <li className={s.navItem}>
                    <NavLink className={s.navLink} to="/profile" activeClassName={s.active}>My profile</NavLink>
                </li>
                <li className={s.navItem}>
                    <NavLink className={s.navLink} to="/dialogs" activeClassName={s.active}>Messages</NavLink>
                </li>
                <li className={s.navItem}>
                    <NavLink className={s.navLink} to="/users" activeClassName={s.active}>Users</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;