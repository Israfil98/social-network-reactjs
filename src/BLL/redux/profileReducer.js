import { profileAPI } from "../../DAL/axios/api";

const ADD_POST = "ADD_POST"
const SET_USER_PROFILE = "SET_USER_PROFILE"
const SET_STATUS = "SET_STATUS"
const DELETE_POST = "DELETE_POST"
const SET_LIKE = "SET_LIKE"

const initialState = {
    postsData: [
        {id: 1, postText: "Hi, im React Developer", likesCount: 1},
        {id: 2, postText: "Im learning React a few month", likesCount: 2},
        {id: 3, postText: "Method map!!!", likesCount: 5}
    ],
    profile: null,
    status: '',

}

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            const newPost = {
                id: 4,
                postText: action.newPostTextValue,
                likesCount: 0
            }
            const stateCopy = {...state, postsData: [...state.postsData]}
            stateCopy.postsData = [newPost, ...stateCopy.postsData]
            return stateCopy
        }
        case DELETE_POST: {
            return {
                ...state, postsData: state.postsData.filter(p => p.id !== action.postId)
            }
        }
        case SET_USER_PROFILE: {
            const stateCopy = {...state, profile: action.profile}
            return stateCopy
        }
        case SET_STATUS: {
            const stateCopy = {...state, status: action.status}
            return stateCopy
        }
        case SET_LIKE: {
            return {
                ...state,
                postsData: state.postsData
                    .map((data) => data.id === action.postId
                        ? {...data, likesCount: action.newLike + 1}
                        : data)
            }
            // const newPost = {
            //     id: 4,
            //     postText: action.newPostTextValue,
            //     likesCount: action.newLike
            // }
                //return {...state, postsData[action.postId]: { ...state.postsData[action.postId],  } }

        }
        default: {
            return state
        }
    }
}

export const addPostAC = (newPostTextValue) => {
    const action = {
        type: ADD_POST,
        newPostTextValue: newPostTextValue
    }
    return action
}

export const deletePostAC = (postId) => {
    const action = {
        type: DELETE_POST,
        postId: postId
    }
    return action
}

export const setLikeAC = (newLike, postId) => {
    const action = {
        type: SET_LIKE,
        newLike,
        postId
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

export const setUserStatusAC = (status) => {
    const action = {
        type: SET_STATUS,
        status: status
    }
    return action
}

export const getUserProfileTC = (userId) => {
    return (dispatch) => {
        profileAPI.getProfile(userId)
            .then((response) => {
                dispatch(setUserProfileAC(response.data))
            })
    }
}

export const getUserStatusTC = (userId) => {
    return (dispatch) => {
        profileAPI.getStatus(userId)
            .then((response) => {
                dispatch(setUserStatusAC(response.data))
            })
    }
}

export const updateUserStatusTC = (status) => {
    return (dispatch) => {
        profileAPI.updateStatus(status)
            .then((response) => {
                if (response.data.resultCode === 0) {
                    dispatch(setUserStatusAC(status))
                }
            })
    }
}
