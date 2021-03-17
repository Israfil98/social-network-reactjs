import React from 'react';
import axios from 'axios';

import Users from './Users';
import { CircularProgress } from '@material-ui/core';

class UsersAPIContainer extends React.Component {
    componentDidMount() {
        this.props.setFetching(true)
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${ this.props.currentPage }&count=${ this.props.pageSize }`)
            .then((response) => {
                this.props.setFetching(false)
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    onPageChangeHandler = (page) => {
        this.props.setFetching(true)
        this.props.setCurrentPage(page)
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${ page }&count=${ this.props.pageSize }`)
            .then((response) => {
                this.props.setFetching(false)
                this.props.setUsers(response.data.items)
            })
    }

    render() {
        return (
            <div>
                { this.props.isFetching ? <CircularProgress/> : null }
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
