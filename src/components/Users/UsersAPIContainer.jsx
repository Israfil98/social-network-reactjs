import React from 'react';

import Users from './Users';
import { CircularProgress } from '@material-ui/core';

class UsersAPIContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChangeHandler = (page) => {
        this.props.getUsers(page, this.props.pageSize)
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
                    isFollowingProgress={ this.props.isFollowingProgress }

                    follow={ this.props.follow }
                    unfollow={ this.props.unfollow }
                    onPageChangeHandler={ this.onPageChangeHandler }
                />
            </div>
        );
    }
}

export default UsersAPIContainer;
