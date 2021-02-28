import s from "./DialogItem.module.css";
import {NavLink} from "react-router-dom";
import React from "react";

const DialogItem = (props) => {
    return (
        <div className={s.dialogItem}>
            <NavLink to={"/dialogs/" + props.id} activeClassName={s.active}>{props.name}</NavLink>
        </div>
    );
};

export default DialogItem;