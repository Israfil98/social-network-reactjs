import React from 'react';
import "./App.css"
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import { Route } from "react-router-dom"
import Users from "./components/Users/Users";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

const App = (props) => {
    return (
        <div className="app-wrapper">
            <Header/>
            <Nav/>
            <div className="app-wrapper-content">
                <Route path="/profile" render={ () => <Profile store={ props.store }/> }/>
                <Route path="/dialogs" render={ () => <DialogsContainer store={ props.store }/> }/>
                <Route path="/users" render={ () => <Users/> }/>
            </div>
        </div>
    );
};

export default App;
