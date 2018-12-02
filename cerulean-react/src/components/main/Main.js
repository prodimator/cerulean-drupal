import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Navigation from '../navigation/Navigation';
import Feed from '../feed/Feed';
import RecipeMenu from '../recipemenu/RecipeMenu';
import About from '../about/About';

class Main extends Component {
	render() {
    return (
		<div className="main">
			<div>
				<Navigation />
			    <div>
			    	<Route exact path="/" component={Feed}/>
					<Route path="/recipes" component={RecipeMenu}/>
					<Route path="/about" component={About}/>
			    </div>
		    </div>
	    </div>
		);
	}
}

export default Main;