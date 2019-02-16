import React, { Component } from 'react';
import { Row, Col } from 'react-flexbox-grid';
import { BrowserRouter as Route, Link, Redirect } from "react-router-dom";

import { _AppConstants } from '../../index.constants';
import HamburgerNav from '../../components/hamburgernav/HamburgerNav';
import Footer from '../../components/footer/Footer';
import './RecipeMenu.scss';


class RecipeMenu extends Component {
  constructor() {
    super();
    this.state = {
      recipes: [],
      labels: []
    };
  }

  componentDidMount() {
    fetch(_AppConstants.api + '/api/recipes?_format=json')
      .then((results) => {
        return results.json();
      }).then((data) => {
        let recipes = data.map(recipe => {
          return ({
            id: recipe.id,
            labels: recipe.labels
          });
        })
        this.setState({
          recipes: recipes,
          labels: ['breakfast', 'appetizers', 'soup', 'salad', 'entrees', 'sides', 'drinks', 'dessert']
        });
      })
  }

  renderCategories() {
    let categories=[];
    var tags = this.state.labels;
    tags.map((category) => {
      categories.push(
        <Row className="recipe-menu-item breakfast-menu">
          <Col md={12}>
            <Link
              className="category-link"
              to={{
                pathname: `/recipes/${category}`
              }}
            >
              {category}
            </Link>
          </Col>
        </Row>
      )
      return categories;
    });

    return (
      <div>
        {categories}
      </div>
    )
  }

	render() {
    return (
  		<div>
        <HamburgerNav />
        <Row center="md" className="recipe-menu">
          <Col md={12}>
		        {this.renderCategories()}
          </Col>
        </Row>
        <Footer />
	    </div>
		);
	}
}

export default RecipeMenu;