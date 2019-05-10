import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './navSmall.scss';

export default function NavSmall() {
    return (
        <div className="navSmall">
            <Link to={'/'}>
                <span className="active" id="home">Home</span>
            </Link>
            <Link to={'#'}>
                <span id="home">Recipes</span>
            </Link>
            <Link to={'/about'}>
                <span id="home">About</span>
            </Link>
            <Link to={'#'}>
                <span href="#" id="home">Contact</span>
            </Link>
        </div>
    );
}
