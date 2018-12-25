import React, { Component } from "react";
import { Grid, Row, Col } from 'react-flexbox-grid';
import { BrowserRouter as Route, Link } from "react-router-dom";
import Scrollchor from 'react-scrollchor';
import { slide as Menu } from 'react-burger-menu'
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
    let columns=[];
    this.state.recipes.map((recipe,idx) => {

      columns.push(
          <div className="col-3" key={idx}>
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

      // force wrap to next row every 4 columns
      if ((idx+1)%4===0) {columns.push(<div className="w-100"></div>)}
    });


    return (
      <div className="row">
      {columns}
      </div>
    )
  }

  renderFancyCard() { 
    let img_one = this.state.recipes[0].id;
    let img_two = this.state.recipes[1].id;
    let img_three = this.state.recipes[2].id;
    let img_four = this.state.recipes[3].id;
    return (
      <Row center="md">
        <Col md={6} className="fancy-col">
          <Link
            key={img_one}
            to={{
              pathname: `/recipe/${img_one}`
            }}
          >
            <FancyCard description={this.state.recipes[0].description} image={this.state.recipes[0].image_1x1} title_bold={this.state.recipes[0].title_bold} title_slim={this.state.recipes[0].title_slim}/>
          </Link>
        </Col>
        <Col md={6}>
          <Row>
            <Col md={6} className="fancy-col">
              <Link
                key={img_two}
                to={{
                  pathname: `/recipe/${img_two}`
                }}
              >
                <FancyCard description={this.state.recipes[1].description} image={this.state.recipes[1].image_1x1} title_bold={this.state.recipes[1].title_bold} title_slim={this.state.recipes[1].title_slim}/>
              </Link>
            </Col>
            <Col md={6} className="fancy-col">
              <Link
                key={img_three}
                to={{
                  pathname: `/recipe/${img_three}`
                }}
              >
                <FancyCard description={this.state.recipes[2].description} image={this.state.recipes[2].image_1x1} title_bold={this.state.recipes[2].title_bold} title_slim={this.state.recipes[2].title_slim}/>
              </Link>
            </Col>
          </Row>
          <Row>
            <Col md={12} className="fancy-col">
              <Link
                key={img_four}
                to={{
                  pathname: `/recipe/${img_four}`
                }}
              >
                <FancyCard description={this.state.recipes[3].description} image={this.state.recipes[3].image_2x1} title_bold={this.state.recipes[3].title_bold} title_slim={this.state.recipes[3].title_slim}/>
              </Link>
            </Col>
          </Row>
        </Col>
      </Row>
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
        <Menu burgerButtonClassName={ "recipe-burger" }>
          <a id="home" className="menu-item" href="/">Home</a>
          <a id="recipes" className="menu-item" href="/recipes">Recipes</a>
          <a id="about" className="menu-item" href="/about">About</a>
        </Menu>
        <Slideshow/>
        <div className="cards" id="feed">
          <HamburgerNav/>
          <div className="row-container">
            {fancysection}
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