import React from 'react';
import axios from 'axios';

import Users from "./Users";

class UsersAPIContainer extends React.Component {
    componentDidMount() {
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${ this.props.currentPage }&count=${ this.props.pageSize }`)
            .then((response) => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    onPageChangeHandler = (page) => {
        this.props.setCurrentPage(page)
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${ page }&count=${ this.props.pageSize }`)
            .then((response) => {
                this.props.setUsers(response.data.items)
            })
    }

    render() {
        return (
            <div>
                <Users
                    currentPage={this.props.currentPage}
                    pageSize={this.props.pageSize}
                    totalUsersCount={this.props.totalUsersCount}
                    usersData={this.props.usersData}

                    follow={this.props.follow}
                    unfollow={this.props.unfollow}
                    onPageChangeHandler={this.onPageChangeHandler}
                />
            </div>
        );
    }

}

export default UsersAPIContainer;
