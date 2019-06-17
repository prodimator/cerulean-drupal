import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, withRouter } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

import './searchMobile.scss';

class SearchMobile extends Component {
    constructor(props) {
	    super(props);
	    this.state = {
	    	searchString: "",
			visible: 'hide',
	    };
	}

	toggleMenu = () => {
		if (this.state.visible === 'show') {
			this.setState({
				visible: 'hide'
			});
		}
		if (this.state.visible === 'hide') {
			this.setState({
				visible: 'show'
			});
		}
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
		this.props.history.push(`/results/${this.state.searchString}`);
	}

	render() {
		return (
			<div>
				<FontAwesomeIcon className="search-icon" icon={faSearch} onClick={this.toggleMenu} />
				<form className={`search-mobile-form ${this.state.visible}`} onSubmit={this.onSearch}>
					<FontAwesomeIcon className="close" icon={faTimes} onClick={this.toggleMenu} />
					<div className="search-container">
						<h1>Discover</h1>
						<input id="search" 
							type="text"
							value={this.state.searchString}
							ref="search"
							onChange={this.handleChange}
							placeholder="Search for something" />
					</div>
				</form>
			</div>

		);
	}
}

export default withRouter(SearchMobile);