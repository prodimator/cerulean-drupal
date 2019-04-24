import React, { Component } from "react";
import FooterImage from '../../images/logo.png';


import './footer.scss';

export default function Footer() {
    let imageStyle = {
        width: '50%',
        maxWidth:'500px',
        backgroundImage: `url("${FooterImage}")`,
        backgroundSize: 'contain',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat'
    };

    return (
        <div className="footer">
            <div style={{ ...imageStyle}}/>
        </div>
    );
}
