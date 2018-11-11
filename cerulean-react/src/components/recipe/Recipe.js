import React, { Component } from 'react';
import {_AppConstants} from '../../index.constants';
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
      image_header_url: '',
    }
  }

  componentDidMount() {
    fetch(_AppConstants.api + '/api/recipes?_format=json')
      .then((results) => {
        return results.json();
      }).then((data) => {
        this.setState({
          title: data[0].title,
          date: data[0].date,
          body_content: data[0].body_content,
          instructions: data[0].instructions,
          ingredients: data[0].ingredients,
          image_header_url: _AppConstants.api + data[0].image_header,
        });
        console.log(this.state.image_header_url);
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
        <header className="Recipe-header" style={{backgroundImage: `url(${this.state.image_header_url})`}} />
        <div className="recipe-post">
          <div className="recipe-title title-bold">
            {this.state.titleBold}
          </div>
          <div className="recipe-title title-slim">
            {this.state.titleSlim}
          </div>
          <div className="recipe-body" dangerouslySetInnerHTML={{ __html: this.state.body_content }} />
        </div>
      </div>
    );
  }
}

export default Recipe;
