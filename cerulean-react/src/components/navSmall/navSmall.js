import React from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import './navSmall.scss';

export default function NavSmall() {
    return (
        <div className="navSmall">
            <NavLink exact activeClassName="active" to={'/'}>
                <span id="home">Home</span>
            </NavLink>
            <NavLink to={'/recipes'}>
                <span id="recipes">Recipes</span>
            </NavLink>
            <NavLink to={'/about'}>
                <span id="about">About</span>
            </NavLink>
            <NavLink to={'/contact'}>
                <span id="contact">Contact</span>
            </NavLink>
        </div>
    );
}
