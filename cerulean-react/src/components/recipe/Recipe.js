import React, { Component } from 'react';
import Navigation from '../navigation/Navigation';
import './Recipe.css';

class Recipe extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      date: '',
      blog_content: '',
      instructions: [],
      ingredients: []
    }
  }

  componentDidMount() {
    fetch('http://35.199.10.212/api/recipes?_format=json')
      .then((results) => {
        return results.json();
      }).then((data) => {
        this.setState({
          title: data[0].title,
          date: data[0].date,
          body_content: data[0].body_content,
          instructions: data[0].instructions,
          ingredients: data[0].ingredients
         });

      })
  }

  render() {
    return (
      <div>
        <Navigation />
        <header className="Recipe-header">
          <img src='https://via.placeholder.com/350x150' className="Recipe-img" alt="" />
        </header>
        <div className="flex-container">
          <div className="recipe-post">
            <div dangerouslySetInnerHTML={{ __html: this.state.body_content }} />
          </div>
        </div>
      </div>
    );
  }
}

export default Recipe;
