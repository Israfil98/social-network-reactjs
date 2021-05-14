import React from 'react';
import s from "../Dialogs.module.css";
import { Field, reduxForm } from "redux-form";
import { Textarea } from "../../common/FormsControls/FormsControls";
import { maxLengthCreator, required } from "../../../utils/validators/validators";

const maxLength300 = maxLengthCreator(300)

const SendMessageForm = (props) => {
    return (
        <form onSubmit={ props.handleSubmit } className={ s.sendMessageContainer }>
            <Field
                className={ s.textarea }
                component={ Textarea }
                validate={ [required, maxLength300] }
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