import { createSelector } from "reselect";

export const getUsersData = (state) => {
    return state.usersPage.usersData
}

export const getUsersSelector = createSelector(getUsersData ,(usersData) => {
    return usersData.filter(u => true)
})

export const getCurrentPage = (state) => {
    return state.usersPage.currentPage
}

export const getPageSize = (state) => {
    return state.usersPage.pageSize
}

export const getTotalUsersCount = (state) => {
    return state.usersPage.totalUsersCount
}

export const getPortionSize = (state) => {
    return state.usersPage.portionSize
}

export const getIsFetching = (state) => {
    return state.usersPage.isFetching
}

export const getIsFollowingProgress = (state) => {
    return state.usersPage.isFollowingProgress
}