import { connect } from 'react-redux';

import Dialogs from './Dialogs';
import { sendMessageAC, updateNewMessageBodyTextAC } from '../../BLL/redux/dialogsReducer';

const mapStateToProps = (state) => {
    return {
        dialogsData: state.dialogsPage.dialogsData,
        messagesData: state.dialogsPage.messagesData,
        newMessageBodyText: state.dialogsPage.newMessageBodyText,
        isAuth: state.auth.isAuth,

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: () => {
            dispatch(sendMessageAC())
        },
        messageBodyTextChange: (newMessageBodyTextValue) => {
            dispatch(updateNewMessageBodyTextAC(newMessageBodyTextValue))
        }
    }
}

const DialogsPropsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsPropsContainer;