const SEND_MESSAGE = "SEND_MESSAGE"
const UPDATE_NEW_MESSAGE_BODY_TEXT = "UPDATE_NEW_MESSAGE_BODY_TEXT"

const initialState = {
    dialogsData: [
        {id: 1, name: "UserName1"},
        {id: 2, name: "UserName2"},
        {id: 3, name: "UserName3"}
    ],
    messagesData: [
        {id: 1, messageBody: "Hello"},
        {id: 2, messageBody: "React is a nice Library"},
        {id: 3, messageBody: "Method map is improves performance"}
    ],
    newMessageBodyText: ""
}

export const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE: {
            const newMessage = {
                id: 4,
                messageBody: state.newMessageBodyText
            }
            const stateCopy = {...state, messagesData: [...state.messagesData]}
            stateCopy.messagesData.push(newMessage)
            stateCopy.newMessageBodyText = ""
            return stateCopy
        }
        case UPDATE_NEW_MESSAGE_BODY_TEXT: {
            const stateCopy = {...state}
            stateCopy.newMessageBodyText = action.newMessageBodyText
            return stateCopy
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