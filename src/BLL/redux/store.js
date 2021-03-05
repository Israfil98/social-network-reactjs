const ADD_POST = "ADD_POST"
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT"

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
            ]
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
        if (action.type === ADD_POST) {
            const newPost = {
                id: 4,
                postText: this._state.profilePage.newPostText,
                likesCount: 0
            }
            this._state.profilePage.postsData.push(newPost)
            this._state.profilePage.newPostText = ""
            this._callSubscriber(this._state)
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newPostText
            this._callSubscriber(this._state)
        }
    }
}

export const addPostAC = () => {
    const action = {
        type: ADD_POST
    }
    return action
}
export const updateNewPostTextAC = (newPostText) => {
    const action = {
        type: UPDATE_NEW_POST_TEXT,
        newPostText: newPostText
    }
    return action
}

export default store;