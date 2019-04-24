import React from "react";
import './nav.scss';

export default function Nav() {
    return (
        <div className="nav">
            <div className="left">
                <a href="#" className="active" id="home">Home</a>
                <a href="#" id="home">Recipes</a>
            </div>
            <h1 className="nav-title"> Lapa</h1>
            <div className="right">
                <a href="#" id="home">About</a>
                <a href="#" id="home">Contact</a>
            </div>
        </div>
    );
}
