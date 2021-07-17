import React from 'react';
import s from "./UserAbout.module.css";
import { UserDescription } from "./UserDescription/UserDescription";
import { Contacts } from "./Contacts/Contacts";

function UserAbout(props) {
    return (
        <div className={ s.userAboutContainer }>
            <div className={ s.userDescriptionsContainer }>
                { props.isOwner && <button className={ s.btn } onClick={ props.activateEditMode }>edit</button> }
                <UserDescription
                    descriptionName='Name:'
                    description={ props.profile.fullName }
                />
                <UserDescription
                    descriptionName='Looking for a job:'
                    description={ props.profile.lookingForAJob ? 'yes' : 'no' }
                />
                {
                    props.profile.lookingForAJob &&
                    <UserDescription
                        descriptionName='My skills:'
                        description={ props.profile.lookingForAJobDescription }
                    />
                }
                <UserDescription
                    descriptionName='About me:'
                    description={ props.profile.aboutMe }
                />
                <Contacts profile={ props.profile }/>
            </div>
        </div>
    );
}

export default UserAbout;
