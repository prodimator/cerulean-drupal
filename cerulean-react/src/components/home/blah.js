import React, { Component } from 'react';
import Slideshow from '../slideshow/Slideshow';
import Feed from '../feed/Feed';
import './Home.css';

class Home extends Component {
	render() {
    return (
		<div className="home">
			<Slideshow/>
			<Feed/>
	    </div>
		);
	}
}

export default Home;
