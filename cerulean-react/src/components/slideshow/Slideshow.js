import React, { Component } from 'react';
import { 
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselCaption } from 'reactstrap';
import Scrollchor from 'react-scrollchor';
import { BrowserRouter as Route, Link } from "react-router-dom";
import { _AppConstants } from '../../index.constants';
import Navigation from '../navigation/Navigation';
import './Slideshow.css';


class Slideshow extends Component {

  constructor(props) {
    super(props);
    this.state = {
      images: [],
      activeIndex: 0
    };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  componentDidMount() {
    fetch(_AppConstants.api + '/api/recipes?_format=json')
      .then((results) => {
        return results.json();
      }).then((data) => {
        let images = data.map((img) => {
          let parsedTitle = img.title.split(' ');
          return ({
          id: img.id,
          title: img.title,
          title_bold: parsedTitle[0]+parsedTitle[1],
          title_slim: parsedTitle[2],
          image_header_url: img.image_3x2,
        });
        })
        this.setState({images});
      })
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === this.state.images.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? this.state.images.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    let slides = this.state.images.map(img => {
      let title = img.title_bold+img.title_slim;
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={img.id}
        >
          <img src={_AppConstants.api+img.image_header_url} alt={img.title} />
          <CarouselCaption captionText={title} />
        </CarouselItem>
      );
    });

    return (
      <Carousel
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
      >
        <div>
          <Navigation/>
          <Scrollchor to="#feed" className="scroll-jack">
            <span className="carousel-control-prev-icon scroll-down"></span>
          </Scrollchor>
        </div>
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
      </Carousel>
    );
  }
}

export default Slideshow;
