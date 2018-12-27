import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';

import { _AppConstants } from '../../index.constants';
import HamburgerNav from '../../components/hamburgernav/HamburgerNav';
import Hamburger from '../../components/hamburger/Hamburger';
import './About.scss';


class About extends Component {
  constructor() {
    super();
    this.state = {
      about: [],
      width: window.innerWidth
    };
  }

  componentWillMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }
  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };

  componentDidMount() {
    fetch(_AppConstants.api + '/api/about?_format=json')
      .then((results) => {
        return results.json();
      }).then((data) => {
        let about = data.map(post => {
          return ({
            title: post.title,
            body: post.body,
            image: post.about_image,
          });
        })
        this.setState({ about });
      })
  }

  render() {
    let aboutsection;
    if (this.state.about.length > 0) {
      aboutsection = {
        title: this.state.about[0].title,
        body: this.state.about[0].body,
        image: "/sites/default/files/2018-12/about.jpg",
      }
    }
    else {
      aboutsection = <div>Loading...</div>
    }


    const { width } = this.state;
    const isMobile = width <= 500;

    if (!isMobile){
      return (
        <div>
          <Hamburger />
          <HamburgerNav />
          <Row>
            <Col md={12}>
              <header className="recipe-header" style={{ backgroundImage: `url(${_AppConstants.api}${aboutsection.image})` }} />
            </Col>
          </Row>
          <Row center="md">
            <Col lg={9}>
              <div className="recipe-post">
                <Row start="md">
                  <Col md>
                    <div className="title title-bold">
                      { aboutsection.title }
                    </div>
                  </Col>
                </Row>
                <Row start="md" className="recipe-info">
                  <Col md={12} className="recipe-ingredients">
                    <div dangerouslySetInnerHTML={{ __html: aboutsection.body }} />
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </div>
      );
    }

    if (isMobile){
      return(
        <div className="mobile">
          <Hamburger />
          <HamburgerNav />
          <Row>
            <Col>
              <img className="mobile-header-img" src={_AppConstants.api + aboutsection.image}></img>
            </Col>
          </Row>
          <Row center="xs" middle="xs">
            <Col xs={10}>
              <div className="title-mobile title-bold">
                { aboutsection.title }
              </div>
            </Col>
          </Row>
          <Row start="sm" className="recipe-info-mobile">
            <Col md={10}>
              <div dangerouslySetInnerHTML={{ __html: aboutsection.body }} />
            </Col>
          </Row>
        </div>
      )
    }
  }
}

export default About;