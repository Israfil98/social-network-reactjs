import React from 'react';
import s from "./MyPosts.module.css"
import Post from "./Post/Post";

const MyPosts = () => {
    const postsData = [
        {id: 1, postText: "Hi, im React Developer", likesCount: 1},
        {id: 1, postText: "Im learning React a few month", likesCount: 2}
    ]

    return (
        <div className={s.myPosts}>
            <h3 className={s.myPostsTitle}>My posts</h3>
            <div className={s.addPostContainer}>
                <textarea className={s.textarea}/>
                <button className={s.newPostBtn}>New Post</button>
            </div>
            <div className={s.posts}>
                <Post postMessage={postsData[0].postText} likesCount={postsData[0].likesCount}/>
                <Post postMessage={postsData[1].postText} likesCount={postsData[1].likesCount}/>
            </div>
        </div>
    );
};

export default MyPosts;