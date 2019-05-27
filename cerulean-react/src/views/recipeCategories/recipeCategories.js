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
                let categories = [];
                res.data.forEach(function (item) {
                    categories.push([item.title, item.image]);
                });
                this.setState({ categories })
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
        let query = category[0].toLowerCase();
        return (
            <Link to={`/results/${query}`}>
                <div className="wrapper">
                    <a>{category[0]}</a>
                    <img className="image" src={CONSTANTS.BASE_URL + category[1]} alt="Category" />
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
                        <div className="latest">
                            <span className="bar" />
                            <div className="latest canvas">Categories</div>
                            <span className="bar" />
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
                <div className="recipe-categories-mobile">
                    <NavMobile />
                    <div className="title canvas">Categories</div>
                    <div className="categories">
                        {this.state.categories.map((category, index) => (
                            <div className="card" key={index}>
                                {this.generateCard(category)}
                            </div>
                        ))}
                    </div>
                </div>
            );
        }
    }
}