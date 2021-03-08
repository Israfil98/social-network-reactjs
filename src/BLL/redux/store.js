import { profileReducer } from "./profileReducer";
import { dialogsReducer } from "./dialogsReducer";

const store = {
    _state: {
        profilePage: {
            postsData: [
                {id: 1, postText: "Hi, im React Developer", likesCount: 1},
                {id: 2, postText: "Im learning React a few month", likesCount: 2},
                {id: 3, postText: "Method map!!!", likesCount: 5}
            ],
            newPostText: ""
        },
        dialogsPage: {
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
    },
    _callSubscriber() {

    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._callSubscriber(this._state)
    }
}

export default store;