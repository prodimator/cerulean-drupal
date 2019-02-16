import React, { Component } from 'react';
import CardDescription from '../carddescription/CardDescription';
import CardTitle from '../cardtitle/CardTitle';
import { _AppConstants } from '../../index.constants';
import './Card.scss';
import Fork from '../../svg/fork.svg';



class Card extends Component {
  
  render() {
    let recipe_image = _AppConstants.api + this.props.image;
    return (
      <div>
        <div className="card-container">
          <div className="content">
            <div className="content-overlay"></div>
            <img className="content-image" src={recipe_image} alt={recipe_image} />
            <div className="content-details fadeIn-top">
              <p>{this.props.description}</p>
            </div>
          </div>
          <div className="title-container">
            <p className="recipe-date">
              {this.props.date}
            </p>
            <p className="card-title">
              {this.props.title}
            </p>
            <p className="see-recipe">
              <img src={Fork} className="fork" alt="Fork" /> See Recipe
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default Card;
