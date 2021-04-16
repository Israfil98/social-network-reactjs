import { connect } from 'react-redux';
import { compose } from "redux";

import UsersAPIContainer from './UsersAPIContainer';
import { followTC, getUsersTC, unfollowTC } from '../../BLL/redux/usersReducer';
import { withAuthRedirect } from "../../hoc/withAuthRedirect";

const mapStateToProps = (state) => {
    return {
        currentPage: state.usersPage.currentPage,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        usersData: state.usersPage.usersData,
        isFetching: state.usersPage.isFetching,
        isFollowingProgress: state.usersPage.isFollowingProgress,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followTC(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowTC(userId))
        },
        getUsers: (currentPage, pageSize) => {
            dispatch(getUsersTC(currentPage, pageSize))
        },

    }
}

export const UsersPropsContainer = compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(UsersAPIContainer)
