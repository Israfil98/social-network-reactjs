const SET_USERS = "SET_USERS"
const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"

const initialState = {
    usersData: [],
}

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS: {
            const stateCopy = {...state, usersData: [...state.usersData, ...action.usersData]}
            return stateCopy
        }
        case FOLLOW: {
            const copyState = {
                ...state,
                usersData: state.usersData.map((user) => {
                    if (user.id === action.userId) {
                        const userCopy = {...user, isFollowed: true}
                        return userCopy
                    }
                    return user
                })
            }
            return copyState
        }
        case UNFOLLOW: {
            const copyState = {
                ...state,
                usersData: state.usersData.map((user) => {
                    if (user.id === action.userId) {
                        const userCopy = {...user, isFollowed: false}
                        return userCopy
                    }
                    return user
                })
            }
            return copyState
        }
        default: {
            return state
        }
    }
}

export const setUsersAC = (usersData) => {
    const action = {
        type: SET_USERS,
        usersData: usersData,
    }
    return action
}

export const followAC = (userId) => {
    const action = {
        type: FOLLOW,
        userId: userId,
    }
    return action
}

export const unfollowAC = (userId) => {
    const action = {
        type: UNFOLLOW,
        userId: userId,
    }
    return action
}
