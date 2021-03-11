import { combineReducers, createStore } from "redux";

import { profileReducer } from "./profileReducer";
import { dialogsReducer } from "./dialogsReducer";

const stateFromReducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
})

export const store = createStore(stateFromReducers)

window.store = store;