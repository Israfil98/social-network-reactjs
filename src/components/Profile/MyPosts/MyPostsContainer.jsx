import { connect } from 'react-redux';

import MyPosts from './MyPosts';
import { addPostAC, updateNewPostTextAC } from '../../../BLL/redux/profileReducer';

const mapStateToProps = (state) => {
    return {
        postsData: state.profilePage.postsData,
        newPostText: state.profilePage.newPostText,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addNewPost: () => {
            dispatch(addPostAC())
        },
        postTextChange: (newPostTextValue) => {
            dispatch(updateNewPostTextAC(newPostTextValue))
        },
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;