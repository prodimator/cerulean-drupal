import React, { Component } from 'react';
import { UncontrolledCarousel } from 'reactstrap';
import { _AppConstants } from '../../index.constants';
import './Slideshow.css';

class Slideshow extends Component {

  constructor() {
    super();
    this.state = {
      images: []
    };
  }

  componentDidMount() {
    fetch(_AppConstants.api + '/api/carousel_images?_format=json')
      .then((results) => {
        return results.json();
      }).then((data) => {
        let images = data.map((img) => {
          return (_AppConstants.api + img.image_header);
        })
        this.setState({images});
      })
  }

  render() {
    const items = [
      {
        src: this.state.images[0],
        caption: 'Slide 1',
      },
      {
        src: this.state.images[1],
        caption: 'Slide 2',
      },
      {
        src: this.state.images[2],
        caption: 'Slide 3',
      }
    ];

    return (
      <div>
        <UncontrolledCarousel
          items={items}
          key={items.src}
        />
      </div>
    );
  }
}

export default Slideshow;
