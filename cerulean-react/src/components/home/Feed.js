import React, { Component } from "react";
import { BrowserRouter as Route, Link } from "react-router-dom";
import Scrollchor from 'react-scrollchor';
import { _AppConstants } from '../../index.constants';
import Slideshow from '../slideshow/Slideshow';
import Card from '../card/Card';
import './Home.css';


class Feed extends Component {
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
            image: recipe.image_header,
          });
        })
        this.setState({recipes});
      })
  }

  renderCard() {
    let items = this.state.recipes.map(recipe => {
      return ( 
        <div className="col-3" key={recipe.id}>
          <Link
            style={{ textDecoration: 'none', color: 'black' }}
            key={recipe.id}
            to={{
              pathname: `/recipe/${recipe.id}`
            }}
          >
            <Card description={recipe.description} image={recipe.image} title_bold={recipe.title_bold} title_slim={recipe.title_slim}/>
          </Link>
        </div>
      );
    });
    return items;
  }

  render() {
    return (
      <div>
        <Slideshow/>
        <div className="cards" id="feed">
          <div className="row-container">
            {this.renderCard()}
          </div>
          <div className="row-container">
            {this.renderCard()}
          </div>
        </div>

        <Scrollchor to="" className="nav-link">Back to Top</Scrollchor>
      </div>
    );
  }
}

export default Feed;