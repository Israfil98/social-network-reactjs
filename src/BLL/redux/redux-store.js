import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';

import { profileReducer } from './profileReducer';
import { dialogsReducer } from './dialogsReducer';
import { usersReducer } from './usersReducer';
import { authReducer } from "./authReducer";
import { reducer as formReducer } from 'redux-form'

const stateFromReducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,

})

export const store = createStore(stateFromReducers, applyMiddleware(thunkMiddleware))

window.store = store;
