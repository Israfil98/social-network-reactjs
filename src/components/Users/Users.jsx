import React from 'react';

import s from "./Users.module.css";

import Paginator from "../common/Paginator/Paginator";
import User from "./User/User";

const Users = React.memo((props) => {
    const users = props.usersData.map((user) => {
        return (
            <div className={ s.users }>
                <User
                    key={user.id}
                    id={user.id}
                    small={user.photos.small}
                    name={user.name}
                    status={ user.status}
                    followed={user.followed}
                    isFollowingProgress={props.isFollowingProgress}
                    unfollow={props.unfollow}
                    follow={props.follow}
                />
            </div>
        )
    })

    return (
        <div className={ s.container }>
            <Paginator
                totalItemsCount={ props.totalUsersCount }
                pageSize={ props.pageSize }
                currentPage={ props.currentPage }
                onPageChangeHandler={ props.onPageChangeHandler }
                portionSize={ props.portionSize }
            />
            <div>{ users }</div>
            <Paginator
                totalItemsCount={ props.totalUsersCount }
                pageSize={ props.pageSize }
                currentPage={ props.currentPage }
                onPageChangeHandler={ props.onPageChangeHandler }
                portionSize={ props.portionSize }
            />
        </div>
    );
});

export default Users;