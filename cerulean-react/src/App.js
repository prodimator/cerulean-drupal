import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './views/Home/home';
import Recipe from './views/Recipe/recipe';
import About from './views/About/about'
import Contact from './views/Contact/contact'
import './App.scss';

function App() {
  return (
    <Router>
      <div className="App">

        <Route exact path="/" component={Home} />
        <Route path="/recipe/:id" component={Recipe} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </div>
    </Router>
  );
}

export default App;
