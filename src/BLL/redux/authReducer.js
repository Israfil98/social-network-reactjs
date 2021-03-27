import { authAPI, profileAPI } from "../../DAL/axios/api";
import { setUserProfileAC } from "./profileReducer";

const SET_USER_DATA = "SET_USER_DATA"

const initialState = {
    userId: null,
    login: null,
    email: null,
    isAuth: false,
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA: {
            const copyState = {
                ...state,
                ...action.data,
                isAuth: true
            }
            return copyState
        }
        default: {
            return state
        }
    }
}

export const setUserDataAC = (userId, login, email) => {
    const action = {
        type: SET_USER_DATA,
        data: {userId, login, email}
    }
    return action
}

export const getAuthUserDataTC = () => {
    return (dispatch) => {
        authAPI.getMe()
            .then((response) => {
                if (response.data.resultCode === 0) {
                    const {email, id, login} = response.data.data
                    dispatch(setUserDataAC(id, login, email))
                }
            })
    }
}


