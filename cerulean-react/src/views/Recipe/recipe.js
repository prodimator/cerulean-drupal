import React, { Component } from 'react';
import * as CONSTANTS from '../../Constants';
import NavSmall from '../../components/navSmall/navSmall';
import Footer from '../../components/footer/footer';
import axios from 'axios';
import './recipe.scss';

export default class Recipe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id,
      title: '',
      description: '',
      content: '',
      ingredients: '',
      instructions: '',
      img: '',
    };
  };

  componentDidMount() {
    axios.get(`http://35.199.10.212/api/recipes?_format=json&id=${this.state.id}`)
      .then(res => {
        console.log(res.data);
        this.setState({
          title: res.data[0].title,
          description: res.data[0].description,
          content: res.data[0].body_content,
          ingredients: res.data[0].ingredients,
          instructions: res.data[0].instructions,
          img: CONSTANTS.BASE_URL + res.data[0].image_3x4,
        });
      })
  }

  createContentMarkup = () => {
    return { __html: this.state.content };
  }

  render() {
    return (
      <div className="recipe">
        <div className="recipe-left">
          <NavSmall />
          <div className="recipe-content">
            <p className="title canvas">{this.state.title}</p>
            <div className="content" dangerouslySetInnerHTML={this.createContentMarkup()} />
            <div start="md" className="recipe-info">
              <div className="recipe-ingredients">
                <span className="info-title canvas">Ingredients</span>
                <div dangerouslySetInnerHTML={{ __html: this.state.ingredients }} />
              </div>
              <div className="recipe-instructions">
                <span className="info-title canvas">Instructions</span>
                <div dangerouslySetInnerHTML={{ __html: this.state.instructions }} />
              </div>
            </div>
          </div>
          <Footer />
        </div>
        <div className="recipe-right">
          <img src={this.state.img} alt="Recipe" />
        </div>
      </div>
      // <div className="recipe">
      //   <Nav />
      //   <div className="recipe-container">
      //     <img src={this.state.img} alt="Recipe" />
      //     <div className="recipe-content">
      //       <div className="title nexaBold">{this.state.title}</div>
      //       <div className="content" dangerouslySetInnerHTML={this.createContentMarkup()} />
      //     </div>
      //   </div>
      //   <Footer />
      // </div>
    );
  }
}