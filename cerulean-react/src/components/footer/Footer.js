import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { slide as Menu } from 'react-burger-menu';
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