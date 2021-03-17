import { connect } from 'react-redux';

import UsersAPIContainer from './UsersAPIContainer';
import {
    followAC,
    setCurrentPageAC,
    setFetchingAC,
    setTotalUsersCountAC,
    setUsersAC,
    unfollowAC
} from '../../BLL/redux/usersReducer';

const mapStateToProps = (state) => {
    return {
        currentPage: state.usersPage.currentPage,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        usersData: state.usersPage.usersData,
        isFetching: state.usersPage.isFetching,

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId))
        },
        setCurrentPage: (currentPage) => {
            dispatch(setCurrentPageAC(currentPage))
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setTotalUsersCountAC(totalCount))
        },
        setUsers: (usersData) => {
            dispatch(setUsersAC(usersData))
        },
        setFetching: (isFetching) => {
            dispatch(setFetchingAC(isFetching))
        },

    }
}

export const UsersPropsContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIContainer);
