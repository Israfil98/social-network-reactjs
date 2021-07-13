import React from 'react';
import { CircularProgress } from "@material-ui/core";

import s from './ProfileInfo.module.css'
import ProfileStatusWithHooks from "../ProfileStatus/ProfileStatusWithHooks";
import UserAbout from "./UserAbout/UserAbout";


const ProfileInfo = React.memo((props) => {
    if (!props.profile) {
        return <CircularProgress/>
    }

    return (
        <div className={ s.profileInfo }>
            <div className={ s.aboutUserContainer }>
                <UserAbout
                    profile={ props.profile }
                    isOwner={ props.isOwner }
                    saveFile={ props.saveFile }
                />
                <ProfileStatusWithHooks
                    status={ props.status }
                    updateUserStatus={ props.updateUserStatus }
                />
            </div>
        </div>
    );
});


export default ProfileInfo;
