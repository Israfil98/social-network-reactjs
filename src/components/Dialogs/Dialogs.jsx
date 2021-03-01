import React from 'react';
import s from "./Dialogs.module.css"
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";

const Dialogs = () => {
    const dialogsData = [
        {id: 1, name: "UserName1"},
        {id: 2, name: "UserName2"},
        {id: 3, name: "UserName3"}
    ]
    const messagesData = [
        {id: 1, messageBody: "Hello"},
        {id: 2, messageBody: "React is a nice Library"},
        {id: 3, messageBody: "Method map is improves performance"}
    ]

    const dialogs = dialogsData.map(d => <DialogItem id={d.id} name={d.name}/>)
    const messages = messagesData.map(m => <Message messageBody={m.messageBody}/>)

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