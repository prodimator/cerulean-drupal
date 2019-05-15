import React, { Component } from 'react';
import Nav from '../../components/nav/nav';
import NavMobile from '../../components/navMobile/navMobile';
import Splash from '../../components/splash/splash';
import RecipePreview from '../../components/recipePreview/recipePreview';
import Footer from '../../components/footer/footer';
import * as CONSTANTS from '../../Constants';
import axios from 'axios';
import './home.scss';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [],
      width: window.innerWidth
    };
  };

  componentDidMount() {
    axios.get(CONSTANTS.BASE_URL + '/api/recipes?_format=json&items_per_page=5')
      .then(res => {
        let recipes = res.data.map(recipe => {
          return ({
            id: recipe.id,
            title: recipe.title,
            description: recipe.description,
            content: recipe.body_content,
            date: recipe.date,
            img: CONSTANTS.BASE_URL+recipe.image_1x1,
          })
        })
        this.setState({
            recipes: recipes
        });
      })
  }

  componentWillMount = () =>{
    window.addEventListener('resize', this.handleWindowSizeChange);
  }
  componentWillUnmount = () =>{
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }
  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };

  render() {
    const { width } = this.state;
    const isMobile = width <= 650;

    if (!isMobile) {
      return (
        <>
        <div className="home">
          <Nav />
          <Splash />
          <div className="latest">
              <span className="bar" />
              <div className="latest canvas">Latest</div>   
              <span className="bar" />
          </div>
          {this.state.recipes.map((recipe, index) => (
            <div className="recipe-row item" key={index}>
              <RecipePreview id={recipe.id} />
            </div>
          ))}
        </div>
        <Footer />
        </>
      );
    }
    else{
      return(
        <>
          <div className="mobile-home">
            <NavMobile />
            {this.state.recipes.map((recipe, index) => (
              <div className="recipe-row item" key={index}>
                <RecipePreview id={recipe.id} />
              </div>
            ))}
          </div>
          {/* <Footer /> */}
        </> 
      );
    }
  }
}