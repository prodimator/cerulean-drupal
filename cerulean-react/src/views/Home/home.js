import React, { Component } from 'react';
import Nav from '../../components/nav/nav';
import NavMobile from '../../components/navMobile/navMobile';
import Splash from '../../components/splash/splash';
import RecipePreview from '../../components/recipePreview/recipePreview';
import Footer from '../../components/footer/footer';
import './home.scss';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: window.innerWidth
    };
  };

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
          <div className="recipe-row">
              <RecipePreview id='15' />
          </div>
          <div className="item">
            <RecipePreview id='13' />
          </div>
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
            <div className="recipe-row">
              <RecipePreview id='15' />
            </div>
            <div className="recipe-row">
              <RecipePreview id='11' />
            </div>
          </div>
          {/* <Footer /> */}
        </> 
      );
    }
  }
}