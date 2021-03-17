import React from 'react';
import { Route } from 'react-router-dom'

import './App.css'

import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import { UsersPropsContainer } from './components/Users/UsersPropsContainer';

const App = () => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Nav/>
            <div className='app-wrapper-content'>
                <Route path='/profile' render={ () => <Profile /> } />
                <Route path='/dialogs' render={ () => <DialogsContainer /> } />
                <Route path='/users' render={ () => <UsersPropsContainer /> } />
            </div>
        </div>
    );
};

export default App;
