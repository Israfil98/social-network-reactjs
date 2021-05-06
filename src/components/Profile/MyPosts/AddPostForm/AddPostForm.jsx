import React from 'react';
import s from "../MyPosts.module.css";
import { Field, reduxForm } from "redux-form";

const AddPostForm = (props) => {
    return (
        <form onSubmit={ props.handleSubmit } className={ s.addPostContainer }>
            <Field className={ s.textarea }
                   component='textarea'
                   name='newPostTextValue'
                   placeholder='What happening?'/>
            <button className={ s.newPostBtn }>New Post</button>
        </form>
    );
};

export const AddPostReduxForm = reduxForm({
    // a unique name for the form
    form: 'addPost'
})(AddPostForm)

export default AddPostForm;