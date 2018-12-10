import React, { Component } from 'react';
import { BrowserRouter as Route, Link } from "react-router-dom";
import { slide as Menu } from 'react-burger-menu'
import './HamburgerNav.css';

class HamburgerNav extends Component {
	render() {
    return (
		  <div className="hamburger-nav">
          <Menu>
            <a id="home" className="menu-item" href="/">Home</a>
            <a id="recipes" className="menu-item" href="/recipes">Recipes</a>
            <a id="about" className="menu-item" href="/about">About</a>
          </Menu>
          LAPA
      </div>
    )
	}
}

export default HamburgerNav;