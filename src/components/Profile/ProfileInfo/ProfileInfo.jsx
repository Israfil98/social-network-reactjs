import React from 'react';
import { CircularProgress } from "@material-ui/core";

import s from './ProfileInfo.module.css'
import ProfileStatusWithHooks from "../ProfileStatus/ProfileStatusWithHooks";

const ProfileInfo = React.memo((props) => {
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
