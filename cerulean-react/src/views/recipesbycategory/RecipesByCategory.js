import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { BrowserRouter as Route, Link, Redirect } from "react-router-dom";

import { _AppConstants } from '../../index.constants';
import HamburgerNav from '../../components/hamburgernav/HamburgerNav';
import Hamburger from '../../components/hamburger/Hamburger';
import Footer from '../../components/footer/Footer';
import Card from '../../components/card/Card';
import './RecipesByCategory.scss';


class RecipeMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: []
    };
  }

  componentDidMount() {
    fetch(_AppConstants.api + '/api/recipes?_format=json')
      .then((results) => {
        return results.json();
      }).then((data) => {
        let recipes = data.map(recipe => {
          let parsedTitle = recipe.title.split(' ');
          return ({
            id: recipe.id,
            title: recipe.title,
            title_bold: parsedTitle[0]+parsedTitle[1],
            title_slim: parsedTitle[2],
            date: recipe.date,
            description: recipe.description,
            labels: recipe.labels,
            image_1x1: recipe.image_1x1,
            image_2x1: recipe.image_2x1,
            image_3x2: recipe.image_3x2,
            image_3x4: recipe.image_3x4
          });
        })
        this.setState({
          recipes: recipes
        });
      })
  }

  renderCard() {
    let category = this.props.match.params.tag;
    let columns=[];
    let cards = this.state.recipes;
    let recipes = cards.filter(function (recipe) {
      let includeCard = false;
      let labels = recipe.labels.split(', ');
      labels.map((label) => {
        if (label === category) {
          includeCard = true;
        }
      });
      return includeCard;
    });
    recipes.map((recipe,idx) => {
      columns.push(
        <div className="col-3">
          <Link
            key={recipe.id}
            to={{
              pathname: `/recipe/${recipe.id}`
            }}
          >
            <Card description={recipe.description} image={recipe.image_3x4} title_bold={recipe.title_bold} title_slim={recipe.title_slim}/>
          </Link>
        </div>
      )
    });

    return (
      <div className="row">
      {columns}
      </div>
    )
  }

	render() {
    return (
  		<div>
        <HamburgerNav />
		    <Row center="md" className="card-div">
          <Col md={9}>
            {this.renderCard()}
          </Col>
        </Row>
        <Footer />
	    </div>
		);
	}
}

export default RecipeMenu;