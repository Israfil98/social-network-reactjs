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
