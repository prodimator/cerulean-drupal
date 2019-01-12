import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { slide as Menu } from 'react-burger-menu';
import { BrowserRouter as Route, Link } from "react-router-dom";
import SearchIcon from '../../svg/search.svg';

import './HamburgerNav.scss';
import Hamburger from '../hamburger/Hamburger';

const HamburgerNav = (props) => (
  <Row between="md" middle="md" center="md" className="hamburger-nav">
    <Col className="hamburger" md={1}>
      <Hamburger />
    </Col>

    <Col md={4}>
      <Link className="hamburger-nav-link nav-title" to='/'>
        LAPA
      </Link> 
    </Col>

    <Col md={1}>
      <img src={SearchIcon} className="search-icon" alt="Search icon" />
    </Col>
  </Row>
);

export default HamburgerNav;