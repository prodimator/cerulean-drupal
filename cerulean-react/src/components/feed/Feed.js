import React, { Component } from 'react';
import { withRouter, Route, Link } from 'react-router-dom'
import Scrollchor from 'react-scrollchor';
import { Card, CardImg, CardTitle, CardText, CardDeck, CardSubtitle,CardBody, Col } from 'reactstrap';
import { _AppConstants } from '../../index.constants';
import Recipe from '../recipe/Recipe';
import Slideshow from '../slideshow/Slideshow';
import './Feed.css';

class Feed extends Component{
  constructor(props) {
    super(props);
    this.state = {
      recipes: []
    };
    this.goHome = this.goHome.bind(this)
  }

  componentDidMount() {
    fetch(_AppConstants.api + '/api/recipes?_format=json')
      .then((results) => {
        return results.json();
      }).then((data) => {
        console.log(data);
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

  goHome() {
    this.props.history.push('/recipe')
  }

  recipeClicked = recipe_id => () => this.props.history.push('/recipe/'+recipe_id)

  render() {
    console.log(this.state.recipes);
    return (
      <div>
        <div className="feed">
          <Scrollchor to="#feed" className="nav-link"><span className="carousel-control-prev-icon mess"></span></Scrollchor>
        </div>

        <div className="cards" id="feed">
            <div>
              <Link to="/recipe">CLICK ME</Link>
              <Route exact path="/recipe" component={Slideshow}/>
            </div>
          <CardDeck>
            {this.state.recipes.map((item)=>
              <Card>
                <CardImg top width="100%" src={`${_AppConstants.api}${item.image}`} alt="Card image cap" />
                <CardBody>
                  <CardTitle>
                    <div onClick={this.recipeClicked(item.id)}>{item.title}
                      <Route path="/recipe" render={() => <Recipe recipe_id={item.id}/>}/>
                    </div>
                    <div>
                      <Link to="/recipe">{item.title}</Link>
                      <Route path="/recipe" render={() => <Recipe recipe_id='5'/>}/>
                    </div>
                  </CardTitle>
                  <CardSubtitle>{item.date}</CardSubtitle>
                  <CardText>{item.description}</CardText>
                </CardBody>
              </Card>
            )}
          </CardDeck>
        </div>

        <Scrollchor to="" className="nav-link">Back to Top</Scrollchor>
      </div>
    );
  }
}

export default Feed;