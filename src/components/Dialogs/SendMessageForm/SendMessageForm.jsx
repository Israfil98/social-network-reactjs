import React from 'react';
import s from "../Dialogs.module.css";
import { Field, reduxForm } from "redux-form";

const SendMessageForm = (props) => {
    return (
        <form onSubmit={ props.handleSubmit } className={ s.sendMessageContainer }>
            <Field
                className={ s.textarea }
                component='textarea'
                name='newMessageBodyTextValue'
                placeholder='Start a new message'
            />
            <button className={ s.sendMessageBtn }>Send</button>
        </form>
    );
};

export const SendMessageReduxForm = reduxForm({
    // a unique name for the form
    form: 'sendMessage'
})(SendMessageForm)

export default SendMessageForm;