import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';

import HamburgerNav from '../../components/hamburgernav/HamburgerNav';
import Hamburger from '../../components/hamburger/Hamburger';
import Footer from '../../components/footer/Footer';
import './RecipeMenu.scss';


class RecipeMenu extends Component {
	render() {
    return (
  		<div>
        <Hamburger />
        <HamburgerNav />
		    <Row center="md" className="recipe-menu">
          <Col md={12}>
            <Row className="recipe-menu-item breakfast-menu">
              <Col md={12}>
                <div>
                  Breakfast
                </div>
              </Col>
            </Row>
            <Row className="recipe-menu-item apps-menu">
              <Col md={12}>
                <div>
                  Appetizers
                </div>
              </Col>
            </Row>
            <Row className="recipe-menu-item soup-menu">
              <Col md={12}>
                <div>
                  Soup
                </div>
              </Col>
            </Row>
            <Row className="recipe-menu-item salad-menu">
              <Col md={12}>
                <div>
                  Salad
                </div>
              </Col>
            </Row>
            <Row className="recipe-menu-item mains-menu">
              <Col md={12}>
                <div>
                  Main Dishes
                </div>
              </Col>
            </Row>
            <Row className="recipe-menu-item sides-menu">
              <Col md={12}>
                <div>
                  Sides
                </div>
              </Col>
            </Row>
            <Row className="recipe-menu-item drinks-menu">
              <Col md={12}>
                <div>
                  Drinks
                </div>
              </Col>
            </Row>
            <Row className="recipe-menu-item dessert-menu">
              <Col md={12}>
                <div>
                  Dessert
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
        <Footer />
	    </div>
		);
	}
}

export default RecipeMenu;