import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { BrowserRouter as Route, Link, Redirect } from "react-router-dom";

import HamburgerNav from '../../components/hamburgernav/HamburgerNav';
import Hamburger from '../../components/hamburger/Hamburger';
import Footer from '../../components/footer/Footer';
import './RecipesByCategory.scss';


class RecipeMenu extends Component {
	render() {
    return (
  		<div>
        <HamburgerNav />
		    
        <Footer />
	    </div>
		);
	}
}

export default RecipeMenu;