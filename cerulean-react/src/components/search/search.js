import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, withRouter } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

import './search.scss';

class Search extends Component {
    constructor(props) {
	    super(props);
	    this.state = {
	    	searchString: "",
			visible: 'hide',
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
		if (this.state.visible === 'hide'){
			this.toggleMenu();
			document.getElementById("search").focus();
		}
		else if (this.state.visible === 'show' && this.state.searchString === "") {
			this.toggleMenu();
		}
		else{
			//this.toggleMenu();
			this.props.history.push(`/results/${this.state.searchString}`)
		}
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

	render() {
		return (
			<div>
				<form className="search-form" onSubmit={this.onSearch}>
					<input 
					className={`search ${this.state.visible}`}
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

export default withRouter(Search);
