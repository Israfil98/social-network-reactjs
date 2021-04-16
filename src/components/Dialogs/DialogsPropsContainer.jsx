import { connect } from 'react-redux';
import { compose } from "redux";

import Dialogs from './Dialogs';
import { sendMessageAC, updateNewMessageBodyTextAC } from '../../BLL/redux/dialogsReducer';
import { withAuthRedirect } from "../../hoc/withAuthRedirect";

const mapStateToProps = (state) => {
    return {
        dialogsData: state.dialogsPage.dialogsData,
        messagesData: state.dialogsPage.messagesData,
        newMessageBodyText: state.dialogsPage.newMessageBodyText,
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

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);