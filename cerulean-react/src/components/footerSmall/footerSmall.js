import React from "react";
import FooterImage from '../../images/logo_purple.png';


import './footerSmall.scss';

export default function FooterSmall() {
    let imageStyle = {
        width: '100%',
        maxWidth:'400px',
        backgroundImage: `url("${FooterImage}")`,
        backgroundSize: 'contain',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat'
    };

    return (
        <div className="footerSmall">
            <div style={{ ...imageStyle}}/>
        </div>
    );
}
