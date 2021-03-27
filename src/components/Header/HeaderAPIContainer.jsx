import React from 'react';

import Header from "./Header";

class HeaderAPIContainer extends React.Component {
    componentDidMount() {
        this.props.getAuthUserData()
    }

    render() {
        return (
            <Header { ...this.props } />
        );
    }

}

export default HeaderAPIContainer;
