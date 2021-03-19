import React from 'react';
import { NavLink } from "react-router-dom";

import s from "./Users.module.css";

import userPhoto from "../../assets/img/user.png";

const Users = (props) => {
    const users = props.usersData.map((user) => {
        return (
            <div className={ s.users }>
                <div key={ user.id } className={ s.userItem }>
                    <div className={ s.userAbout }>
                        <NavLink to={"/profile/" + user.id}>
                            <img className={ s.userPhoto }
                                 src={ user.photos.small != null ? user.photos.small : userPhoto }
                                 alt=''
                            />
                        </NavLink>
                        <div className={ s.description }>
                            <h1 className={ s.userName }>{ user.name }</h1>
                            <div className={ s.status }>{ user.status }</div>
                            <div className={ s.location }>
                                <span>user.location.city</span>
                                <span>user.location.country</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        {
                            user.isFollowed ?
                                <button className={ s.btn } onClick={ () => {
                                    props.unfollow(user.id)
                                } }>Unfollow</button>
                                : <button className={ s.btn } onClick={ () => {
                                    props.follow(user.id)
                                } }>Follow</button>
                        }
                    </div>
                </div>
            </div>
        )
    })

    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    const pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div className={ s.container }>
            <div className={ s.pagination }>
                { pages.map((page) => {
                    return (
                        <span
                            className={ props.currentPage === page ? s.selectedPage : "" }
                            onClick={ () => props.onPageChangeHandler(page) }
                        >
                            { page }
                        </span>
                    )
                }) }
            </div>
            <div>{ users }</div>
        </div>
    );
};

export default Users;