import { connect } from 'react-redux';

import MyPosts from './MyPosts';
import { addPostAC, deletePostAC } from '../../../BLL/redux/profileReducer';

const mapStateToProps = (state) => {
    return {
        postsData: state.profilePage.postsData,

    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addNewPost: (newPostTextValue) => {
            dispatch(addPostAC(newPostTextValue))
        },
        deletePost: (postId) => {
            dispatch(deletePostAC(postId))
        },
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;