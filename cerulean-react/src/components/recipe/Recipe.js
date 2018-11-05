import React, { Component } from 'react';
import './Recipe.css';

class Recipe extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      date: '',
      blog_content: '',
      instructions: [],
      ingredients: [],
      titleBold: '',
      titleSlim: '',
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
        this.splitTitle();
      })
  }
  
  splitTitle = () => {
    var parsedTitle = this.state.title.split(' ');
    this.setState({
      titleBold: parsedTitle[0]+parsedTitle[1],
      titleSlim: parsedTitle[2]
    });
  }

  render() {
    return (
      <div>
        <header className="Recipe-header" />
        <div className="recipe-post">
          <div className="recipe-title title-bold">
            {this.state.titleBold}
          </div>
          <div className="recipe-title title-slim">
            {this.state.titleSlim}
          </div>
          <div className="recipe-body" dangerouslySetInnerHTML={{ __html: this.state.body_content }} />
          <h3>Ingredients</h3>
          <div className="recipe-body" dangerouslySetInnerHTML={{ __html: this.state.ingredients }} />
          <h3>Instructions</h3>
          <div className="recipe-body" dangerouslySetInnerHTML={{ __html: this.state.instructions }} />
        </div>
      </div>
    );
  }
}

export default Recipe;
