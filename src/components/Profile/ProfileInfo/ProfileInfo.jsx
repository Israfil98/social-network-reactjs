import React from 'react';
import { CircularProgress } from "@material-ui/core";

import s from './ProfileInfo.module.css'
import ProfileStatus from "../ProfileStatus/ProfileStatus";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <CircularProgress/>
    }
    return (
        <div className={ s.profileInfo }>
            <div className={ s.descriptionBlock }>
                <div className={ s.aboutUser }>
                    <div className={ s.fullName }>
                        { props.profile.fullName }
                    </div>
                    <ProfileStatus
                        status={ props.status }
                        updateUserStatus={ props.updateUserStatus }
                    />
                </div>
            </div>
        </div>
    );
};

export default ProfileInfo;
