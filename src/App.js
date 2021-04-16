import React from 'react';
import { Route } from 'react-router-dom'

import './App.css'

import { HeaderPropsContainer } from "./components/Header/HeaderPropsContainer";
import Nav from './components/Nav/Nav';
import DialogsPropsContainer from './components/Dialogs/DialogsPropsContainer';
import { UsersPropsContainer } from './components/Users/UsersPropsContainer';
import { ProfilePropsContainer } from "./components/Profile/ProfilePropsContainer";
import Login from "./components/Login/Login";

const App = () => {
    return (
        <div className='app-wrapper'>
            <HeaderPropsContainer />
            <Nav />
            <div className='app-wrapper-content'>
                <Route path='/profile/:userId?' render={ () => <ProfilePropsContainer /> } />
                <Route path='/dialogs' render={ () => <DialogsPropsContainer /> } />
                <Route path='/users' render={ () => <UsersPropsContainer /> } />
                <Route path='/login' render={ () => <Login /> } />
            </div>
        </div>
    );
};

export default App;
