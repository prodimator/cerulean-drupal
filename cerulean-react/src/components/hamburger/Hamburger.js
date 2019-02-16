import React, { Component } from 'react';
import { slide as Menu } from 'react-burger-menu';
import './Hamburger.scss';

class Hamburger extends Component {
	render() {
	    return (
			<div>
				<Menu>
		          <a id="home" href="/">Home</a>
		          <a id="recipes" href="/recipes">Recipes</a>
		          <a id="about" href="/about">About</a>
		          <a id="contact" href="/contact">Contact</a>
		        </Menu>
	     	</div>
	    )
	}
}

export default Hamburger;