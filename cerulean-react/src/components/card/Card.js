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
   <div>
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
        <div className="card container">
          <div className="content">
            <div className="content-overlay"></div>
            <img className="content-image" src={recipe_image}/>
            <div className="card-description content-details fadeIn-top">
              <CardDescription description={this.props.description}/>
            </div>
          </div>
          <div className="card-title">
            <CardTitle title={this.props.title}/>
          </div>
        </div>
      </div>
    )
  }
}

export default Card;
