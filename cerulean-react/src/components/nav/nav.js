import React from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import './nav.scss';

export default function Nav() {
    return (
        <div className="nav">
            <div className="left">
                <NavLink exact activeClassName="active" to={'/'}>
                    <span id="home">Home</span>
                </NavLink>
                <NavLink to={'/recipes'}>
                    <span id="recipes">Recipes</span>
                </NavLink>
            </div>
            <h1 className="nav-title"> Lapa</h1>
            <div className="right">
                <NavLink to={'/about'}>
                    <span id="about">About</span>
                </NavLink>
                <NavLink to={'/contact'}>
                    <span id="contact">Contact</span>
                </NavLink>
            </div>
        </div>
    );
}
