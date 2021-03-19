import { connect } from 'react-redux';

import HeaderAPIContainer from "./HeaderAPIContainer";
import { setUserDataAC } from "../../BLL/redux/authReducer";

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setUserData: (userId, login, email) => {
            dispatch(setUserDataAC(userId, login, email))
        },

    }
}

export const HeaderPropsContainer = connect(mapStateToProps, mapDispatchToProps)(HeaderAPIContainer);
