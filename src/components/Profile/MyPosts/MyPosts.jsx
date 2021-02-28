import React from 'react';
import s from "./MyPosts.module.css"
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div className={s.myPosts}>
            <h3 className={s.myPostsTitle}>My posts</h3>
            <div>
                <textarea/>
                <button>New Post</button>
            </div>
            <div className={s.posts}>
                <Post postMessage="Hi, im React Developer" likesCount="1"/>
                <Post postMessage="Im learning React a few month" likesCount="0"/>
            </div>
        </div>
    );
};

export default MyPosts;