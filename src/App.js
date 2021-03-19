import React from 'react';
import { Route } from 'react-router-dom'

import './App.css'

import { HeaderPropsContainer } from "./components/Header/HeaderPropsContainer";
import Nav from './components/Nav/Nav';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import { UsersPropsContainer } from './components/Users/UsersPropsContainer';
import { ProfilePropsContainer } from "./components/Profile/ProfilePropsContainer";


const App = () => {
    return (
        <div className='app-wrapper'>
            <HeaderPropsContainer />
            <Nav />
            <div className='app-wrapper-content'>
                <Route path='/profile/:userId?' render={ () => <ProfilePropsContainer /> } />
                <Route path='/dialogs' render={ () => <DialogsContainer /> } />
                <Route path='/users' render={ () => <UsersPropsContainer /> } />
            </div>
        </div>
    );
};

export default App;
