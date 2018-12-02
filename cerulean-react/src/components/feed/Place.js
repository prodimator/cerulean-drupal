import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { _AppConstants } from '../../index.constants';
import Slideshow from '../slideshow/Slideshow';


class Place extends React.Component {
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
          return ({
            id: recipe.id,
            title: recipe.title,
            date: recipe.date,
            description: recipe.description,
            image: recipe.image_header,
          });
        })
        this.setState({recipes});
      })
  }

  render() {
    return (
      <div>
        <Slideshow/>
        <h2>Featured Recipes</h2>
        <ul>
          {this.state.recipes.map((item)=>
            <li key={item.id}>
              <Link
                key={item.id}
                to={{
                  pathname: `/recipe/${item.id}`
                }}
              >
                <p>{item.title}</p>
              </Link>
            </li>
          )}
        </ul>
      </div>
    );
  }
}

export default Place;