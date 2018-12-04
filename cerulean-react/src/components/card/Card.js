import React, { Component } from 'react';
import { _AppConstants } from '../../index.constants';
import './Card.css';

class CardDescription extends Component {
 render() {
  return(
   <div>
    {this.props.description}
   </div>
  )
 }
}

class CardTitle extends Component {
 render() {
  return(
   <div className="title">
    {this.props.title}
   </div>
  )
 }
}

class Card extends Component {
  render() {
    let recipe_image=_AppConstants.api+this.props.image;
    return(
      <div>
        <div className="container">
          <div className="content">
            <div className="content-overlay"></div>
            <img className="content-image" src={recipe_image} alt={recipe_image}/>
            <div className="card-description content-details fadeIn-top">
              <CardDescription description={this.props.description}/>
            </div>
          </div>
          <div className="card-title">
            <div className="card-title-bold">
              <CardTitle title={this.props.title_bold}/>
            </div>
            <div className="card-title-slim">
              <CardTitle title={this.props.title_slim}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Card;
