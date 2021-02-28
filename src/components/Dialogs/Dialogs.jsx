import React from 'react';
import s from "./Dialogs.module.css"
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
               <DialogItem name="UserName1" id="1"/>
               <DialogItem name="UserName2" id="2"/>
               <DialogItem name="UserName3" id="3"/>
               <DialogItem name="UserName4" id="4"/>
            </div>
            <div className={s.messages}>
                <Message messageBody="Hello"/>
                <Message messageBody="React is a nice Library"/>
            </div>
        </div>
    );
};

export default Dialogs;