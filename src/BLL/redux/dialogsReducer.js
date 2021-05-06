const SEND_MESSAGE = "SEND_MESSAGE"

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
}

export const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE: {
            const newMessage = {
                id: 4,
                messageBody: action.newMessageBodyTextValue
            }
            const stateCopy = {...state, messagesData: [...state.messagesData, newMessage]}
            return stateCopy
        }
        default: {
            return state
        }
    }
}

export const sendMessageAC = (newMessageBodyTextValue) => {
    const action = {
        type: SEND_MESSAGE,
        newMessageBodyTextValue: newMessageBodyTextValue
    }
    return action
}