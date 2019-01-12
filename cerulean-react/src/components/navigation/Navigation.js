import React, { Component } from 'react';
import { BrowserRouter as Route, Link, Redirect } from "react-router-dom";
import { Grid, Row, Col } from 'react-flexbox-grid';

import { _AppConstants } from '../../index.constants';
import './Navigation.css';

import MailIcon from '../../svg/mail.svg';
import FbIcon from '../../svg/facebook.svg';
import InstaIcon from '../../svg/instagram.svg';
import LogoHeader from '../../images/logo_header.png';


class Search extends Component {

  constructor(props) {
    super(props);

    this.state = {
      // The active selection's index
      activeSuggestion: 0,
      // The suggestions that match the user's input
      filteredSuggestions: [],
      // Whether or not the suggestion list is shown
      showSuggestions: false,
      // What the user has entered
      userInput: "",
      recipes: [],
      suggestions: [],
      id: 0,
      redirect: false,
    };
  }

  componentDidMount() {
    fetch(_AppConstants.api + '/api/recipes?_format=json')
      .then((results) => {
        return results.json();
      }).then((data) => {
        let recipes = data.map(recipe => {
          return ({
            id: recipe.id,
            title: recipe.title
          });
        })
        this.setState({recipes});
      })
  }

  onKeyDown = e => {
    const { activeSuggestion, filteredSuggestions } = this.state;

    // User pressed the enter key, update the input and close the
    // suggestions
    if (e.keyCode === 13) {
      console.log("dont ignore me");
      this.setState({
        activeSuggestion: 0,
        showSuggestions: false,
        userInput: filteredSuggestions[activeSuggestion],
        redirect: true,
      });
      this.state.recipes.map((recipe) => {
        console.log("how many times are we gonna have to do this");
        console.log(recipe.title);
        console.log(this.state.userInput);
        if (recipe.title === this.state.userInput) {
          console.log(recipe.id);
          this.setState({
            id: recipe.id
          });
        }
      });
      console.log("wow hello there");
      console.log(this.state.userInput);
    }
    // User pressed the up arrow, decrement the index
    else if (e.keyCode === 38) {
      if (activeSuggestion === 0) {
        return;
      }

      this.setState({ activeSuggestion: activeSuggestion - 1 });
    }
    // User pressed the down arrow, increment the index
    else if (e.keyCode === 40) {
      if (activeSuggestion - 1 === filteredSuggestions.length) {
        return;
      }

      this.setState({ activeSuggestion: activeSuggestion + 1 });
    }
  };

  onChange = e => {
    const userInput = e.currentTarget.value;

    console.log(this.state.recipes);
    let input = [];
    this.state.recipes.map((recipe) => {
      input.push(recipe.title);
    });
    console.log(input);
    this.setState({
      suggestions: input
    });
    console.log("what do you know now");
    console.log(this.state.suggestions);
    // Filter out suggestions that don't contain the user's input
    const filteredSuggestions = this.state.suggestions.filter(
      suggestion =>
        suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1
    );

    // Update the user input and filtered suggestions, reset the active
    // suggestion and make sure the suggestions are shown
    this.setState({
      activeSuggestion: 0,
      filteredSuggestions,
      showSuggestions: true,
      userInput: e.currentTarget.value
    });
  };

  onClick = e => {
    // Update the user input and reset the rest of the state
    this.setState({
      activeSuggestion: 0,
      filteredSuggestions: [],
      showSuggestions: false,
      userInput: e.currentTarget.innerText
    });
  };

  clearSelection = e => {
    this.setState({
      userInput: ""
    });
  }

  render() {
    const {
      onChange,
      onClick,
      onKeyDown,
      clearSelection,
      state: {
        activeSuggestion,
        filteredSuggestions,
        showSuggestions,
        userInput = "",
      }
    } = this;

    let suggestionsListComponent;

    if (showSuggestions && userInput) {
      if (filteredSuggestions.length) {
        suggestionsListComponent = (
          <ul className="suggestions">
            {filteredSuggestions.map((suggestion, index) => {
              let className;

              // Flag the active suggestion with a class
              if (index === activeSuggestion) {
                className = "suggestion-active";
              }

              return (
                <li
                  className={className}
                  key={suggestion}
                  onClick={onClick}
                >
                  {suggestion}
                </li>
              );
            })}
          </ul>
        );
      } else {
        suggestionsListComponent = (
          <div className="no-suggestions">
            <em>Yikes, no results found!</em>
          </div>
        );
      }
    }

    console.log("here is your darn input");
    console.log(userInput);
    console.log(this.state.id);

    return (
      <div>
        <div className="row custom-nav">
            <div className="col-container col-4 nav-headers">
              <div className="nav-recipes">
                <Link className="navigation-link"
                  to="/recipes"
                >
                  RECIPES
                </Link>
              </div>
              <div className="nav-about">
                <Link className="navigation-link"
                  to="/about"
                >
                  ABOUT
                </Link>
              </div>
              <div className="nav-contact">
                <Link className="navigation-link"
                  to="/contact"
                >
                  CONTACT
                </Link>
              </div>
            </div>
            <div className="col-container col-4 nav-home">
              <Link className="navigation-link"
                to="/"
              >
                <img src={LogoHeader} className="logo-header" alt="Logo header"/>
              </Link>
              <form className="search-form">
                <div>
                  <input
                    className="search-box"
                    placeholder="SEARCH"
                    type="text"
                    value={userInput}
                    onKeyDown={onKeyDown}
                    onChange={onChange}
                  />
                  <button className="close-icon" type="reset" onClick={clearSelection}></button>
                </div>
              </form>
              {this.state.redirect &&
                <Redirect to={{
                  pathname: `/recipe/${this.state.id}`
                }}/>
              }
              {suggestionsListComponent}
            </div>
            <div className="col-container col-4 nav-social">
              <a target="_blank" rel="noopener noreferrer" href="http://www.google.com">
                <img src={MailIcon} className="social-icon" alt="Mail icon"/>
              </a>
              <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/lapa.eats/">
                <img src={FbIcon} className="social-icon" alt="Facebook icon"/>
              </a>
              <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/lapa.eats/">
                <img src={InstaIcon} className="social-icon" alt="Instagram icon"/>
              </a>
            </div>
          </div>
      </div>
    );
  }
}

export default Search;
