import React, { Component } from "react";
import { Row, Col } from 'react-flexbox-grid';
import { BrowserRouter as Route, Link } from "react-router-dom";
import Scrollchor from 'react-scrollchor';
import { _AppConstants } from '../../index.constants';
import Slideshow from '../slideshow/Slideshow';
import HamburgerNav from '../hamburgernav/HamburgerNav';
import Card from '../card/Card';
import FancyCard from '../fancycard/FancyCard';
import Footer from '../footer/Footer';
import './Feed.css';


class Feed extends Component {
  constructor() {
    super();
    this.state = {
      recipes: [],
      feedYOffset: ''
    };
    this.scrollToTop = this.scrollToTop.bind(this);
  }

  mouseScroll(e){
    e.preventDefault();
    if (window.pageYOffset < this.state.feedYOffset){
      let elmnt = document.getElementById("feed");
      elmnt.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }
  keyScroll(e) {
    if (e.key === 'ArrowDown' && window.pageYOffset < this.state.feedYOffset){
      e.preventDefault();
      let elmnt = document.getElementById("feed");
      elmnt.scrollIntoView({behavior: "smooth", block: "start"});
    }
  }


  componentDidMount() {
    window.scrollTo(0, 0);
    window.addEventListener("keydown", this.keyScroll.bind(this));
    //window.addEventListener("scroll", this.mouseScroll.bind(this));

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
        this.setState({
          recipes: recipes,
          feedYOffset: document.getElementById('feed').getBoundingClientRect().top
        });
      })
  }
  
  componentWillUnmount() {
    window.removeEventListener("keypress", this.keyScroll.bind(this));
  }

  renderCard() {
    let columns=[];
    let cards = this.state.recipes.slice(4, 7);
    cards.map((recipe,idx) => {
      columns.push(
        <div className="col-4" key={idx}>
          <Link
            key={recipe.id}
            to={{
              pathname: `/recipe/${recipe.id}`
            }}
          >
          <Card description={recipe.description} image={recipe.image_3x4} title={recipe.title} date={recipe.date} id={recipe.id}/>
          </Link>
        </div>
      )

      // every 4 columns, force wrap to next line
      if ((idx+1)%4===0) {columns.push(<div className="w-100"></div>)}

      return columns;
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

  scrollToTop() {
    if (window.history.replaceState) {
       window.history.replaceState({}, '/', '/');
    }
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
          
          <Row center="md" className="fancy-div">
            <Col md={9}>
              {fancysection}
            </Col>
          </Row>
          <Row center="md" className="card-div">
            <Col md={9}>
              {this.renderCard()}
            </Col>
          </Row>
        </div>
        <div onClick={this.scrollToTop}>
          <Scrollchor to="" className="nav-link scroll-top">BACK TO TOP</Scrollchor>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Feed;