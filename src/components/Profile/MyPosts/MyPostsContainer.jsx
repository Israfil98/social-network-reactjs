import React from 'react';
import MyPosts from "./MyPosts";
import { addPostAC, updateNewPostTextAC } from "../../../BLL/redux/profileReducer";

const MyPostsContainer = (props) => {
    const state = props.store.getState()

    const addNewPost = () => {
        props.store.dispatch(addPostAC())
    }
    const postTextChange = (newPostTextValue) => {
        props.store.dispatch(updateNewPostTextAC(newPostTextValue))
    }

    return (
        <MyPosts postsData={ state.profilePage.postsData }
                 newPostText={ state.profilePage.newPostText }
                 addNewPost={ addNewPost }
                 postTextChange={ postTextChange }/>
    );
};

export default MyPostsContainer;