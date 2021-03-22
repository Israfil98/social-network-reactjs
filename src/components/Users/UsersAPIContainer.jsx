import React from 'react';

import Users from './Users';
import { CircularProgress } from '@material-ui/core';
import { usersAPI } from "../../DAL/axios/api";

class UsersAPIContainer extends React.Component {
    componentDidMount() {
        this.props.setFetching(true)
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
            .then((data) => {
                this.props.setFetching(false)
                this.props.setUsers(data.items)
                this.props.setTotalUsersCount(data.totalCount)
            })
    }

    onPageChangeHandler = (page) => {
        this.props.setFetching(true)
        this.props.setCurrentPage(page)
        usersAPI.getUsers(page, this.props.pageSize)
            .then((data) => {
                this.props.setFetching(false)
                this.props.setUsers(data.items)
            })
    }

    render() {
        return (
            <div>
                { this.props.isFetching ? <CircularProgress/> : null }
                <Users
                    currentPage={ this.props.currentPage }
                    pageSize={ this.props.pageSize }
                    totalUsersCount={ this.props.totalUsersCount }
                    usersData={ this.props.usersData }

                    follow={ this.props.follow }
                    unfollow={ this.props.unfollow }
                    onPageChangeHandler={ this.onPageChangeHandler }
                />
            </div>
        );
    }

}

export default UsersAPIContainer;
