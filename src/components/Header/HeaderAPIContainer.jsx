import React from 'react';

import Header from "./Header";

class HeaderAPIContainer extends React.Component {
    render() {
        return (
            <Header { ...this.props } />
        );
    }
}

export default HeaderAPIContainer;
