import React, { Component } from 'react';
import Nav from '../../components/nav/nav';
import Splash from '../../components/splash/splash';
import RecipePreview from '../../components/recipePreview/recipePreview';
import Footer from '../../components/footer/footer';
import './home.scss';

export default class App extends Component {
  // constructor(props) {
  //   super(props);
  // };

  render() {
    return (
      <div className="Home">
        <Nav />
        <Splash />

        <div className="recipe-row">
          <div className="item">
            <RecipePreview id='13' />
          </div>
          <div className="item">
            <RecipePreview id='12' />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}