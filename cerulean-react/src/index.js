import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Main from './components/main/Main';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <BrowserRouter>
        <Main />
    </BrowserRouter>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
