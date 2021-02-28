import React from 'react';
import s from "./ProfileInfo.module.css"
import bgImg from "../../../assets/img/bg-img.jpg";

const ProfileInfo = () => {
    return (
        <div className={s.profileInfo}>
            <div>
                <img className={s.bgImg} src={bgImg} alt=""/>
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </div>
    );
};

export default ProfileInfo;