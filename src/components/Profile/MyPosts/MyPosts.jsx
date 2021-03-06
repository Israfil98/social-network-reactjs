import React from 'react';

import s from './MyPosts.module.css'

import Post from './Post/Post';
import { AddPostReduxForm } from "./AddPostForm/AddPostForm";

const MyPosts = React.memo((props) => {
    console.log('MyPosts')
    const posts = props.postsData.map(p => <Post postMessage={ p.postText }
                                                 likesCount={ p.likesCount }
                                                 key={ p.id }
                                                 postId={p.id}
                                                 deletePost={ props.deletePost }
                                                 likePost={ props.likePost }
    />)

    const addPost = (formData) => {
        props.addNewPost(formData.newPostTextValue)
        // console.log(formData.newPostTextValue)
    }

    return (
        <div className={ s.myPosts }>
            <h3 className={ s.myPostsTitle }>My posts</h3>
            <AddPostReduxForm onSubmit={ addPost }/>
            <div className={ s.posts }>
                { posts }
            </div>
        </div>
    );
});

export default MyPosts;