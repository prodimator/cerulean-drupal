import React from "react";
import SplashImage from "../../images/splash_background.jpg";
import './splash.scss';


export default function Splash() {
    const image_url = SplashImage;
    return (
        <div className="splash">
            <div className="splash-text">
                <span className="canvas">We Are</span>
                <span className="canvasBlack"> Lapa</span>
                <div className="subtext">
                    <span className="underline"></span>
                    <p>Food</p>
                    <p>Web Design</p>
                    <p>Photography</p>
                </div>
            </div>
            <img className="splash-image" src={image_url} />
        </div>
    );
}
