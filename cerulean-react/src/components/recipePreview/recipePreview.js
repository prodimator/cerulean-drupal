import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import * as CONSTANTS from '../../Constants';
import axios from 'axios';

import './recipePreview.scss';

export default class RecipePreview extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            title: this.props.title,
            date: '',
            description: '',
            content: '',
            img: '',
            width: window.innerWidth
        };
    };

    componentWillMount = () => {
        window.addEventListener('resize', this.handleWindowSizeChange);
    }
    componentWillUnmount = () => {
        window.removeEventListener('resize', this.handleWindowSizeChange);
    }
    handleWindowSizeChange = () => {
        this.setState({ width: window.innerWidth });
    };

    componentDidMount() {
        axios.get(`http://35.199.10.212/api/recipes?_format=json&title=${this.state.title}`)
            .then(res => {
                this.setState({
                    title: res.data[0].title,
                    description: res.data[0].description,
                    content: res.data[0].body_content,
                    date: res.data[0].date,
                    img: CONSTANTS.BASE_URL+res.data[0].image_1x1,
                });
            })
    }
    createContentMarkup = () => {
        return { __html: this.state.content };
    }

    render() {
        const { width } = this.state;
        const isMobile = width <= 650;

        if (!isMobile) {
            return (
                <div className="recipePreview">
                    <div className="image">
                        <Link to={`/recipes/${this.state.title}`}>
                            <img className="image-1x1" src={this.state.img} alt="Recipe" />
                        </Link>
                    </div>
                    <div className="details">
                        <p className="title canvas">{this.state.title}</p>
                        <p className="description nexaBold">{this.state.description}</p>
                        <div className="content" dangerouslySetInnerHTML={this.createContentMarkup()} />
                        <Link to={`/recipes/${this.state.title}`}>
                            <p className="more nexaBold">...</p>
                        </Link>
                    </div>
                </div>
            );
        }
        else {
            return (
                <div className="recipe-preview-mobile">
                    <Link to={`/recipes/${this.state.title}`}>
                        <img className="image-1x1" src={this.state.img} alt="Recipe" />
                        <p className="title canvas">{this.state.title}</p>
                        <p className="date nexaLight">{this.state.date}</p>
                    </Link>
                    <div className="border" />
                </div>
            )
        }
    }
}