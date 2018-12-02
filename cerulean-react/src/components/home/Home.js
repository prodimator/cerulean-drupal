import React, { Component } from 'react';
import Slideshow from '../slideshow/Slideshow';
import Feed from '../feed/Feed';
import Feed3 from '../feed/Feed3';
import './Home.css';

class Home extends Component {
	render() {
    return (
		<div className="home">
			<Feed3/>
	    </div>
		);
	}
}

export default Home;
