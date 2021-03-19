const ADD_POST = "ADD_POST"
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT"
const SET_USER_PROFILE = "SET_USER_PROFILE"

const initialState = {
    postsData: [
        {id: 1, postText: "Hi, im React Developer", likesCount: 1},
        {id: 2, postText: "Im learning React a few month", likesCount: 2},
        {id: 3, postText: "Method map!!!", likesCount: 5}
    ],
    newPostText: "",
    profile: null,

}

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            const newPost = {
                id: 4,
                postText: state.newPostText,
                likesCount: 0
            }
            const stateCopy = {...state, postsData: [...state.postsData]}
            stateCopy.postsData = [newPost, ...stateCopy.postsData]
            stateCopy.newPostText = ""
            return stateCopy
        }
        case UPDATE_NEW_POST_TEXT: {
            const stateCopy = {...state}
            stateCopy.newPostText = action.newPostText
            return stateCopy
        }
        case SET_USER_PROFILE: {
            const stateCopy = {...state, profile: action.profile}
            return stateCopy
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
export const setUserProfileAC = (profile) => {
    const action = {
        type: SET_USER_PROFILE,
        profile: profile
    }
    return action
}