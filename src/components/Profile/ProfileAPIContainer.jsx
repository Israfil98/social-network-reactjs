import React from 'react';
import { Redirect } from 'react-router-dom';

import Profile from './Profile';

class ProfileAPIContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId

        if (!userId) {
            userId = 13765
        }

        this.props.getUserProfile(userId)
    }

    render() {
        if (this.props.isAuth === false) {
            return <Redirect to='/login'/>
        }

        return (
            <Profile { ...this.props } profile={ this.props.profile } />
        );
    }

}

export default ProfileAPIContainer;
