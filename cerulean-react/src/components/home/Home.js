import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { _AppConstants } from '../../index.constants';
import Recipe from '../recipe/Recipe';
import Feed from './Feed.js';
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
            image: recipe.image_header,
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