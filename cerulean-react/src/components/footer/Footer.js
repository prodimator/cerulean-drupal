import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import FooterImage from '../../images/watermark_footer.png';


import './Footer.scss';

const Footer = (props) => (
    <Row center="md">
        <Col>
            <img src={FooterImage} className="footer-image" alt="Footer watermark" />
        </Col>
    </Row>
);

export default Footer;