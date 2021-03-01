import React from 'react';
import s from "./Dialogs.module.css"
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";

const Dialogs = (props) => {
    const dialogs = props.dialogsPage.dialogsData.map(d => <DialogItem id={d.id} name={d.name}/>)
    const messages = props.dialogsPage.messagesData.map(m => <Message messageBody={m.messageBody}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogs}
            </div>
            <div className={s.messages}>
                {messages}
            </div>
        </div>
    );
};

export default Dialogs;