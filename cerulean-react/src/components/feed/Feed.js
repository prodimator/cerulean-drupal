import React, { Component } from 'react';
import Scrollchor from 'react-scrollchor';
import { Card, CardImg, CardTitle, CardText, CardDeck, CardSubtitle,CardBody, Col } from 'reactstrap';
import { _AppConstants } from '../../index.constants';
import './Feed.css';

class Feed extends Component{
  constructor() {
    super();
    this.state = {
      recipes: []
    };
  }

  componentDidMount() {
    fetch(_AppConstants.api + '/api/recipes?_format=json')
      .then((results) => {
        return results.json();
      }).then((data) => {
        console.log(data);
        let recipes = data.map((recipe) => {
          return ({
            id: recipe.id,
            title: recipe.title,
            date: recipe.date,
            image: recipe.image_header,
          });
        })
        this.setState({recipes});
      })
  }

  render() {
    console.log(this.state.recipes);
    return (
      <div>
        <div className="feed">
          <Scrollchor to="#feed" className="nav-link"><span className="carousel-control-prev-icon mess"></span></Scrollchor>
        </div>

        <div className="cards" id="feed">
          <CardDeck>
            <Col sm="3">
              {this.state.recipes.map((item)=>
                <Card>
                  <CardImg top width="100%" src={`${_AppConstants.api}${item.image}`} alt="Card image cap" />
                  <CardBody>
                    <CardTitle>{item.title}</CardTitle>
                    <CardSubtitle>{item.date}</CardSubtitle>
                    <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                  </CardBody>
                </Card>
              )}
            </Col>
          </CardDeck>
        </div>

        <Scrollchor to="" className="nav-link">Back to Top</Scrollchor>
      </div>
    );
  }
}

export default Feed;