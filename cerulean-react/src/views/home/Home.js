import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { _AppConstants } from '../../index.constants';
import Recipe from '../recipe/Recipe';
import Feed from '../../components/feed/Feed'
import RecipeMenu from '../recipemenu/RecipeMenu';
import About from '../about/About';
import Contact from '../contact/Contact';
import './Home.css';


class HomeRouter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: []
    };
  }

  componentDidMount() {
    fetch(_AppConstants.api + '/api/recipes?_format=json')
      .then((results) => {
        return results.json();
      }).then((data) => {
        let recipes = data.map((recipe) => {
          return ({
            id: recipe.id,
            title: recipe.title,
            date: recipe.date,
            description: recipe.description,
            image_1x1: recipe.image_1x1,
            image_2x1: recipe.image_2x1,
            image_3x2: recipe.image_3x2,
            image_3x4: recipe.image_3x4
          });
        })
        this.setState({recipes});
      })
  }

  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Feed} />
          <Route path="/recipe/:id" component={Recipe} />
          <Route path="/recipes" component={RecipeMenu}/>
          <Route path="/about" component={About}/>
          <Route path="/contact" component={Contact}/>
        </Switch>
      </div>
    );
  }
}

function Home() {
  return (
    <Router>
      <Route component={HomeRouter} />
    </Router>
  );
}

export default Home;