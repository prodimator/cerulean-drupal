import React, { Component } from 'react';
import CardDescription from '../carddescription/CardDescription';
import CardTitle from '../cardtitle/CardTitle';
import { _AppConstants } from '../../index.constants';
import './FancyCard.css';


class FancyCard extends Component {
  render() {
    let recipe_image=_AppConstants.api+this.props.image;
    return (
      <div>
        <div className="container fancy-container">
          <div className="content">
            <div className="content-overlay"></div>
            <img className="content-image" src={recipe_image} alt={recipe_image}/>
            <div className="fancy-card-content content-details fadeIn-top">
              <div className="fancy-card-title-bold">
                <CardTitle title={this.props.title_bold}/>
              </div>
              <div className="fancy-card-title-slim">
                <CardTitle title={this.props.title_slim}/>
              </div>
              <div>
                <CardDescription description={this.props.description}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FancyCard;
