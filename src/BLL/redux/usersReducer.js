import { usersAPI } from "../../DAL/axios/api";

const FOLLOW = "users/FOLLOW"
const UNFOLLOW = "users/UNFOLLOW"
const SET_CURRENT_PAGE = "users/SET_CURRENT_PAGE"
const SET_TOTAL_USERS_COUNT = "users/SET_TOTAL_USERS_COUNT"
const SET_USERS = "users/SET_USERS"
const SET_FETCHING = "users/SET_FETCHING"
const SET_FOLLOWING_PROGRESS = "users/SET_FOLLOWING_PROGRESS"

const initialState = {
    currentPage: 1,
    pageSize: 10,
    totalUsersCount: 0,
    portionSize: 10,
    usersData: [],
    isFetching: false,
    isFollowingProgress: [],

}

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW: {
            const copyState = {
                ...state,
                usersData: state.usersData.map((user) => {
                    if (user.id === action.userId) {
                        const userCopy = {...user, followed: true}
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
                        const userCopy = {...user, followed: false}
                        return userCopy
                    }
                    return user
                })
            }
            return copyState
        }
        case SET_USERS: {
            const stateCopy = {...state, usersData: action.usersData}
            return stateCopy
        }
        case SET_CURRENT_PAGE: {
            const stateCopy = {...state, currentPage: action.currentPage}
            return stateCopy
        }
        case SET_TOTAL_USERS_COUNT: {
            const stateCopy = {...state, totalUsersCount: action.totalCount}
            return stateCopy
        }
        case SET_FETCHING: {
            const stateCopy = {...state, isFetching: action.isFetching}
            return stateCopy
        }
        case SET_FOLLOWING_PROGRESS: {
            const stateCopy = {
                ...state,
                isFollowingProgress: action.isFollowing
                    ? [...state.isFollowingProgress, action.userId]
                    : state.isFollowingProgress.filter(id => id !== action.userId)
            }
            return stateCopy
        }
        default: {
            return state
        }
    }
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
export const setCurrentPageAC = (currentPage) => {
    const action = {
        type: SET_CURRENT_PAGE,
        currentPage: currentPage,
    }
    return action
}
export const setTotalUsersCountAC = (totalCount) => {
    const action = {
        type: SET_TOTAL_USERS_COUNT,
        totalCount: totalCount,
    }
    return action
}
export const setUsersAC = (usersData) => {
    const action = {
        type: SET_USERS,
        usersData: usersData,
    }
    return action
}
export const setFetchingAC = (isFetching) => {
    const action = {
        type: SET_FETCHING,
        isFetching: isFetching,
    }
    return action
}
export const setFollowingProgressAC = (isFollowing, userId) => {
    const action = {
        type: SET_FOLLOWING_PROGRESS,
        isFollowing: isFollowing,
        userId: userId,
    }
    return action
}

export const getUsersTC = (currentPage, pageSize) => {
    return async (dispatch) => {
        dispatch(setFetchingAC(true))
        dispatch(setCurrentPageAC(currentPage))
        const response = await usersAPI.getUsers(currentPage, pageSize)
        dispatch(setFetchingAC(false))
        dispatch(setUsersAC(response.items))
        dispatch(setTotalUsersCountAC(response.totalCount))
    }
}

export const followTC = (userId) => {
    return async (dispatch) => {
        dispatch(setFollowingProgressAC(true, userId))
        const response = await usersAPI.follow(userId)
        if (response.data.resultCode == 0) {
            dispatch(followAC(userId))
        }
        dispatch(setFollowingProgressAC(false, userId))
    }
}

export const unfollowTC = (userId) => {
    return async (dispatch) => {
        dispatch(setFollowingProgressAC(true, userId))
        const response = await usersAPI.unfollow(userId)
        if (response.data.resultCode == 0) {
            dispatch(unfollowAC(userId))
        }
        dispatch(setFollowingProgressAC(false, userId))
    }
}