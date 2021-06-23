import React from 'react';
import s from "./Post.module.css"
import user from "../../../../assets/img/user.png"

const Post = (props) => {

    const deletePostHandle = () => {
        props.deletePost(props.postId)
    }
    const likePostHandle = () => {
        props.likePost(props.likesCount, props.postId)
    }

    return (
        <div className={ s.postWrapper }>
            <div className={ s.item }>
                <img src={ user } alt=""/>
                <div className={ s.postMessage }>
                    { props.postMessage }
                </div>
                <div>
                    <button className={ s.deleteBtn } onClick={ deletePostHandle }>Delete post
                    </button>
                </div>
            </div>
            <div className={ s.btnWrapper }>
                <button className={ s.likeBtn } onClick={ likePostHandle }>Like</button>
                { props.likesCount }
            </div>
        </div>
    );
};

export default Post;