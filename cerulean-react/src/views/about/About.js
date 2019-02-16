import React, { Component } from 'react';
import { Row, Col } from 'react-flexbox-grid';

import { _AppConstants } from '../../index.constants';
import HamburgerNav from '../../components/hamburgernav/HamburgerNav';
import Footer from '../../components/footer/Footer';
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
          let parsedTitle = post.title.split(' ');
          return ({
            title: post.title,
            title_bold: parsedTitle[0],
            title_slim: parsedTitle[1],
            intro: post.intro,
            who_are_we: post.who_are_we,
            what_is_lapa: post.what_is_lapa,
            about_the_site: post.about_the_site,
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
        image: this.state.about[0].image,
        title: this.state.about[0].title,
        title_bold: this.state.about[0].title_bold,
        title_slim: this.state.about[0].title_slim,
        intro: this.state.about[0].intro,
        who_are_we: this.state.about[0].who_are_we,
        what_is_lapa: this.state.about[0].what_is_lapa,
        about_the_site: this.state.about[0].about_the_site,
      }
    }
    else {
      aboutsection = <div>Loading...</div>
    }


    const { width } = this.state;
    const isMobile = width <= 500;

    if (!isMobile){
      let about_image = _AppConstants.api+aboutsection.image;
      return (
        <div>
          <HamburgerNav />
          <Row center="md" className="about-container">
            <Col md={6}>
              <img className="about-image" src={about_image} alt={about_image}/>
            </Col>
            <Col md={6} className="about-text">
              <Row center="md">
                <Col md={9} className="text-align-left">
                  <div className="title title-bold">
                    { aboutsection.title_bold }
                  </div>
                  <div className="title title-slim">
                    { aboutsection.title_slim }
                  </div>
                </Col>
              </Row>
              <Row center="md">
                <Col md={9}>
                  <div
                    className="about-us-body text-align-left"
                    dangerouslySetInnerHTML={{ __html: aboutsection.intro }}
                  />
                </Col>
              </Row>
              <Row center="md">
                <Col md={9}>
                  <div className="about-text sub-header text-align-left">
                    WHO ARE WE?
                  </div>
                </Col>
              </Row>
              <Row center="md">
                <Col md={9}>
                  <div
                    className="about-us-body text-align-left"
                    dangerouslySetInnerHTML={{ __html: aboutsection.who_are_we }}
                  />
                </Col>
              </Row>
              <Row center="md">
                <Col md={9}>
                  <div className="about-text sub-header text-align-left">
                    WHAT IS LAPA?
                  </div>
                </Col>
              </Row>
              <Row center="md">
                <Col md={9}>
                  <div
                    className="about-us-body text-align-left"
                    dangerouslySetInnerHTML={{ __html: aboutsection.what_is_lapa }}
                  />
                </Col>
              </Row>
              <Row center="md">
                <Col md={9}>
                  <div className="about-text sub-header text-align-left">
                    ABOUT THE SITE
                  </div>
                </Col>
              </Row>
              <Row center="md">
                <Col md={9}>
                  <div
                    className="about-us-body text-align-left"
                    dangerouslySetInnerHTML={{ __html: aboutsection.about_the_site }}
                  />
                </Col>
              </Row>
            </Col>
          </Row>
          <Footer />
        </div>
      );
    }

    if (isMobile){
      return(
        <div className="mobile">
          <HamburgerNav />
          <Row>
            <Col>
              <img className="mobile-header-img" alt="mobile header img" src={_AppConstants.api + aboutsection.image}></img>
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
              <div dangerouslySetInnerHTML={{ __html: aboutsection.intro }} />
            </Col>
          </Row>
          <Row start="sm" className="recipe-info-mobile">
            <Col md={10}>
              <div dangerouslySetInnerHTML={{ __html: aboutsection.who_are_we }} />
            </Col>
          </Row>
          <Row start="sm" className="recipe-info-mobile">
            <Col md={10}>
              <div dangerouslySetInnerHTML={{ __html: aboutsection.what_is_lapa }} />
            </Col>
          </Row>
          <Row start="sm" className="recipe-info-mobile">
            <Col md={10}>
              <div dangerouslySetInnerHTML={{ __html: aboutsection.about_the_site }} />
            </Col>
          </Row>
        </div>
      )
    }
  }
}

export default About;