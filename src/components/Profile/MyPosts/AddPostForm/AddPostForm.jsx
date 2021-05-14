import React from 'react';
import s from "../MyPosts.module.css";
import { Field, reduxForm } from "redux-form";
import { maxLengthCreator, required } from "../../../../utils/validators/validators";
import { Textarea } from "../../../common/FormsControls/FormsControls";

const maxLength500 = maxLengthCreator(500)

const AddPostForm = (props) => {
    return (
        <form onSubmit={ props.handleSubmit } className={ s.addPostContainer }>
            <Field className={ s.textarea }
                   component={ Textarea }
                   name='newPostTextValue'
                   placeholder='What happening?'
                   validate={ [required, maxLength500] }/>
            <button className={ s.newPostBtn }>New Post</button>
        </form>
    );
};

export const AddPostReduxForm = reduxForm({
    // a unique name for the form
    form: 'addPost'
})(AddPostForm)

export default AddPostForm;