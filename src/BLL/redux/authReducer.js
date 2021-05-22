import { authAPI } from '../../DAL/axios/api'
import { stopSubmit } from 'redux-form'

const SET_USER_DATA = 'SET_USER_DATA'

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

export const getAuthUserDataTC = () => {
    return (dispatch) => {
        return authAPI.getMe().then((response) => {
            if (response.data.resultCode === 0) {
                const {email, id, login} = response.data.data
                dispatch(setUserDataAC(id, login, email, true))
            }
        })
    }
}

export const loginTC = (email, password, rememberMe) => {
    return (dispatch) => {
        authAPI.login(email, password, rememberMe).then((response) => {
            if (response.data.resultCode === 0) {
                dispatch(getAuthUserDataTC())
            } else {
                const message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error'
                dispatch(stopSubmit('login', {_error: message}))
            }
        })
    }
}

export const logoutTC = () => {
    return (dispatch) => {
        authAPI.logout().then((response) => {
            if (response.data.resultCode === 0) {
                dispatch(setUserDataAC(null, null, null, false))
            }
        })
    }
}
