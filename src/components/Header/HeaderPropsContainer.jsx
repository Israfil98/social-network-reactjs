import { connect } from 'react-redux';

import { getAuthUserDataTC } from '../../BLL/redux/authReducer';

import HeaderAPIContainer from './HeaderAPIContainer';

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getAuthUserData: () => {
            dispatch(getAuthUserDataTC())
        },

    }
}

export const HeaderPropsContainer = connect(mapStateToProps, mapDispatchToProps)(HeaderAPIContainer);
