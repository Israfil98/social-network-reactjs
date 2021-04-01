import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";

import { getUserProfileTC } from "../../BLL/redux/profileReducer";

import ProfileAPIContainer from "./ProfileAPIContainer";

const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        isAuth: state.auth.isAuth,

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getUserProfile: (userId) => {
            dispatch(getUserProfileTC(userId))
        },

    }
}

const WithURLProfileContainer = withRouter(ProfileAPIContainer)

export const ProfilePropsContainer = connect(mapStateToProps, mapDispatchToProps)(WithURLProfileContainer);
