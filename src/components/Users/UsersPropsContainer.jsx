import { connect } from 'react-redux';
import { compose } from "redux";

import UsersAPIContainer from './UsersAPIContainer';
import { followTC, getUsersTC, unfollowTC } from '../../BLL/redux/usersReducer';
import {
    getCurrentPage,
    getIsFetching, getIsFollowingProgress,
    getPageSize, getPortionSize,
    getTotalUsersCount,
    getUsersSelector
} from "../../BLL/redux/usersSelectors";

// const mapStateToProps = (state) => {
//     return {
//         currentPage: state.usersPage.currentPage,
//         pageSize: state.usersPage.pageSize,
//         totalUsersCount: state.usersPage.totalUsersCount,
//         usersData: state.usersPage.usersData,
//         isFetching: state.usersPage.isFetching,
//         isFollowingProgress: state.usersPage.isFollowingProgress,
//     }
// }

const mapStateToProps = (state) => {
    return {
        currentPage: getCurrentPage(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        portionSize: getPortionSize(state),
        usersData: getUsersSelector(state),
        isFetching: getIsFetching(state),
        isFollowingProgress: getIsFollowingProgress(state),
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
)(UsersAPIContainer)
