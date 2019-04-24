import React, { Component } from 'react';
import Nav from '../../components/nav/nav';
import Splash from '../../components/splash/splash';
import Footer from '../../components/footer/footer';
import './home.scss';

export default class App extends Component {
  constructor(props) {
    super(props);
  };

  render() {
    return (
      <div className="Home">
        <Nav />
        <Splash />
        <Footer />
      </div>
    );
  }
}