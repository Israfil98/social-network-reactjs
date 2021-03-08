const SEND_MESSAGE = "SEND_MESSAGE"
const UPDATE_NEW_MESSAGE_BODY_TEXT = "UPDATE_NEW_MESSAGE_BODY_TEXT"

export const dialogsReducer = (state, action) => {
    switch (action.type) {
        case SEND_MESSAGE: {
            const newMessage = {
                id: 4,
                messageBody: state.newMessageBodyText
            }
            state.messagesData.push(newMessage)
            state.newMessageBodyText = ""
            return state
        }
        case UPDATE_NEW_MESSAGE_BODY_TEXT: {
            state.newMessageBodyText = action.newMessageBodyText
            return state
        }
        default: {
            return state
        }
    }
}

export const sendMessageAC = () => {
    const action = {
        type: SEND_MESSAGE
    }
    return action
}
export const updateNewMessageBodyTextAC = (newMessageBodyText) => {
    const action = {
        type: UPDATE_NEW_MESSAGE_BODY_TEXT,
        newMessageBodyText: newMessageBodyText
    }
    return action
}