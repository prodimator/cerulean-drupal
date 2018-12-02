import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Card, CardImg, CardTitle, CardText, CardDeck, CardSubtitle,CardBody, Col } from 'reactstrap';
import { _AppConstants } from '../../index.constants';
import Recipe from '../recipe/Recipe';
import RecipeMenu from '../recipemenu/RecipeMenu';
import Place from './Place.js';
import './Feed.css';


class ModalSwitch extends React.Component {
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
          <Route exact path="/" component={Place} />
          <Route path="/recipe/:id" component={Recipe} />
        </Switch>
      </div>
    );
  }
}

function ModalGallery() {
  return (
    <Router>
      <Route component={ModalSwitch} />
    </Router>
  );
}

export default ModalGallery;