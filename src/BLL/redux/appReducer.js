import { getAuthUserDataTC } from "./authReducer";

const SET_INITIALIZED = 'SET_INITIALIZED'

const initialState = {
    initialized: false,
}

export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INITIALIZED: {
            return {
                ...state,
                initialized: true
            }
        }
        default: {
            return state
        }
    }
}

export const setInitialized = () => {
    const action = {
        type: SET_INITIALIZED
    }
    return action
}

export const initializeTC = () => {
    return (dispatch) => {
        const promise = dispatch(getAuthUserDataTC())
        Promise
            .all([promise])
            .then(() => {
                dispatch(setInitialized())
            })
    }
}
