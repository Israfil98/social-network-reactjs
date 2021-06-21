import React from 'react';

import s from './Dialogs.module.css'

import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';
import { SendMessageReduxForm } from "./SendMessageForm/SendMessageForm";

const Dialogs = React.memo((props) => {
    const dialogs = props.dialogsData.map(d => <DialogItem id={ d.id } name={ d.name } key={ d.id }/>)
    const messages = props.messagesData.map(m => <Message messageBody={ m.messageBody } key={ m.id }/>)

    const sendMessage = (formData) => {
        props.sendMessage(formData.newMessageBodyTextValue)
    }

    return (
        <div className={ s.dialogs }>
            <div className={ s.dialogsItems }>
                { dialogs }
            </div>
            <div className={ s.messagesContainer }>
                <div className={ s.messages }>
                    { messages }
                </div>
                <SendMessageReduxForm onSubmit={ sendMessage }/>
            </div>
        </div>
    );
});

export default Dialogs;