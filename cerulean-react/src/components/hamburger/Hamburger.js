import React, { Component } from 'react';
import { slide as Menu } from 'react-burger-menu';
import './Hamburger.css';

class Hamburger extends Component {
	render() {
	    return (
			<div>
				<Menu>
		          <a id="home" className="menu-item" href="/">Home</a>
		          <a id="recipes" className="menu-item" href="/recipes">Recipes</a>
		          <a id="about" className="menu-item" href="/about">About</a>
		          <a id="contact" className="menu-item" href="/contact">Contact</a>
		        </Menu>
	     	</div>
	    )
	}
}

export default Hamburger;