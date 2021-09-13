import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from "./Redux/redux-store";
import {HashRouter} from "react-router-dom";
import {Provider} from "react-redux";
// import * as reactRouterDom from 'react-router-dom'

// const HashRouter = require('react-router-dom')

let rerenderReact = props => {
    ReactDOM.render(
        // <React.StrictMode>
        <HashRouter>
            <Provider store={store}>
                <App state={props}
                     dispatch={store.dispatch.bind(store)}
                     store={store}/>
            </Provider>
        </HashRouter>,
        // </React.StrictMode>
        //Strict Mode is commented because if I uncomment it I can get two arrays of users if 'Find Users' part
        document.getElementById('root')
    )
};
rerenderReact(store.getState())

store.subscribe(() => {
    let state = store.getState()
    rerenderReact(state)
})


export default rerenderReact
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
