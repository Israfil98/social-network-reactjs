import React from 'react';

import Profile from './Profile';

class ProfileAPIContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId

        if (!userId) {
            userId = 13765
        }

        this.props.getUserProfile(userId)
        this.props.getUserStatus(userId)
    }

    render() {
        return (
            <Profile { ...this.props }
                     profile={ this.props.profile }
                     status={ this.props.status }
                     updateUserStatus={ this.props.updateUserStatus }
            />
        );
    }
}

export default ProfileAPIContainer;
