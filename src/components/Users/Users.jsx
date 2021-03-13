import React from 'react';

import s from "./Users.module.css"
import userPhoto from "../../assets/img/user.png";

const Users = (props) => {
    if (props.usersData.length === 0) {
        props.setUsers([
            {
                id: 1,
                isFollowed: false,
                location: {
                    city: "Dubai",
                    country: "OAE"
                },
                status: "Hello, i am looking for a job",
                userPhoto: userPhoto,
                userName: "UserName1",
            },
            {
                id: 2,
                isFollowed: true,
                location: {
                    city: "Washington",
                    country: "USA"
                },
                status: "Hello, i am looking for a job",
                userPhoto: userPhoto,
                userName: "UserName2",
            },
            {
                id: 3,
                isFollowed: false,
                location: {
                    city: "Moscow",
                    country: "Russia"
                },
                status: "Hello, i am looking for a job",
                userPhoto: userPhoto,
                userName: "UserName3",
            },
        ])
    }
    const users = props.usersData.map((user) => {
        return (
            <div className={ s.users }>
                <div key={ user.id } className={ s.userItem }>
                    <div className={ s.userAbout }>
                        <img className={ s.userPhoto } src={ user.userPhoto } alt=""/>
                        <div className={ s.description }>
                            <h1 className={ s.userName }>{ user.userName }</h1>
                            <div className={ s.status }>{ user.status }</div>
                            <div className={ s.location }>
                                <span>{ user.location.city }</span>
                                <span>{ user.location.country }</span>
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
    return (
        <div>{ users }</div>
    );
};

export default Users;