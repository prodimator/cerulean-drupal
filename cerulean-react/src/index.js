import React from 'react';
import ReactDOM from 'react-dom';
// import Recipe from './components/recipe/Recipe';
// import Home from './components/home/Home';
import Main from './components/main/Main';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

// ReactDOM.render(<Main />, document.getElementById('root'));

ReactDOM.render(
    <BrowserRouter>
        <Main />
    </BrowserRouter>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
