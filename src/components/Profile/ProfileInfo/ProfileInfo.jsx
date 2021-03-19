import React from 'react';
import { CircularProgress } from "@material-ui/core";

import s from './ProfileInfo.module.css'

import bgImg from '../../../assets/img/bg-img.jpg';

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <CircularProgress/>
    }
    return (
        <div className={s.profileInfo}>
            <div>
                <img className={s.bgImg} src={bgImg} alt=''/>
            </div>
            <div className={s.descriptionBlock}>
                <div className={s.userPhoto}>
                    <img src={props.profile.photos.large} alt=""/>
                </div>
                <div className={s.aboutUser}>
                    <div className={s.fullName}>
                        {props.profile.fullName}
                    </div>
                    <div className={s.about}>
                        {props.profile.aboutMe}
                    </div>
                </div>
                <div className={s.contacts}>
                    {props.profile.contacts.vk}
                </div>
            </div>
        </div>
    );
};

export default ProfileInfo;