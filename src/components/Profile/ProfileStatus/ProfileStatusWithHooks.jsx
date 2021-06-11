import React, { useState } from 'react';

import style from './ProfileStatus.module.css';

const ProfileStatus = (props) => {

    const [editMode, setEditMode] = useState(false)
    const [status, setStatus] = useState(props.status)

    const activateEditMode = () => {
        setEditMode(true)
    }
    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateUserStatus(status)
    }

    const statusChangeHandle = (e) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <div className={ style.container }>
            {
                editMode
                    ? <input
                        className={ style.input }
                        value={ status }
                        onChange={ statusChangeHandle }
                        onBlur={ deactivateEditMode }
                        autoFocus={ true }
                    />
                    : <div
                        className={ style.status }
                        onDoubleClick={ activateEditMode }
                    >{ props.status }</div>
            }
        </div>
    );
}

export default ProfileStatus;