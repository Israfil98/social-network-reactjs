import React from 'react';
import s from "./UserAbout.module.css";
import { UserPhoto } from "./UserPhoto/UserPhoto";

function UserAbout(props) {
    return (
        <div className={ s.userAboutContainer }>
            <UserPhoto saveFile={ props.saveFile } photos={ props.profile.photos } isOwner={ props.isOwner }/>
            <div className={ s.userDescriptionContainer }>
                <div className={ s.fullName }>
                    <div style={ {opacity: '0.5', marginRight: '5px'} }>name:</div>
                    { props.profile.fullName }
                </div>
                <div className={ s.lookingForAJob }>
                    <div style={ {opacity: '0.5', marginRight: '5px'} }>looking for a job:</div>
                    { props.profile.lookingForAJob ? 'No' : 'Yes' }
                    { props.profile.lookingForAJobDescription }
                </div>
                <div className={ s.contacts }>
                    <ul className={ s.contactsList }>
                        <li className={ s.item }>{ props.profile.contacts.github ? 'f' : <span>
                            <div style={ {opacity: '0.5', marginRight: '5px'} }>github: <a
                                href="https://github.com/Israfil98">check</a>
                            </div>
                        </span> }</li>
                        <li className={ s.item }>{ props.profile.contacts.website ? 'f' : <span>
                            <div style={ {opacity: '0.5', marginRight: '5px'} }>portfolio: <a
                                href="https://israfil98.github.io/portfolio/">check</a>
                            </div>
                        </span> }
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default UserAbout;
