import React from 'react'
import style from '../Login.module.css'
import { Field, reduxForm } from 'redux-form'
import { Input } from '../../common/FormsControls/FormsControls'
import { required } from '../../../utils/validators/validators'

const LoginForm = (props) => {
    return (
        <form onSubmit={ props.handleSubmit } className={ style.formContainer }>
            <div>
                <Field component={ Input } validate={ [required] } name="email" className={ style.input }
                       placeholder="Enter email"/>
            </div>
            <div>
                <Field
                    component={ Input }
                    validate={ [required] }
                    name="password"
                    type="password"
                    className={ style.input }
                    placeholder="Enter password"
                />
            </div>
            <div>
                <Field component={ Input } name="rememberMe" type="checkbox"/>
                Remember me
            </div>
            { props.error && <div className={ style.commonError }>{ props.error }</div> }
            <button className={ style.btn }>Login</button>
        </form>
    )
}

export const LoginReduxForm = reduxForm({
    // a unique name for the form
    form: 'login',
})(LoginForm)

export default LoginForm
