import React, { Component } from 'react';
import ImageGallery from 'react-image-gallery';
import "../../../node_modules/react-image-gallery/styles/css/image-gallery.css";
import './Slideshow.css';

class Slideshow extends Component {

  constructor(){
    super();
    this.state = {
      width: 0,
      height: 0,
      url: ''
    };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

	handleImageLoad(event) {
    console.log('Image loaded ', event.target)
  }

	render() {
    var url='https://picsum.photos/'+this.state.width+'/'+this.state.height+'/?random';
		const images = [
      {
        original: url,
        originalClass: 'featured-slide',
        originalAlt: 'original-alt',
      },
      {
        original: url,
      },
      {
        original: url,
      }
    ]

    return (
    	<div className="gallery">
    		<ImageGallery
	        ref={i => this._imageGallery = i}
          items={images}
          autoPlay={true}
	        slideInterval={5000}
          showThumbnails={false}
          showBullets={true}
          showNavigation={true}
          showPlayButton={false}
          showFullscreenButton={false}
	        onImageLoad={this.handleImageLoad}/>
    	</div>
    );
  }
}

export default Slideshow;