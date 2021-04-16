import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import { compose } from "redux";

import { getUserProfileTC, getUserStatusTC, updateUserStatusTC } from "../../BLL/redux/profileReducer";
import ProfileAPIContainer from "./ProfileAPIContainer";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";

const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getUserProfile: (userId) => {
            dispatch(getUserProfileTC(userId))
        },
        getUserStatus: (userId) => {
            dispatch(getUserStatusTC(userId))
        },
        updateUserStatus: (status) => {
            dispatch(updateUserStatusTC(status))
        },

    }
}
export const ProfilePropsContainer = compose(
    connect(mapStateToProps, mapDispatchToProps),
    withRouter,
    withAuthRedirect
)(ProfileAPIContainer)
