import React from 'react'

import Profile from './Profile'

class ProfileAPIContainer extends React.Component {

    refreshProfile() {
        let userId = this.props.match.params.userId

        if (!userId) {
            userId = this.props.authorizedUserId
        }

        this.props.getUserProfile(userId)
        this.props.getUserStatus(userId)
    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {

        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.refreshProfile()
        }
    }

    render() {
        return (
            <Profile
                { ...this.props }
                saveFile={ this.props.saveFile }
                saveProfile={ this.props.saveProfile }
                isOwner={ !this.props.match.params.userId }
                profile={ this.props.profile }
                status={ this.props.status }
                updateUserStatus={ this.props.updateUserStatus }
            />
        )
    }
}

export default ProfileAPIContainer
