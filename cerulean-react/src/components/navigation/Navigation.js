import React, { Component } from 'react';
import { BrowserRouter as Route, Link } from "react-router-dom";
import './Navigation.css';

import FbIcon from '../../svg/facebook.svg';
import InstaIcon from '../../svg/instagram.svg';
import TwitterIcon from '../../svg/twitter.svg';


class Nav extends Component {
  render() {
    return (
      <div>
        <div className="row custom-nav">
            <div className="col-container col-4 nav-headers">
              <div className="nav-recipes">
                <Link
                  style={{ textDecoration: 'none', color: 'white' }}
                  to="/recipes"
                >
                  RECIPES
                </Link>
              </div>
              <div className="nav-about">
                <Link
                  style={{ textDecoration: 'none', color: 'white' }}
                  to="/about"
                >
                  ABOUT
                </Link>
              </div>
            </div>
            <div className="col-container col-4 nav-home">
              <Link
                style={{ textDecoration: 'none', color: 'white' }}
                to="/"
              >
                LAPA
              </Link>
              <div className="nav-search">Search</div>
            </div>
            <div className="col-container col-4 nav-social">
              <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/lapa.eats/">
                <img src={FbIcon} className="social-icon" alt="Facebook icon"/>
              </a>
              <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/lapa.eats/">
                <img src={InstaIcon} className="social-icon" alt="Instagram icon"/>
              </a>
              <a target="_blank" rel="noopener noreferrer" href="http://www.google.com">
                <img src={TwitterIcon} className="social-icon" alt="Twitter icon"/>
              </a>
            </div>
          </div>
      </div>
    );
  }
}

export default Nav;
