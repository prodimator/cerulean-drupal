import React, { Component } from 'react';
import { BrowserRouter as Route, Link } from "react-router-dom";
import './Navigation.css';

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
            </div>
            <div className="col-container col-4 nav-social">
              <div>Social media icons</div>
            </div>
          </div>
      </div>
    );
  }
}

export default Nav;
