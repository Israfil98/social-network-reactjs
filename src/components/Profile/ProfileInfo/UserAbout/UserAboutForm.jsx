import React from 'react';
import s from "./UserAbout.module.css";
import { Input, Textarea } from "../../../common/FormsControls/FormsControls";
import style from "../../../Login/Login.module.css";
import { Field, reduxForm } from "redux-form";

function UserAboutForm(props) {
    return (
        <div className={ s.userAboutContainer }>
            <form className={ s.userDescriptionsContainer } onSubmit={ props.handleSubmit }>
                <button className={ s.btn }>save</button>
                <div className={ s.description }>
                    <div style={ {opacity: '0.5', marginRight: '5px'} }>Full name:</div>
                    <Field component={ Input }
                           validate={ [] }
                           name={ 'fullName' }
                           className={ style.input }
                           placeholder={ 'Enter your name' }
                    />
                </div>
                <div className={ s.description }>
                    <div style={ {opacity: '0.5', marginRight: '5px'} }>Looking for a job:</div>
                    <Field component={ Input }
                           validate={ [] }
                           name={ 'lookingForAJob' }
                           className={ style.input }
                           type='checkbox'
                    />
                </div>
                <div className={ s.description }>
                    <div style={ {opacity: '0.5', marginRight: '5px'} }>My skills:</div>
                    <Field component={ Textarea }
                           validate={ [] }
                           name={ 'lookingForAJobDescription' }
                           className={ style.input }
                           placeholder='Enter skills'
                    />
                </div>
                <div className={ s.description }>
                    <div style={ {opacity: '0.5', marginRight: '5px'} }>About me:</div>
                    <Field component={ Textarea }
                           validate={ [] }
                           name={ 'aboutMe' }
                           className={ style.input }
                           placeholder='About me'
                    />
                </div>
                <ul className={ s.contactsList }>
                    Contacts:
                    {
                        Object.keys(props.profile.contacts).map((key) => {
                            return (
                                <li key={ key } className={ s.contactItem }>
                                    <span style={ {opacity: '0.5', marginRight: '5px'} }>{ key }:</span>
                                    <Field component={ Input }
                                           validate={ [] }
                                           name={ 'contacts.' + key }
                                           className={ style.input }
                                           placeholder={ key }
                                    />
                                </li>
                            )
                        })
                    }
                </ul>
            </form>
        </div>
    );
}

const UserAboutFormReduxForm = reduxForm({form: 'edit-profile'})(UserAboutForm)

export default UserAboutFormReduxForm;
