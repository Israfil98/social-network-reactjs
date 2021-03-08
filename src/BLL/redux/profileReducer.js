const ADD_POST = "ADD_POST"
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT"

export const profileReducer = (state, action) => {
    switch (action.type) {
        case ADD_POST: {
            const newPost = {
                id: 4,
                postText: state.newPostText,
                likesCount: 0
            }
            state.postsData.push(newPost)
            state.newPostText = ""
            return state
        }
        case UPDATE_NEW_POST_TEXT: {
            state.newPostText = action.newPostText
            return state
        }
        default: {
            return state
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