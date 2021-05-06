import { connect } from 'react-redux';

import MyPosts from './MyPosts';
import { addPostAC } from '../../../BLL/redux/profileReducer';

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
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;