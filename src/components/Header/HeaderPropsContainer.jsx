import { connect } from 'react-redux'

import { getAuthUserDataTC, logoutTC } from '../../BLL/redux/authReducer'

import HeaderAPIContainer from './HeaderAPIContainer'

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
        logout: () => {
            dispatch(logoutTC())
        },
    }
}

export const HeaderPropsContainer = connect(mapStateToProps, mapDispatchToProps)(HeaderAPIContainer)
