import React from 'react'
import { connect } from 'react-redux'

import style from './Login.module.css'
import { LoginReduxForm } from './LoginForm/LoginForm'
import { loginTC, logoutTC } from '../../BLL/redux/authReducer'
import { Redirect } from 'react-router'

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    if (props.isAuth) {
        return <Redirect to="/profile" />
    }

    return (
        <div className={style.container}>
            <h1 className={style.title}>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        login: (email, password, rememberMe) => {
            dispatch(loginTC(email, password, rememberMe))
        },
        logout: () => {
            dispatch(logoutTC())
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
