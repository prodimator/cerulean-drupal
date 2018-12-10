import React, { Component } from "react";
import { BrowserRouter as Route, Link } from "react-router-dom";
import Scrollchor from 'react-scrollchor';
import { _AppConstants } from '../../index.constants';
import Slideshow from '../slideshow/Slideshow';
import HamburgerNav from '../hamburgernav/HamburgerNav';
import Card from '../card/Card';
import FancyCard from '../fancycard/FancyCard';
import './Feed.css';


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
            image_1x1: recipe.image_1x1,
            image_2x1: recipe.image_2x1,
            image_3x2: recipe.image_3x2,
            image_3x4: recipe.image_3x4
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
            <Card description={recipe.description} image={recipe.image_3x4} title_bold={recipe.title_bold} title_slim={recipe.title_slim}/>
          </Link>
        </div>
      );
    });
    return items;
  }

  renderFancyCard() { 
    let img_one = this.state.recipes[0].id;
    let img_two = this.state.recipes[1].id;
    let img_three = this.state.recipes[2].id;
    let img_four = this.state.recipes[3].id;
    return (
      <div className="fancy-card-container">
        <div className="col-6">
          <Link
            key={img_one}
            to={{
              pathname: `/recipe/${img_one}`
            }}
          >
            <FancyCard description={this.state.recipes[0].description} image={this.state.recipes[0].image_1x1} title_bold={this.state.recipes[0].title_bold} title_slim={this.state.recipes[0].title_slim}/>
          </Link>
        </div>
        <div className="col-6 fancy-column-2">
          <div className="fancy-row-1">
            <div className="col-6">
               <Link
                key={img_two}
                to={{
                  pathname: `/recipe/${img_two}`
                }}
              >
                <FancyCard description={this.state.recipes[1].description} image={this.state.recipes[1].image_1x1} title_bold={this.state.recipes[1].title_bold} title_slim={this.state.recipes[1].title_slim}/>
              </Link>
            </div>
            <div className="col-6">
               <Link
                key={img_three}
                to={{
                  pathname: `/recipe/${img_three}`
                }}
              >
                <FancyCard description={this.state.recipes[2].description} image={this.state.recipes[2].image_1x1} title_bold={this.state.recipes[2].title_bold} title_slim={this.state.recipes[2].title_slim}/>
              </Link>
            </div>
          </div>
          <div className="fancy-row-2">
            <div>
               <Link
                key={img_four}
                to={{
                  pathname: `/recipe/${img_four}`
                }}
              >
                <FancyCard description={this.state.recipes[3].description} image={this.state.recipes[3].image_2x1} title_bold={this.state.recipes[3].title_bold} title_slim={this.state.recipes[3].title_slim}/>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  render() {
    let fancysection;
    if (this.state.recipes.length > 0) {
      fancysection = this.renderFancyCard()
    }
    else {
      fancysection = <div>Loading...</div>
    }
    return (
      <div>
        <Slideshow/>
        <div className="cards" id="feed">
          <HamburgerNav/>
          <div className="row-container">
            {fancysection}
          </div>
          <div className="row-container">
            {this.renderCard()}
          </div>
          <div className="row-container">
            {this.renderCard()}
          </div>
        </div>
        <Scrollchor to="" className="nav-link scroll-top">BACK TO TOP</Scrollchor>
      </div>
    );
  }
}

export default Feed;