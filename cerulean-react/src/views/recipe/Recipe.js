import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';

import { _AppConstants } from '../../index.constants';
import HamburgerNav from '../../components/hamburgernav/HamburgerNav';
import Hamburger from '../../components/hamburger/Hamburger';
import Footer from '../../components/footer/Footer';
import './Recipe.scss';


class Recipe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [],
      width: window.innerWidth
    };
  }

  componentWillMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }
  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };

  componentDidMount() {
    window.scrollTo(0, 0);
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
            image_header_url: recipe.image_3x2,
          });
        })
        this.setState({ recipes });
      })
  }

  render() {
    const { width } = this.state;
    const isMobile = width <= 500;

    let id = this.props.match.params.id;
    let recipe = this.state.recipes.reduce(function (current, recipe) {
      return id === current.id ? current : recipe;
    }, {});

    if (!recipe) return <div>Image not found</div>;

    if (!isMobile){
      return (
        <div>
          <HamburgerNav />
          <Row>
            <Col md={12} className="no-padding">
              <header className="recipe-header" style={{ backgroundImage: `url(${_AppConstants.api}${recipe.image_header_url})` }} />
            </Col>
          </Row>
          <Row center="md">
            <Col lg={9}>
              <div className="recipe-post">
                <Row middle="md" center="md" middle="sm" center="sm" className="pop-header">
                  <Col md>
                    <div className="title title-bold">
                      {recipe.title_bold}
                    </div>
                    <div className="title title-slim">
                      {recipe.title_slim}
                    </div>
                  </Col>
                </Row>
                <Row start="md">
                  <Col md>
                    <div className="recipe-body" dangerouslySetInnerHTML={{ __html: recipe.body_content }} />
                  </Col>
                </Row>
                <Row start="md" className="recipe-info">
                  <Col md={6} className="recipe-ingredients">
                    <h3>Ingredients</h3>
                    <div dangerouslySetInnerHTML={{ __html: recipe.ingredients }} />
                  </Col>
                  <Col md={6} className="recipe-instructions">
                    <h3>Instructions</h3>
                    <div dangerouslySetInnerHTML={{ __html: recipe.instructions }} />
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
          <Footer />
        </div>
      );
    }

    if (isMobile){
      return(
        <div className="mobile">
          <HamburgerNav />
          <Row>
            <Col>
              <img className="mobile-header-img" src={_AppConstants.api + recipe.image_header_url}></img>
            </Col>
          </Row>
          <Row center="xs" middle="xs">
            <Col xs={10}>
              <div className="title-mobile title-bold">
                {recipe.title_bold}
              </div>
              <div className="title-mobile title-slim">
                {recipe.title_slim}
              </div>
            </Col>
          </Row>
          <Row start="sm">
            <Col xs>
              <div className="recipe-body-mobile" dangerouslySetInnerHTML={{ __html: recipe.body_content }} />
            </Col>
          </Row>
          <Row start="sm" className="recipe-info-mobile">
            <Col md={10}>
              <h3>Ingredients</h3>
              <div dangerouslySetInnerHTML={{ __html: recipe.ingredients }} />
            </Col>
            <Col md={10}>
              <h3>Instructions</h3>
              <div dangerouslySetInnerHTML={{ __html: recipe.instructions }} />
            </Col>
          </Row>
        </div>
        
      )
    }
  }
}

export default Recipe;