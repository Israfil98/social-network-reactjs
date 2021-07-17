import { profileAPI } from "../../DAL/axios/api";

const ADD_POST = "profile/ADD_POST"
const SET_USER_PROFILE = "profile/SET_USER_PROFILE"
const SET_STATUS = "profile/SET_STATUS"
const DELETE_POST = "profile/DELETE_POST"
const SET_LIKE = "profile/SET_LIKE"
const SET_FILE = "profile/SET_FILE"

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
        }
        case SET_FILE: {
            return {
                ...state,
                profile: {...state.profile, photos: action.photos}
            }
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

export const saveFileAC = (photos) => {
    const action = {
        type: SET_FILE,
        photos
    }
    return action
}

//thunks
export const getUserProfileTC = (userId) => {
    return async (dispatch) => {
        const response = await profileAPI.getProfile(userId)
        dispatch(setUserProfileAC(response.data))
    }
}

export const getUserStatusTC = (userId) => {
    return async (dispatch) => {
        const response = await profileAPI.getStatus(userId)
        dispatch(setUserStatusAC(response.data))
    }
}

export const updateUserStatusTC = (status) => {
    return async (dispatch) => {
        const response = await profileAPI.updateStatus(status)
        if (response.data.resultCode === 0) {
            dispatch(setUserStatusAC(status))
        }
    }
}

export const saveFileTC = (file) => {
    return async (dispatch) => {
        const response = await profileAPI.saveFile(file)
        if (response.data.resultCode === 0) {
            dispatch(saveFileAC(response.data.data.photos))
        }
    }
}

export const saveProfileTC = (profile) => {
    return async (dispatch, getState) => {
        const userId = getState().auth.userId
        const response = await profileAPI.saveProfile(profile)
        if (response.data.resultCode === 0) {
            dispatch(getUserProfileTC(userId))
        }
    }
}
