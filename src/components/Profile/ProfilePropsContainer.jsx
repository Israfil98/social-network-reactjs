import { connect } from 'react-redux';

import { setUserProfileAC } from "../../BLL/redux/profileReducer";

import ProfileAPIContainer from "./ProfileAPIContainer";
import { withRouter } from "react-router-dom";

const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setUserProfile: (profile) => {
            dispatch(setUserProfileAC(profile))
        },

    }
}

const WithURLProfileContainer = withRouter(ProfileAPIContainer)

export const ProfilePropsContainer = connect(mapStateToProps, mapDispatchToProps)(WithURLProfileContainer);
