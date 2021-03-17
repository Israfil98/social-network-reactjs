import { connect } from 'react-redux';

import UsersAPIContainer from './UsersAPIContainer';
import { followAC, setCurrentPageAC, setTotalUsersCountAC, setUsersAC, unfollowAC } from '../../BLL/redux/usersReducer';

const mapStateToProps = (state) => {
    return {
        currentPage: state.usersPage.currentPage,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        usersData: state.usersPage.usersData,

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

    }
}

export const UsersPropsContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIContainer);
