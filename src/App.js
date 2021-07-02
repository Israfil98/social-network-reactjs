import React from 'react';
import { Route, withRouter } from 'react-router-dom'

import './App.css'

import { connect } from "react-redux";
import { compose } from "redux";
import { initializeTC } from "./BLL/redux/appReducer";
import { CircularProgress } from "@material-ui/core";

import Nav from './components/Nav/Nav';
import { HeaderPropsContainer } from "./components/Header/HeaderPropsContainer";
import Login from "./components/Login/Login";

const ProfilePropsContainer = React.lazy(() => import('./components/Profile/ProfilePropsContainer'));
const UsersPropsContainer = React.lazy(() => import('./components/Users/UsersPropsContainer'));
const DialogsPropsContainer = React.lazy(() => import('./components/Dialogs/DialogsPropsContainer'));

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
                    <Route path='/profile/:userId?' render={ () => {
                        return (
                            <React.Suspense fallback={ <CircularProgress/> }>
                                <ProfilePropsContainer/>
                            </React.Suspense>
                        )
                    } }/>
                    <Route path='/dialogs' render={ () => {
                        return (
                            <React.Suspense fallback={ <CircularProgress/> }>
                                <DialogsPropsContainer/>
                            </React.Suspense>
                        )
                    } }/>
                    <Route path='/users' render={ () => {
                        return (
                            <React.Suspense fallback={ <CircularProgress/> }>
                                <UsersPropsContainer/>
                            </React.Suspense>
                        )
                    } }/>
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