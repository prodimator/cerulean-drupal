import React, { Component } from 'react';
import { _AppConstants } from '../../index.constants';
import { Grid, Row, Col } from 'react-flexbox-grid';

import './Recipe.css';


class Recipe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: []
    };
  }

  componentDidMount() {
    fetch(_AppConstants.api + '/api/recipes?_format=json' + '&id='+ this.props.match.params.id)
      .then((results) => {
        return results.json();
      }).then((data) => {
        let recipes = data.map(recipe => {
          let parsedTitle = recipe.title.split(' ');
          return ({
            id: recipe.id,
            title: recipe.title,
            title_bold: parsedTitle[0] + parsedTitle[1],
            title_slim: parsedTitle[2],
            date: recipe.date,
            description: recipe.description,
            body_content: recipe.body_content,
            ingredients: recipe.ingredients,
            instructions: recipe.instructions,
            image_header_url: recipe.image_header,
          });
        })
        this.setState({ recipes });
      })
  }

  render() {
    let id = this.props.match.params.id;
    let recipe = this.state.recipes.reduce(function (current, recipe) {
      return id === current.id ? current : recipe;
    }, {});

    if (!recipe) return <div>Image not found</div>;

    return (
      <div>
        <Row>
          <Col md={12}>
            <header className="recipe-header" style={{ backgroundImage: `url(${_AppConstants.api}${recipe.image_header_url})` }} />
          </Col>
        </Row>
        <Row center="md">
          <Col lg={9}>
            <div className="recipe-post">
              <Row center="md">
                <Col md>
                  <div className="recipe-title title-bold">
                    {recipe.title_bold}
                  </div>
                  <div className="recipe-title title-slim">
                    {recipe.title_slim}
                  </div>
                </Col>
              </Row>
              <Row start="md">
                <Col md>
                  <div className="recipe-body" dangerouslySetInnerHTML={{ __html: recipe.body_content }} />
                </Col>
              </Row>
              <Row start="md">
                <Col md={6} className="recipe-ingredients">
                  <h3>Ingredients</h3>
                  <div dangerouslySetInnerHTML={{ __html: recipe.ingredients }} />
                </Col>
              </Row>
              <Row start="md">
                <Col md={6} className="recipe-instructions">
                  <h3>Instructions</h3>
                  <div dangerouslySetInnerHTML={{ __html: recipe.instructions }} />
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Recipe;