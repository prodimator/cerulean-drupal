import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Navigation from '../navigation/Navigation';
import Home from '../home/Home';
import Recipe from '../recipe/Recipe';

class Main extends Component {
	render() {
    return (
		<div className="Main">
			<div>
			    <Navigation />
			    <div>
			    	<Route exact path="/" component={Home}/>
			    	<Route path="/recipes" component={Recipe}/>
			    </div>
		    </div>
	    </div>
		);
	}
}

export default Main;