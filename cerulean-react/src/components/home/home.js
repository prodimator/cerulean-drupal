import React, { Component } from 'react';
import Slideshow from '../slideshow/Slideshow';
import './Home.css';

class Home extends Component {
	render() {
    return (
		<div className="Home">
			<Slideshow/>
	    </div>
		);
	}
}

export default Home;
