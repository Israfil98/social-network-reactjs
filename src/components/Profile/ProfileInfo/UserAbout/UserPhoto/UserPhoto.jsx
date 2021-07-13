import s from "../UserAbout.module.css";
import userPhoto from "../../../../../assets/img/user.png";
import React from "react";

export function UserPhoto(props) {
    const onSelectFile = (e) => {
        if (e.target.files.length) {
            // передаем файл на сервер
            props.saveFile(e.target.files[0])
        }
    }

    return (
        <div>
            <img
                className={ s.userPhoto }
                src={ props.photos.large || userPhoto }
                alt="user photo"
            />
            <div>
                {
                    props.isOwner && <div>
                        <span className={ s.choosePhoto }>Choose photo</span>
                        <input type="file" onChange={ onSelectFile }/>
                    </div>
                }
            </div>
        </div>
    );
}