import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './nav.scss';

export default function Nav() {
    return (
        <div className="nav">
            <div className="left">
                <Link to={'/'}>
                    <span className="active" id="home">Home</span>
                </Link>
                <Link to={'/'}>
                    <span id="home">Recipes</span>
                </Link>
            </div>
            <h1 className="nav-title"> Lapa</h1>
            <div className="right">
                <Link to={'/about'}>
                    <span id="home">About</span>
                </Link>
                <Link to={'/'}>
                    <span id="home">Contact</span>
                </Link>
            </div>
        </div>
    );
}
