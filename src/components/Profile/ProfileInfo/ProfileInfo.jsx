import React, { useState } from 'react';
import { CircularProgress } from "@material-ui/core";

import s from './ProfileInfo.module.css'

import ProfileStatusWithHooks from "../ProfileStatus/ProfileStatusWithHooks";
import UserAbout from "./UserAbout/UserAbout";
import { UserPhoto } from "./UserAbout/UserPhoto/UserPhoto";
import UserAboutFormReduxForm from "./UserAbout/UserAboutForm";

const ProfileInfo = React.memo((props) => {
    const [editMode, setEditMode] = useState(false)

    const activateEditMode = () => {
        setEditMode(true)
    }

    const onSubmit = (formData) => {
        props.saveProfile(formData)
            .then(() => {
                setEditMode(false)
            })
    }

    if (!props.profile) {
        return <CircularProgress/>
    }

    return (
        <div className={ s.profileInfo }>
            <div className={ s.aboutUserContainer }>
                <UserPhoto saveFile={ props.saveFile } photos={ props.profile.photos } isOwner={ props.isOwner }/>
                <ProfileStatusWithHooks
                    status={ props.status }
                    updateUserStatus={ props.updateUserStatus }
                />
            </div>
            {
                editMode
                    ? <UserAboutFormReduxForm
                        initialValues={ props.profile }
                        profile={ props.profile }
                        onSubmit={ onSubmit }
                    />
                    : <UserAbout
                        profile={ props.profile }
                        isOwner={ props.isOwner }
                        activateEditMode={ activateEditMode }
                    />
            }
        </div>
    );
});


export default ProfileInfo;
