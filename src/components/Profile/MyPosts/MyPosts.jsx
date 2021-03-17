import React from 'react';

import s from './MyPosts.module.css'

import Post from './Post/Post';

const MyPosts = (props) => {
    const posts = props.postsData.map(p => <Post postMessage={ p.postText } likesCount={ p.likesCount } key={ p.id } />)
    const newPostTextValue = props.newPostText

    const newPostClickHandler = () => {
        props.addNewPost()
    }
    const onPostTextChangeHandler = (event) => {
        const newPostTextValue = event.currentTarget.value
        props.postTextChange(newPostTextValue)
    }

    return (
        <div className={ s.myPosts }>
            <h3 className={ s.myPostsTitle }>My posts</h3>
            <div className={ s.addPostContainer }>
                <textarea className={ s.textarea }
                          value={ newPostTextValue }
                          onChange={ onPostTextChangeHandler }
                          placeholder='What happening?'/>
                <button className={ s.newPostBtn }
                        onClick={ newPostClickHandler }>New Post
                </button>
            </div>
            <div className={ s.posts }>
                { posts }
            </div>
        </div>
    );
};

export default MyPosts;