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
          <Row center="md" className="about-container">
            <Col md={6}>
              <img className="about-image" src="/aboutTemp.jpg" alt="About Us Image" />
            </Col>
            <Col md={6} className="about-text">
              <Row center="md">
                <Col md={9} className="text-align-left">
                  <div className="title title-bold">
                    About
                  </div>
                  <div className="title title-slim">
                    Us
                  </div>
                </Col>
              </Row>
              <Row center="md">
                <Col md={9}>
                  <div className="about-us-body text-align-left">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget duis at tellus at urna. Sem fringilla ut morbi tincidunt augue interdum velit. Nisi est sit amet facilisis magna. Habitant morbi tristique senectus et netus et malesuada. Bibendum enim facilisis gravida neque convallis a cras semper. Euismod quis viverra nibh cras pulvinar. Porta non pulvinar neque laoreet. Dolor sit amet consectetur adipiscing. Libero id faucibus nisl tincidunt. Enim nulla aliquet porttitor lacus luctus accumsan tortor. Eleifend mi in nulla posuere sollicitudin aliquam ultrices. Pretium viverra suspendisse potenti nullam ac tortor vitae purus. Suscipit adipiscing bibendum est ultricies integer quis auctor. Mus mauris vitae ultricies leo integer. Et tortor at risus viverra adipiscing. Etiam dignissim diam quis enim lobortis scelerisque. Venenatis tellus in metus vulputate eu scelerisque. Vulputate eu scelerisque felis imperdiet. Pellentesque id nibh tortor id aliquet lectus.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget duis at tellus at urna. Sem fringilla ut morbi tincidunt augue interdum velit. Nisi est sit amet facilisis magna. Habitant morbi tristique senectus et netus et malesuada. Bibendum enim facilisis gravida neque convallis a cras semper. Euismod quis viverra nibh cras pulvinar. Porta non pulvinar neque laoreet. Dolor sit amet consectetur adipiscing. Libero id faucibus nisl tincidunt. Enim nulla aliquet porttitor lacus luctus accumsan tortor. Eleifend mi in nulla posuere sollicitudin aliquam ultrices. Pretium viverra suspendisse potenti nullam ac tortor vitae purus.</p>
                  </div>
                </Col>
              </Row>
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