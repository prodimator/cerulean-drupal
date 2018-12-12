import React, { Component } from 'react';
import { BrowserRouter as Route, Link } from "react-router-dom";
import './HamburgerNav.css';

class HamburgerNav extends Component {
	render() {
    return (
		  <div className="hamburger-nav">
        <Link className="hamburger-nav-link" to='/'>
          LAPA
        </Link>
      </div>
    )
	}
}

export default HamburgerNav;