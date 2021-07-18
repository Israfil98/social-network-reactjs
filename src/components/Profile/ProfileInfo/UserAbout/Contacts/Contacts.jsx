import s from "../UserAbout.module.css";
import React from "react";

export function Contacts(props) {
    return (
        <div className={ s.contacts }>
            <ul className={ s.contactsList }>
                Contacts:
                {
                    Object
                        .keys(props.profile.contacts)
                        .map((key) => {
                        return (
                            <ContactItem key={ key }
                                         contactType={ key }
                                         contactTypeText={ props.profile.contacts[key] }
                            />
                        )
                    })
                }
            </ul>
        </div>
    )
}

function ContactItem(props) {
    return (
        <li className={ s.contactItem }>
            <span style={ {opacity: '0.5', marginRight: '5px'} }>{ props.contactType }:</span>
            <a href={ props.contactTypeText }>{ props.contactTypeText }</a>
        </li>
    )
}
