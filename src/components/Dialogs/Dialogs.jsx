import React from 'react';
import s from "./Dialogs.module.css"
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import { sendMessageAC, updateNewMessageBodyTextAC } from "../../BLL/redux/store";

const Dialogs = (props) => {
    const dialogs = props.dialogsPage.dialogsData.map(d => <DialogItem id={ d.id } name={ d.name }/>)
    const messages = props.dialogsPage.messagesData.map(m => <Message messageBody={ m.messageBody }/>)
    const newMessageBodyTextValue = props.dialogsPage.newMessageBodyText

    const sendMessageClickHandler = () => {
        props.dispatch(sendMessageAC())
    }

    const onMessageBodyTextChangeHandler = (event) => {
        const newMessageBodyTextValue = event.currentTarget.value
        props.dispatch(updateNewMessageBodyTextAC(newMessageBodyTextValue))
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
                              placeholder="Enter you're message"
                              value={ newMessageBodyTextValue }
                              onChange={ onMessageBodyTextChangeHandler }/>
                    <button className={ s.sendMessageBtn } onClick={ sendMessageClickHandler }>Send</button>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;