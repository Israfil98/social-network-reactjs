import React from 'react';
import "./App.css"
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom"
import Users from "./components/Users/Users";

const App = (props) => {
    return (
        <div className="app-wrapper">
            <Header/>
            <Nav/>
            <div className="app-wrapper-content">
                <Route path="/profile" render={() => <Profile profilePage={props.state.profilePage}/>}/>
                <Route path="/dialogs" render={() => <Dialogs dialogsPage={props.state.dialogsPage}/>}/>
                <Route path="/users" render={() => <Users/>}/>
            </div>
        </div>
    );
};

export default App;
