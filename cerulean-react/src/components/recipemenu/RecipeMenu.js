import React, { Component } from 'react';
import { slide as Menu } from 'react-burger-menu'


class RecipeMenu extends Component {
	render() {
    return (
		<div>
		    <div>
		        <Menu>
		            <a id="home" className="menu-item" href="/">Home</a>
		            <a id="recipes" className="menu-item" href="/recipes">Recipes</a>
		            <a id="about" className="menu-item" href="/about">About</a>
		          </Menu>
		        Hi there
		    </div>
	    </div>
		);
	}
}

export default RecipeMenu;