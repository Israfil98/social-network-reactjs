import React from 'react';

import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';

const Profile = React.memo((props) => {
    return (
        <div>
            <ProfileInfo
                saveFile={ props.saveFile }
                saveProfile={ props.saveProfile }
                isOwner={ props.isOwner }
                profile={ props.profile }
                status={ props.status }
                updateUserStatus={ props.updateUserStatus }
            />
            <MyPostsContainer/>
        </div>
    );
});

export default Profile;