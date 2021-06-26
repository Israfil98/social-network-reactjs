import React from 'react';
import { NavLink } from "react-router-dom";

import s from "./User.module.css";

import userPhoto from "../../../assets/img/user.png";

const User = React.memo((props) => {
    return (
        <div className={ s.userItem }>
            <div className={ s.userAbout }>
                <NavLink to={ "/profile/" + props.id }>
                    <img className={ s.userPhoto }
                         src={ props.small != null ? props.small : userPhoto }
                         alt=''
                    />
                </NavLink>
                <div className={ s.description }>
                    <h1 className={ s.userName }>{ props.name }</h1>
                    <div className={ s.status }>{ props.status }</div>
                    <div className={ s.location }>
                        <span>props.location.city</span>
                        <span>props.location.country</span>
                    </div>
                </div>
            </div>
            <div>
                {
                    props.followed ?
                        <button disabled={ props.isFollowingProgress.some(id => id === props.id) }
                                className={ s.btn }
                                onClick={ () => {
                                    props.unfollow(props.id)
                                } }
                        >Unfollow</button>
                        : <button disabled={ props.isFollowingProgress.some(id => id === props.id) }
                                  className={ s.btn }
                                  onClick={ () => {
                                      props.follow(props.id)
                                  } }
                        >Follow</button>
                }
            </div>
        </div>
    )
});

export default User;