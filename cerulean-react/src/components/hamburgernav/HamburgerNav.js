import React, { Component } from 'react';
import { BrowserRouter as Route, Link } from "react-router-dom";
import SearchIcon from '../../svg/search.svg';
import './HamburgerNav.css';

class HamburgerNav extends Component {
	render() {
    return (
      <div className="hamburger-nav">
        <Link className="hamburger-nav-link" to='/'>
          LAPA
        </Link>
        <img src={SearchIcon} className="search-icon" alt="Search icon"/>
      </div>
    )
	}
}

export default HamburgerNav;