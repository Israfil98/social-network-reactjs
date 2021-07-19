import { authAPI, securityAPI } from '../../DAL/axios/api'
import { stopSubmit } from 'redux-form'

const SET_USER_DATA = 'auth/SET_USER_DATA'
const GET_CAPTCHA_URL = 'auth/GET_CAPTCHA_URL'

const initialState = {
    userId: null,
    login: null,
    email: null,
    isAuth: false,
    captchaURL: null
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
        case GET_CAPTCHA_URL: {
            const copyState = {
                ...state,
                ...action.payload,
            }
            return copyState
        }
        default: {
            return state
        }
    }
}

export const setUserDataAC = (userId, login, email, isAuth) => {
    const action = {
        type: SET_USER_DATA,
        payload: {userId, login, email, isAuth},
    }
    return action
}

export const getCaptchaAC = (captchaURL) => {
    return {
        type: GET_CAPTCHA_URL,
        payload: {captchaURL}
    }
}

export const getAuthUserDataTC = () => {
    return async (dispatch) => {
        const response = await authAPI.getMe()
        if (response.data.resultCode === 0) {
            const {email, id, login} = response.data.data
            dispatch(setUserDataAC(id, login, email, true))
        }
    }
}

export const loginTC = (email, password, rememberMe, captcha) => {
    return async (dispatch) => {
        const response = await authAPI.login(email, password, rememberMe, captcha)
        if (response.data.resultCode === 0) {
            dispatch(getAuthUserDataTC())
        } else {
            if (response.data.resultCode === 10) {
                dispatch(getCaptchaURLTC())
            }
            const message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error'
            dispatch(stopSubmit('login', {_error: message}))
        }
    }
}

export const logoutTC = () => {
    return async (dispatch) => {
        const response = await authAPI.logout()
        if (response.data.resultCode === 0) {
            dispatch(setUserDataAC(null, null, null, false))
        }
    }
}

export const getCaptchaURLTC = () => {
    return async (dispatch) => {
        const response = await securityAPI.getCaptchaUrl()
        const url = response.data.url
        dispatch(getCaptchaAC(url))
    }
}
