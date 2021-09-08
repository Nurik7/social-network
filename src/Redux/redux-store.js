import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import profileReducer from "./Reducer/profileReducer";
import dialogReducer from "./Reducer/dialogReducer";
import sidebarReducer from "./Reducer/sidebarReducer";
import findUsersReducer from "./Reducer/findUsersReducer";
import authReducer from "./Reducer/authReducer";
import thunkMiddleware from 'redux-thunk'
import {reducer as formReducer} from 'redux-form'
import appReducer from "./Reducer/appReducer";
import settingsReducer from "./Reducer/settingsReducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogReducer,
    sidebar: sidebarReducer,
    findUsersPage: findUsersReducer,
    Auth: authReducer,
    form: formReducer,
    App: appReducer,
    settingsPage: settingsReducer
})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)))
// let store = createStore(reducers, applyMiddleware(thunkMiddleware))

window.__store__ = store

export default store