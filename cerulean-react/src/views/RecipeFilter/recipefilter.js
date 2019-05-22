import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import * as CONSTANTS from '../../Constants';
import axios from 'axios';

import './recipefilter.scss';

export default class RecipeFilter extends Component {
    constructor(props) {
	    super(props);
	    this.state = {
	    	filter: this.props.match.params.filter,
	    	recipes: []
	    };
	}

	componentDidMount() {
		axios.get(CONSTANTS.BASE_URL + '/api/taxonomy/' + `${this.state.filter}` + '?_format=json')
			.then(res => {
				let recipes = res.data.map(recipe => {
		    		return ({
		    			id: recipe.id,
						title: recipe.title
					})
		    	})
		    	this.setState({
		    		recipes: recipes
		    	});
			})
	}

	render() {
		return (
			<div>
				<h3>Your search results:</h3>
				{this.state.recipes.map((recipe, index) => (
					<div key={index}>
						{recipe.title}
					</div>
				))}
			</div>

		);
	}
}
