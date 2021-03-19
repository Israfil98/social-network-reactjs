import React from 'react';
import axios from 'axios';

import Header from "./Header";

class HeaderAPIContainer extends React.Component {
    componentDidMount() {
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
                withCredentials: true
            })
            .then((response) => {
                debugger
                if (response.data.resultCode === 0) {
                    const {email, id, login} = response.data.data
                    this.props.setUserData(id, login, email)
                }
            })
    }

    render() {
        return (
            <Header { ...this.props } />
        );
    }

}

export default HeaderAPIContainer;
