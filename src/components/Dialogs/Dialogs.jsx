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
        {id: 1, messageBody: "React is a nice Library"}
    ]

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
               <DialogItem id={dialogsData[0].id} name={dialogsData[0].name}/>
               <DialogItem id={dialogsData[1].id} name={dialogsData[1].name}/>
               <DialogItem id={dialogsData[2].id} name={dialogsData[2].name}/>
            </div>
            <div className={s.messages}>
                <Message messageBody={messagesData[0].messageBody}/>
                <Message messageBody={messagesData[1].messageBody}/>
            </div>
        </div>
    );
};

export default Dialogs;