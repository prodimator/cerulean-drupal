import React from "react";
import SplashImage from "../../images/splash_background.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faPinterestP } from '@fortawesome/free-brands-svg-icons'
import './splash.scss';


export default function Splash() {
    const image_url = SplashImage;
    return (
        <div className="splash">
            <div className="splash-text">
                <span className="canvas">Welcome to</span>
                <span className="canvasBlack"> Lapa</span>
                <div className="subtext">
                    <span className="underline"></span>
                    <p>Food</p>
                    <p>Web Design</p>
                    <p>Photography</p>
                </div>
            </div>
            <img className="splash-image" src={image_url} alt="Splash" />
            <div className="splash-social">
                <div className="fb-icon">
                    <a href="https://www.facebook.com/lapa.eats" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faFacebookF} />
                    </a>
                </div>
                <div className="ig-icon">
                    <a href="https://www.instagram.com/lapa.eats" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faInstagram} />
                    </a>
                </div>
                <div className="pin-icon">
                    <a href="https://www.pinterest.com/lapaeats" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faPinterestP} />
                    </a>
                </div>
            </div>
        </div>
    );
}
