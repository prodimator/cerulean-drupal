import React, { Component } from 'react';
import Scrollchor from 'react-scrollchor';
import { Card, CardImg, CardTitle, CardText, CardDeck, CardSubtitle,CardBody, Col } from 'reactstrap';
import './Feed.css';

class Feed extends Component{
  render() {
    return (
      <div>
        <div className="feed">
          <Scrollchor to="#feed" className="nav-link"><span className="carousel-control-prev-icon mess"></span></Scrollchor>
        </div>
       
        <div className="cards" id="feed">
          <CardDeck>
            <Col sm="3">
              <Card>
                <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
                <CardBody>
                  <CardTitle>Card title</CardTitle>
                  <CardSubtitle>Card subtitle</CardSubtitle>
                  <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                </CardBody>
              </Card>
            </Col>
            <Col sm="3">
              <Card>
                <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
                <CardBody>
                  <CardTitle>Card title</CardTitle>
                  <CardSubtitle>Card subtitle</CardSubtitle>
                  <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
                </CardBody>
              </Card>
            </Col>
            <Col sm="3">
              <Card>
                <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
                <CardBody>
                  <CardTitle>Card title</CardTitle>
                  <CardSubtitle>Card subtitle</CardSubtitle>
                  <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
                </CardBody>
              </Card>
            </Col>
          </CardDeck>
        </div>
       
        <div className="cards">
          <CardDeck>
            <Col sm="3">
              <Card>
                <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
                <CardBody>
                  <CardTitle>Card title</CardTitle>
                  <CardSubtitle>Card subtitle</CardSubtitle>
                  <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                </CardBody>
              </Card>
            </Col>
            <Col sm="3">
              <Card>
                <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
                <CardBody>
                  <CardTitle>Card title</CardTitle>
                  <CardSubtitle>Card subtitle</CardSubtitle>
                  <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
                </CardBody>
              </Card>
            </Col>
            <Col sm="3">
              <Card>
                <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
                <CardBody>
                  <CardTitle>Card title</CardTitle>
                  <CardSubtitle>Card subtitle</CardSubtitle>
                  <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
                </CardBody>
              </Card>
            </Col>
          </CardDeck>
        </div>
        <Scrollchor to="" className="nav-link">Back to Top</Scrollchor>
      </div>
    )
  }
}

export default Feed;