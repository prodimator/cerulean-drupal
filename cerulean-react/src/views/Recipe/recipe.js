import React, { Component } from 'react';
import * as CONSTANTS from '../../Constants';
import NavSmall from '../../components/navSmall/navSmall';
import NavMobile from '../../components/navMobile/navMobile';
import FooterSmall from '../../components/footerSmall/footerSmall';
import axios from 'axios';
import './recipe.scss';

export default class Recipe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      title: this.props.match.params.title,
      date: '',
      description: '',
      content: '',
      ingredients: '',
      instructions: '',
      img: '',
      width: window.innerWidth
    };
  };

  componentDidMount() {
    axios.get(`http://35.199.10.212/api/recipes?_format=json&title=${this.state.title}`)
      .then(res => {
        this.setState({
          title: res.data[0].title,
          date: res.data[0].date,
          description: res.data[0].description,
          content: res.data[0].body_content,
          ingredients: res.data[0].ingredients,
          instructions: res.data[0].instructions,
          img: CONSTANTS.BASE_URL + res.data[0].image_3x4,
        });
      })
  }

  componentWillMount = () => {
    window.addEventListener('resize', this.handleWindowSizeChange);
  }
  componentWillUnmount = () => {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }
  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };

  createContentMarkup = () => {
    return { __html: this.state.content };
  }

  render() {

    const { width } = this.state;
    const isMobile = width <= 650;

    if (!isMobile) {
      return (
        <div className="recipe">
          <div className="recipe-left">
            <NavSmall />
            <div className="recipe-content">
              <p className="title canvas">{this.state.title}</p>
              <div className="date">{this.state.date}</div>
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
              <div className="tag-us">
                Did you try out this recipe? Tag @lapa.eats on Instagram
              </div>
            </div>
            <FooterSmall />
          </div>
          <div className="recipe-right">
            <img src={this.state.img} alt="Recipe" />
          </div>
        </div>
      );
    }
    else{
      return(
        <div className="recipe-mobile">
          <NavMobile />
          <div className="recipe-preview-mobile">
            <img className="image-1x1" src={this.state.img} alt="Recipe" />
            <p className="title canvas">{this.state.title}</p>
            <div className="date">{this.state.date}</div>
            <div className="content" dangerouslySetInnerHTML={this.createContentMarkup()} />
            <div className="recipe-info">
              <span className="info-title canvas">Ingredients</span>
              <div dangerouslySetInnerHTML={{ __html: this.state.ingredients }} />
              <span className="info-title canvas">Instructions</span>
              <div dangerouslySetInnerHTML={{ __html: this.state.instructions }} />
            </div>
            <div className="tag-us">
              Did you try out this recipe? Tag @lapa.eats on Instagram
            </div>
          </div>
          <FooterSmall />
        </div>
      );
    }
  }
}