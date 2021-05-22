import React from 'react';
import { Route, withRouter } from 'react-router-dom'

import './App.css'

import { HeaderPropsContainer } from "./components/Header/HeaderPropsContainer";
import Nav from './components/Nav/Nav';
import DialogsPropsContainer from './components/Dialogs/DialogsPropsContainer';
import { UsersPropsContainer } from './components/Users/UsersPropsContainer';
import { ProfilePropsContainer } from "./components/Profile/ProfilePropsContainer";
import Login from "./components/Login/Login";
import { connect } from "react-redux";
import { compose } from "redux";
import { initializeTC } from "./BLL/redux/appReducer";
import { CircularProgress } from "@material-ui/core";

class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialized) {
            return <CircularProgress/>
        }
        return (
            <div className='app-wrapper'>
                <HeaderPropsContainer/>
                <Nav/>
                <div className='app-wrapper-content'>
                    <Route path='/profile/:userId?' render={ () => <ProfilePropsContainer/> }/>
                    <Route path='/dialogs' render={ () => <DialogsPropsContainer/> }/>
                    <Route path='/users' render={ () => <UsersPropsContainer/> }/>
                    <Route path='/login' render={ () => <Login/> }/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        initialized: state.app.initialized
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        initializeApp: () => {
            dispatch(initializeTC())
        },
    }
}

export default compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps),
)(App);