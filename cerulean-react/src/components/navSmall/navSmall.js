import React from "react";
import './navSmall.scss';

export default function NavSmall() {
    return (
        <div className="navSmall">
                <a href="#" className="active" id="home">Home</a>
                <a href="#" id="home">Recipes</a>
                <a href="#" id="home">About</a>
                <a href="#" id="home">Contact</a>
        </div>
    );
}
