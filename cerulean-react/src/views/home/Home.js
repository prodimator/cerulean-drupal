import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { _AppConstants } from '../../index.constants';
import Recipe from '../recipe/Recipe';
import Feed from '../../components/feed/Feed'
import RecipeMenu from '../recipemenu/RecipeMenu';
import RecipesByCategory from '../recipesbycategory/RecipesByCategory';
import About from '../about/About';
import Contact from '../contact/Contact';
import './Home.css';


const Home = () => (
  <div>
    <Switch>
      <Route exact path="/" component={Feed} />
      <Route exact path="/recipes/breakfast" component={RecipesByCategory} />
      <Route exact path="/recipes/appetizers" component={RecipesByCategory} />
      <Route exact path="/recipes/soup" component={RecipesByCategory} />
      <Route exact path="/recipes/salad" component={RecipesByCategory} />
      <Route exact path="/recipes/entrees" component={RecipesByCategory} />
      <Route exact path="/recipes/sides" component={RecipesByCategory} />
      <Route exact path="/recipes/drinks" component={RecipesByCategory} />
      <Route exact path="/recipes/dessert" component={RecipesByCategory} />
      <Route path="/recipe/:id" component={Recipe} />
      <Route path="/recipes" component={RecipeMenu} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
    </Switch>
  </div>
);
export default Home;