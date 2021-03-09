import React from 'react';
import Dialogs from "./Dialogs";
import { sendMessageAC, updateNewMessageBodyTextAC } from "../../BLL/redux/dialogsReducer";

const DialogsContainer = (props) => {
    const state = props.store.getState()

    const sendMessage = () => {
        props.store.dispatch(sendMessageAC())
    }

    const messageBodyTextChange = (newMessageBodyTextValue) => {
        props.store.dispatch(updateNewMessageBodyTextAC(newMessageBodyTextValue))
    }

    return (
        <Dialogs dialogsData={ state.dialogsPage.dialogsData }
                 messagesData={ state.dialogsPage.messagesData }
                 newMessageBodyText={ state.dialogsPage.newMessageBodyText }
                 sendMessage={ sendMessage }
                 messageBodyTextChange={ messageBodyTextChange }/>
    );
};

export default DialogsContainer;