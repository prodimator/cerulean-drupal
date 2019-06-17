import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import * as CONSTANTS from '../../Constants';
import NavSmall from '../../components/navSmall/navSmall';
import NavMobile from '../../components/navMobile/navMobile';
import FooterSmall from '../../components/footerSmall/footerSmall';
import axios from 'axios';
import './recipeCategories.scss';

export default class RecipeCategories extends Component {
    constructor(props) {
        super(props);
        this.state = {
            width: window.innerWidth,
            categories: []
        };
    };

    componentDidMount() {
        axios.get(CONSTANTS.BASE_URL + '/api/categories?_format=json')
            .then(res => {
                let categories = res.data.map(category => {
                    return ({
                        title: category.title,
                        image: category.image
                    })
                })
                this.setState({
                    categories: categories
                });
            })
    }

    componentWillMount = () => {
        window.addEventListener('resize', this.handleWindowSizeChange);
    }
    componentWillUnmount = () => {
        window.removeEventListener('resize', this.handleWindowSizeChange);
    }
    handleWindowSizeChange = () => {
        this.setState({ width: window.innerWidth });
    };

    generateCard = (category) => {
        let category_title = category.title;
        return (
            <Link to={`/results/${category_title}`}>
                <div className="wrapper">
                    <p>{category.title}</p>
                    <img className="image" src={CONSTANTS.BASE_URL + category.image} alt="Category" />
                </div>
            </Link>
        );
    }

    render() {

        const { width } = this.state;
        const isMobile = width <= 650;

        if (!isMobile) {
            return (
                <>
                    <NavSmall />
                    <div className="recipe-categories">
                        <div className="categories-intro">
                            <div>What are you craving?</div>
                        </div>
                        <div className="categories">
                            {this.state.categories.map((category, index) => (
                                <div className="card" key={index}>
                                    {this.generateCard(category)}
                                </div>
                            ))}
                        </div>
                    </div>
                    <FooterSmall />
                </>
            );
        }
        else {
            return (
                <>
                    <NavMobile />
                    <div className="recipe-categories-mobile">
                        <div className="header canvas">Categories</div>
                        <div className="categories">
                            {this.state.categories.map((category, index) => (
                                <div className="card" key={index}>
                                    {this.generateCard(category)}
                                </div>
                            ))}
                        </div>
                    </div>
                    <FooterSmall />
                </>
            );
        }
    }
}