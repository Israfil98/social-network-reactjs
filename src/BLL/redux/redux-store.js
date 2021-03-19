import { combineReducers, createStore } from 'redux';

import { profileReducer } from './profileReducer';
import { dialogsReducer } from './dialogsReducer';
import { usersReducer } from './usersReducer';
import { authReducer } from "./authReducer";

const stateFromReducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,

})

export const store = createStore(stateFromReducers)

window.store = store;
