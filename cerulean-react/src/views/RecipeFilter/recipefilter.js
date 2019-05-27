import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import NavSmall from '../../components/navSmall/navSmall';
import NavMobile from '../../components/navMobile/navMobile';
import FooterSmall from '../../components/footerSmall/footerSmall';
import RecipePreview from '../../components/recipePreview/recipePreview';
import * as CONSTANTS from '../../Constants';
import axios from 'axios';

import './recipefilter.scss';

export default class RecipeFilter extends Component {
	constructor(props) {
		super(props);
		this.state = {
			filter: this.props.match.params.filter,
			recipes: [],
			error: null,
			width: window.innerWidth,
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
			.catch(error => {
				this.setState({ error });
				console.log("There was an error!");
			})
	}

	componentWillMount = () => {
		window.addEventListener('resize', this.handleWindowSizeChange);
	}
	componentWillUnmount = () => {
		window.removeEventListener('resize', this.handleWindowSizeChange);
	}
	handleWindowSizeChange = () => {
		this.setState({ width: window.innerWidth });
	};

	isResults = () => {
		if (this.state.error) {
			return (
				<h3>No results found</h3>
			);
		}
		else {
			return (
				<div className="row">
					{this.state.recipes.map((recipe, index) => (
						<div className="item" key={index}>
							<RecipePreview id={recipe.id} />
						</div>
					))}
				</div>
			);
		}
	}

	render() {

		const { width } = this.state;
		const isMobile = width <= 650;
		if (!isMobile) {
			return (
				<>
					<NavSmall />
					<div className="recipe-filtered">
						<div className="results">
							<p className="search nexaLight">your search results for</p>
							<p className="query canvas">{this.state.filter}</p>
							{this.isResults()}
						</div>
					</div>
					<FooterSmall />
				</>
			);
		}
		else {
			return (
				<div className="recipe-filtered-mobile">
					<NavMobile />
					Recipe Filtered!
					</div>
			);
		}

	}
}