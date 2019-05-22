import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, withRouter } from "react-router-dom";
import * as CONSTANTS from '../../Constants';
import axios from 'axios';

import './search.scss';

class Search extends Component {
    constructor(props) {
	    super(props);
	    this.state = {
	    	searchString: "",
	    	recipes: [],
	    	tags: [],
	    };
	}

	handleChange = () => {
	    this.setState({
	    	searchString: this.refs.search.value
	    });
	}

	clearForm = () => {
		this.setState({
			searchString: ""
		});
		this.refs.search.focus();
	}

	onSearch = (e) => {
		e.preventDefault();
		console.log(this.state.searchString);
		this.props.history.push(`/results/${this.state.searchString}`)
  	}

	render() {
		return (
			<div>
				<form onSubmit={this.onSearch}>
					<input
					type="text"
					value={this.state.searchString}
					ref="search"
					onChange={this.handleChange}
					placeholder="type something here"
					/>
                    <button type="submit" onClick={this.onSearch}>
                    	Enter
					</button>
				</form>
			</div>

		);
	}
}

export default withRouter(Search);
