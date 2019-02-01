import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { BrowserRouter as Route, Link, Redirect } from "react-router-dom";

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
                <Link className="category-link"
                  to="/recipes/breakfast"
                >
                  Breakfast
                </Link>
              </Col>
            </Row>
            <Row className="recipe-menu-item apps-menu">
              <Col md={12}>
                <Link className="category-link"
                  to="/recipes/appetizers"
                >
                  Appetizers
                </Link>
              </Col>
            </Row>
            <Row className="recipe-menu-item soup-menu">
              <Col md={12}>
                <Link className="category-link"
                  to="/recipes/soup"
                >
                  Soup
                </Link>
              </Col>
            </Row>
            <Row className="recipe-menu-item salad-menu">
              <Col md={12}>
                <Link className="category-link"
                  to="/recipes/salad"
                >
                  Salad
                </Link>
              </Col>
            </Row>
            <Row className="recipe-menu-item mains-menu">
              <Col md={12}>
                <Link className="category-link"
                  to="/recipes/entrees"
                >
                  Main Dishes
                </Link>
              </Col>
            </Row>
            <Row className="recipe-menu-item sides-menu">
              <Col md={12}>
                <Link className="category-link"
                  to="/recipes/sides"
                >
                  Sides
                </Link>
              </Col>
            </Row>
            <Row className="recipe-menu-item drinks-menu">
              <Col md={12}>
                <Link className="category-link"
                  to="/recipes/drinks"
                >
                  Drinks
                </Link>
              </Col>
            </Row>
            <Row className="recipe-menu-item dessert-menu">
              <Col md={12}>
                <Link className="category-link"
                  to="/recipes/dessert"
                >
                  Dessert
                </Link>
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