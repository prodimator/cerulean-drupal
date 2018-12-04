import React, { Component } from "react";
import { BrowserRouter as Route, Link } from "react-router-dom";
import Scrollchor from 'react-scrollchor';
import { _AppConstants } from '../../index.constants';
import Slideshow from '../slideshow/Slideshow';
import Card from '../card/Card';
import './Home.css';


class Test extends Component {
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

  renderCard() {
    let items = this.state.recipes.map(recipe => {
      return ( 
        <div className="col-3">
          <Link
            style={{ textDecoration: 'none', color: 'black' }}
            key={recipe.id}
            to={{
              pathname: `/recipe/${recipe.id}`
            }}
          >
            <Card description={recipe.description} image={recipe.image} title={recipe.title}/>
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
        <div className="feed">
          <Scrollchor to="#feed" className="nav-link"><span className="carousel-control-prev-icon mess"></span></Scrollchor>
        </div>
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

export default Test;