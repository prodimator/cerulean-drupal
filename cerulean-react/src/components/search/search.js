import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, withRouter } from "react-router-dom";
import * as CONSTANTS from '../../Constants';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

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
				<form className="search-form" onSubmit={this.onSearch}>
					<input
					type="text"
					value={this.state.searchString}
					ref="search"
					onChange={this.handleChange}
					placeholder="Search for something"
					/>
					<FontAwesomeIcon className="search-icon" icon={faSearch} onClick={this.onSearch} />
				</form>
			</div>

		);
	}
}

export default withRouter(Search);
