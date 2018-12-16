import React, { Component } from 'react';

import HamburgerNav from '../../components/hamburgernav/HamburgerNav';
import Hamburger from '../../components/hamburger/Hamburger';


class About extends Component {
	render() {
    return (
  		<div>
        <Hamburger />
        <HamburgerNav />
  			<p>About page in progress</p>
      </div>
		);
	}
}

export default About;