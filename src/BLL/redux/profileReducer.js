const ADD_POST = "ADD_POST"
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT"

const initialState = {
    postsData: [
        {id: 1, postText: "Hi, im React Developer", likesCount: 1},
        {id: 2, postText: "Im learning React a few month", likesCount: 2},
        {id: 3, postText: "Method map!!!", likesCount: 5}
    ],
    newPostText: ""
}

export const profileReducer = (state = initialState, action) => {
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