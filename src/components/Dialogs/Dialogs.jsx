import React from 'react';

import s from './Dialogs.module.css'

import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';

const Dialogs = (props) => {
    const dialogs = props.dialogsData.map(d => <DialogItem id={ d.id } name={ d.name } key={ d.id } />)
    const messages = props.messagesData.map(m => <Message messageBody={ m.messageBody } key={ m.id } />)
    const newMessageBodyTextValue = props.newMessageBodyText

    const sendMessageClickHandler = () => {
        props.sendMessage()
    }

    const onMessageBodyTextChangeHandler = (event) => {
        const newMessageBodyTextValue = event.currentTarget.value
        props.messageBodyTextChange(newMessageBodyTextValue)
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
                <div className={ s.sendMessageContainer }>
                    <textarea className={ s.textarea }
                              placeholder='Start a new message'
                              value={ newMessageBodyTextValue }
                              onChange={ onMessageBodyTextChangeHandler }/>
                    <button className={ s.sendMessageBtn } onClick={ sendMessageClickHandler }>Send</button>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;