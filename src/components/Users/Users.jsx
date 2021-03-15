import React from 'react';
import axios from "axios";

import s from "./Users.module.css";

import userPhoto from "../../assets/img/user.png";

class Users extends React.Component {
    componentDidMount() {
        axios
            .get("https://social-network.samuraijs.com/api/1.0/users")
            .then((response) => {
                this.props.setUsers(response.data.items)
            })
    }

    render() {
        const users = this.props.usersData.map((user) => {
            return (
                <div className={ s.users }>
                    <div key={ user.id } className={ s.userItem }>
                        <div className={ s.userAbout }>
                            <img className={ s.userPhoto }
                                 src={ user.photos.small != null ? user.photos.small : userPhoto }
                                 alt=""
                            />
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
                                        this.props.unfollow(user.id)
                                    } }>Unfollow</button>
                                    : <button className={ s.btn } onClick={ () => {
                                        this.props.follow(user.id)
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
    }

}

export default Users;