import React from 'react';
import style from "../Login.module.css";
import { Field, reduxForm } from "redux-form";

const LoginForm = (props) => {
    return (
        <form onSubmit={ props.handleSubmit } className={ style.fromContainer }>
            <div><Field component='input' name='login' className={ style.input } placeholder='Enter login'/></div>
            <div><Field component='input' name='password' className={ style.input } placeholder='Enter password'/></div>
            <div><Field component='input' name='rememberMe' type='checkbox'/> Remember me</div>
            <button className={ style.btn }>Login</button>
        </form>
    );
};

export const LoginReduxForm = reduxForm({
    // a unique name for the form
    form: 'login'
})(LoginForm)

export default LoginForm;