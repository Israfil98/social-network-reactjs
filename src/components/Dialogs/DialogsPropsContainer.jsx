import { connect } from 'react-redux';
import { compose } from "redux";

import Dialogs from './Dialogs';
import { sendMessageAC } from '../../BLL/redux/dialogsReducer';
import { withAuthRedirect } from "../../hoc/withAuthRedirect";

const mapStateToProps = (state) => {
    return {
        dialogsData: state.dialogsPage.dialogsData,
        messagesData: state.dialogsPage.messagesData,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (newMessageBodyTextValue) => {
            dispatch(sendMessageAC(newMessageBodyTextValue))
        },
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);