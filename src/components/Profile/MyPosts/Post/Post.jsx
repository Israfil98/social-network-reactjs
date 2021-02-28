import React from 'react';
import s from "./Post.module.css"
import user from "../../../../assets/img/user.png"


const Post = (props) => {
    return (
        <div className={s.item}>
            <img src={user} alt=""/>
            {props.postMessage}
            <div>Likes {props.likesCount}</div>
        </div>
    );
};

export default Post;