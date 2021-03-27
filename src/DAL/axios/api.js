import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "d827073a-674e-40e9-bfc0-11166191e80b"
    }
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance
            .get(`users?page=${ currentPage }&count=${ pageSize }`)
            .then(response => {
                return response.data
            })
    },
    follow(userId) {
       return instance
            .post(`follow/${ userId }`)
    },
    unfollow(userId) {
        return instance
            .delete(`follow/${ userId }`)
    },
}