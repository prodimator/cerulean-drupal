import React, { Component } from 'react';

import HamburgerNav from '../../components/hamburgernav/HamburgerNav';
import Hamburger from '../../components/hamburger/Hamburger';


class RecipeMenu extends Component {
	render() {
    return (
  		<div>
        <Hamburger />
        <HamburgerNav />
		    Recipe categories in progress here
	    </div>
		);
	}
}

export default RecipeMenu;