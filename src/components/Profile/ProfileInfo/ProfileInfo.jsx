import React from 'react';
import { CircularProgress } from "@material-ui/core";
import userPhoto from '../../../assets/img/user.png'

import s from './ProfileInfo.module.css'
import ProfileStatusWithHooks from "../ProfileStatus/ProfileStatusWithHooks";

const ProfileInfo = React.memo((props) => {
    if (!props.profile) {
        return <CircularProgress/>
    }

    const onSelectFile = (e) => {
        if (e.target.files.length) {
            // передаем файл на сервер
            props.saveFile(e.target.files[0])
        }
    }

    return (
        <div className={ s.profileInfo }>
            <div className={ s.descriptionBlock }>
                <div className={ s.aboutUser }>
                    <div className="userPhoto">
                        <img
                            className={ s.userPhoto }
                            src={ props.profile.photos.large || userPhoto }
                            alt="user photo"
                        />
                    </div>
                    {
                        props.isOwner && <input className={s.selectUserPhoto} type="file" onChange={onSelectFile} />
                    }
                    <div className={ s.fullName }>
                        <div style={ {opacity: '0.5', marginRight: '5px'} }>name:</div>
                        { props.profile.fullName }
                    </div>
                    <ProfileStatusWithHooks
                        status={ props.status }
                        updateUserStatus={ props.updateUserStatus }
                    />
                </div>
            </div>
        </div>
    );
});

export default ProfileInfo;
