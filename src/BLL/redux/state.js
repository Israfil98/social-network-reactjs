import {rerenderEntireTree} from "../../index";

const state = {
    profilePage: {
        postsData: [
            {id: 1, postText: "Hi, im React Developer", likesCount: 1},
            {id: 2, postText: "Im learning React a few month", likesCount: 2},
            {id: 3, postText: "Method map!!!", likesCount: 5}
        ],
        newPostText: ""
    },
    dialogsPage: {
        dialogsData: [
            {id: 1, name: "UserName1"},
            {id: 2, name: "UserName2"},
            {id: 3, name: "UserName3"}
        ],
        messagesData: [
            {id: 1, messageBody: "Hello"},
            {id: 2, messageBody: "React is a nice Library"},
            {id: 3, messageBody: "Method map is improves performance"}
        ]
    }
}

export const addPost = () => {
    const newPost = {
        id: 4,
        postText: state.profilePage.newPostText,
        likesCount: 0
    }
    state.profilePage.postsData.push(newPost)
    state.profilePage.newPostText = ""
    rerenderEntireTree(state)
}

export const updatePostText = (newPostText) => {
    state.profilePage.newPostText = newPostText
    rerenderEntireTree(state)
}


export default state;