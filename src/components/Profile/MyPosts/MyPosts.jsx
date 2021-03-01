import React from 'react';
import s from "./MyPosts.module.css"
import Post from "./Post/Post";

const MyPosts = () => {
    const postsData = [
        {id: 1, postText: "Hi, im React Developer", likesCount: 1},
        {id: 2, postText: "Im learning React a few month", likesCount: 2},
        {id: 3, postText: "Method map!!!", likesCount: 5}
    ]

    const posts = postsData.map(p => <Post postMessage={p.postText} likesCount={p.likesCount}/>)

    return (
        <div className={s.myPosts}>
            <h3 className={s.myPostsTitle}>My posts</h3>
            <div className={s.addPostContainer}>
                <textarea className={s.textarea}/>
                <button className={s.newPostBtn}>New Post</button>
            </div>
            <div className={s.posts}>
                {posts}
            </div>
        </div>
    );
};

export default MyPosts;