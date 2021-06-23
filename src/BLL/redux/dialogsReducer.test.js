import { dialogsReducer, sendMessageAC } from "./dialogsReducer";

const state = {
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

test('new message should be sending', () => {
    const action = sendMessageAC('this is new message')

    const newState = dialogsReducer(state, action)

    expect(state.messagesData.length).toBe(3)
    expect(newState.messagesData.length).toBe(4)
    expect(newState.messagesData[3].messageBody).toBe('this is new message')
})
