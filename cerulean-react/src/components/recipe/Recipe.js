import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { _AppConstants } from '../../index.constants';
import './Recipe.css';


class Recipe extends Component {
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
      let recipes = data.map((recipe) => {
        let parsedTitle = recipe.title.split(' ');
        console.log(parsedTitle);
        return ({
          id: recipe.id,
          title: recipe.title,
          title_bold: parsedTitle[0]+parsedTitle[1],
          title_slim: parsedTitle[2],
          date: recipe.date,
          description: recipe.description,
          body_content: recipe.body_content,
          ingredients: recipe.ingredients,
          instructions: recipe.instructions,
          image_header_url: recipe.image_header,
        });
      })
      this.setState({recipes});
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
            <header className="Recipe-header" style={{backgroundImage: `url(${_AppConstants.api}${recipe.image_header_url})`}} />
            <div className="recipe-post">
              <div className="recipe-title title-bold">
                {recipe.title_bold}
              </div>
              <div className="recipe-title title-slim">
                {recipe.title_slim}
              </div>
              <div className="recipe-body" dangerouslySetInnerHTML={{ __html: recipe.body_content }} />
            </div>
        </div>
    );
  }
}

export default Recipe;