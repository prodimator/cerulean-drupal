import React, { Component } from 'react';
import * as CONSTANTS from '../../Constants';
import Nav from '../../components/nav/nav';
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
          img: CONSTANTS.BASE_URL + res.data[0].image_3x2,
        });
      })
  }

  createContentMarkup = () => {
    return { __html: this.state.content };
  }

  render() {
    return (
      <div className="recipe">
        <Nav />
        <div className="recipe-container">
          <img src={this.state.img} alt="Recipe" />
          <div className="recipe-content">
            <div className="title nexaBold">{this.state.title}</div>
            <div className="content" dangerouslySetInnerHTML={this.createContentMarkup()} />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}