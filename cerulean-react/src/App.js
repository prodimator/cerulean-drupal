import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { createBrowserHistory } from 'history';
import ReactGA from 'react-ga';
import Home from './views/Home/home';
import Recipe from './views/Recipe/recipe';
import About from './views/About/about'
import Contact from './views/Contact/contact'
import RecipeFilter from './views/RecipeFilter/recipefilter'
import RecipeCategories from './views/recipeCategories/recipeCategories';
import './App.scss';

const history = createBrowserHistory();

// Initialize google analytics page view tracking
history.listen(location => {
  ReactGA.initialize('UA-143287896-1');
  ReactGA.set({ page: location.pathname }); // Update the user's current page
  ReactGA.pageview(location.pathname); // Record a pageview for the given page
});

function App() {
  return (
    <Router history={history}>
      <div className="App">
        <Route exact path="/" component={Home} />
        <Route exact path="/recipes" component={RecipeCategories} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/recipes/:title" component={Recipe} />
        <Route exact path="/results/:filter" component={RecipeFilter} />
      </div>
    </Router>
  );
}

export default App;
