import React from 'react';
import s from "./Post.module.css"
import user from "../../../../assets/img/user.png"

const Post = (props) => {
    return (
        <div className={s.postWrapper}>
            <div className={s.item}>
                <img src={user} alt=""/>
                <div className={s.postMessage}>
                    {props.postMessage}
                </div>
            </div>
            <div className={s.btnWrapper}>
                <button className={s.likeBtn}>Like</button>
                {props.likesCount}
            </div>
        </div>
    );
};

export default Post;