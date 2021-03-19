import React from 'react';
import axios from 'axios';

import Profile from "./Profile";

class ProfileAPIContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId

        if (!userId) {
            userId = 13765
        }

        axios
            .get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then((response) => {
                this.props.setUserProfile(response.data)
            })
    }

    render() {
        return (
            <Profile { ...this.props } profile={ this.props.profile } />
        );
    }

}

export default ProfileAPIContainer;
