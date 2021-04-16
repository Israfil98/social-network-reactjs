import React from 'react';

import style from './ProfileStatus.module.css';

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateUserStatus(this.state.status)
    }

    statusChangeHandle = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return (
            <div className={ style.container }>
                {
                    this.state.editMode
                        ? <input
                            className={ style.input }
                            value={ this.state.status }
                            onChange={ this.statusChangeHandle }
                            onBlur={ this.deactivateEditMode }
                            autoFocus={ true }
                        />
                        : <div
                            className={ style.status }
                            onDoubleClick={ this.activateEditMode }
                        >{ this.props.status }</div>
                }
            </div>
        );
    }
}

export default ProfileStatus;