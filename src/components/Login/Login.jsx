import React from 'react';

import style from './Login.module.css'
import { LoginReduxForm } from "./LoginForm/LoginForm";

const Login = () => {
    const onSubmit = (formData) => {
        console.log(formData)
    }

    return (
        <div className={ style.container }>
            <h1 className={ style.title }>Login</h1>
            <LoginReduxForm onSubmit={ onSubmit }/>
        </div>
    );
};

export default Login;