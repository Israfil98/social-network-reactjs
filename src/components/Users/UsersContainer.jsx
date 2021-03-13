import { connect } from "react-redux";

import Users from "./Users";
import { followAC, setUsersAC, unfollowAC } from "../../BLL/redux/usersReducer";

const mapStateToProps = (state) => {
    return {
        usersData: state.usersPage.usersData,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setUsers: (usersData) => {
            dispatch(setUsersAC(usersData))
        },
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId))
        },
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);
