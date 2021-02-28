import React from 'react';
import logo from "../../assets/img/atom.svg";
import s from "./Header.module.css"

const Header = () => {
    return (
        <header className={s.header}>
            <div className={s.container}>
                <img className={s.logo} src={logo} alt=""/>
            </div>
        </header>
    );
};

export default Header;