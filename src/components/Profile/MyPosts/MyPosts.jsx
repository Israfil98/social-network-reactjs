import React from 'react';
import s from "./MyPosts.module.css"
import Post from "./Post/Post";

const MyPosts = (props) => {
    const posts = props.profilePage.postsData.map(p => <Post postMessage={p.postText} likesCount={p.likesCount}/>)
    let newPostText = React.createRef()

    const newPostClickHandler = () => {
        props.addPost()
    }
    const onPostTextChangeHandler = () => {
        const text = newPostText.current.value
        props.updatePostText(text)
    }

    return (
        <div className={s.myPosts}>
            <h3 className={s.myPostsTitle}>My posts</h3>
            <div className={s.addPostContainer}>
                <textarea className={s.textarea} ref={newPostText} value={props.profilePage.newPostText} onChange={onPostTextChangeHandler}/>
                <button className={s.newPostBtn} onClick={newPostClickHandler}>New Post</button>
            </div>
            <div className={s.posts}>
                {posts}
            </div>
        </div>
    );
};

export default MyPosts;