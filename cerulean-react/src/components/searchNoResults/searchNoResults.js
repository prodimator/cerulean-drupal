import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, withRouter } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

import './searchNoResults.scss';

class SearchNoResults extends Component {
    constructor(props) {
	    super(props);
	    this.state = {
	    	searchString: ""
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
		if (this.state.searchString !== "") {
			this.props.history.push(`/results/${this.state.searchString}`)
			// The page has to reload to understand that a new searchstring was inputted
			// hopefully there's some other way to do
			window.location.reload();
		}
	}

	render() {
		return (
			<div>
				<form className="search-form" onSubmit={this.onSearch}>
					<input 
					className="search-bar"
					id="search"
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

export default withRouter(SearchNoResults);
