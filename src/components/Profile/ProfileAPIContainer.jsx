import React from 'react';

import Profile from "./Profile";

class ProfileAPIContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId

        if (!userId) {
            userId = 13765
        }

        this.props.getUserProfile(userId)
    }

    render() {
        return (
            <Profile { ...this.props } profile={ this.props.profile } />
        );
    }

}

export default ProfileAPIContainer;
