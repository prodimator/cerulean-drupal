import React from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faPinterestP } from '@fortawesome/free-brands-svg-icons'
import './mobileSplash.scss';


export default function MobileSplash() {
    return (
        <div className="mobile-splash">
            <div className="circle"></div>
            <div className="welcome">
                <p className="canvas">Welcome to</p>
                <p className="canvasBlack"> Lapa</p>
            </div>
            <p className="summary">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Accumsan sit amet nulla facilisi morbi</p>
            <div className="what-do">
                <p className="nexaLight">food</p>
                <p className="nexaLight">design</p>
                <p className="nexaLight">photography</p>
            </div>
            <div className="buttons">
                <NavLink to={'/recipes'}>
                    <button className="recipes">recipes</button>
                </NavLink>
                <NavLink to={'/contact'}>
                    <button className="hello">say hi</button>
                </NavLink>
            </div>
            <div className="links">
                <div className="fb-icon">
                    <FontAwesomeIcon icon={faFacebookF} />
                </div>
                <div className="ig-icon">
                    <FontAwesomeIcon icon={faInstagram} />
                </div>
                <div className="pin-icon">
                    <FontAwesomeIcon icon={faPinterestP} />
                </div>
            </div>
        </div>
    );
}
