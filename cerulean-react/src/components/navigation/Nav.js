import React, { Component } from 'react';
import { BrowserRouter as Route, Link } from "react-router-dom";
import './Navigation.css';

class Nav extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
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
            <div className="nav-about">ABOUT</div>
          </div>
          <div className="col-container col-4 nav-home">
            <div>LAPA</div>
          </div>
          <div className="col-container col-4">
            <div>Social media icons</div>
          </div>
        </div>
        <div className="row custom-nav nav-search">Search
        </div>
      </div>
    );
  }
}

export default Nav;
