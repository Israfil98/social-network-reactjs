import React from 'react';
import logo from '../../assets/img/atom.svg';
import s from './Header.module.css'
import { NavLink } from "react-router-dom";

const Header = (props) => {
    return (
        <header className={s.header}>
            <div className={s.container}>
                <img className={s.logo} src={logo} alt=''/>
                <div className={s.loginBlock}>
                    {
                        props.isAuth
                            ? props.login
                            : <NavLink to="/login">Login</NavLink>
                    }
                </div>
            </div>
        </header>
    );
};

export default Header;
