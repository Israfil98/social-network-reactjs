import React from 'react';
import "./Profile.css"
import bgImg from "../../assets/img/bg-img.jpg";

const Profile = () => {
    return (
        <div>
            <div><img className="bg-img" src={bgImg} alt=""/></div>
            <div>ava + descr</div>
            <div>
                my posts
                <div>new post</div>
                <div>post1</div>
                <div>post2</div>
            </div>
        </div>
    );
};

export default Profile;