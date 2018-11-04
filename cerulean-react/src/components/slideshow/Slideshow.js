import React, { Component } from 'react';
import ImageGallery from 'react-image-gallery';
import "../../../node_modules/react-image-gallery/styles/css/image-gallery.css";
import './Slideshow.css';

class Slideshow extends Component {

	handleImageLoad(event) {
    console.log('Image loaded ', event.target)
  }

	render() {
		const images = [
      {
        original: 'http://via.placeholder.com/500x250',
        originalClass: 'featured-slide',
        originalAlt: 'original-alt',
        description: 'Optional description...',
      },
      {
        original: 'http://via.placeholder.com/500x250',
      },
      {
        original: 'http://via.placeholder.com/500x250',
      }
    ]

    return (
    	<div className="gallery">
    		<ImageGallery
	        ref={i => this._imageGallery = i}
	        items={images}
	        slideInterval={100}
	        showThumbnails={false}
	        onImageLoad={this.handleImageLoad}/>
    	</div>
    );
  }
}

export default Slideshow;