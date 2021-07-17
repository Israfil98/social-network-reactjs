import s from "../UserAbout.module.css";
import React from "react";

export function UserDescription(props) {
    return (
        <div className={ s.description }>
            <div style={ {opacity: '0.5', marginRight: '5px'} }>{ props.descriptionName }</div>
            { props.description }
        </div>
    )
}
