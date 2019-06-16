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
                    <button className="primary">recipes</button>
                </NavLink>
                <NavLink to={'/contact'}>
                    <button className="light">say hi</button>
                </NavLink>
            </div>
            <div className="links">
                <div className="fb-icon">
                    <a href="https://www.facebook.com/lapa.eats" target="_blank">
                        <FontAwesomeIcon icon={faFacebookF} />
                    </a>
                </div>
                <div className="ig-icon">
                    <a href="https://www.instagram.com/lapa.eats" target="_blank">
                        <FontAwesomeIcon icon={faInstagram} />
                    </a>
                </div>
                <div className="pin-icon">
                    <a href="https://www.pinterest.com/lapaeats" target="_blank">
                        <FontAwesomeIcon icon={faPinterestP} />
                    </a>
                </div>
            </div>
        </div>
    );
}
