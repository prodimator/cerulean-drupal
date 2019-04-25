import React, { Component } from 'react';
import * as CONSTANTS from '../../Constants';
import axios from 'axios';

import './recipePreview.scss';

export default class RecipePreview extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.id,
            title: '',
            description: '',
            content: '',
            img: '',
        };
    };

    componentDidMount() {
        axios.get(`http://35.199.10.212/api/recipes?_format=json&id=${this.state.id}`)
            .then(res => {
                this.setState({
                    title: res.data[0].title,
                    description: res.data[0].description,
                    content: res.data[0].body_content,
                    img: CONSTANTS.BASE_URL+res.data[0].image_1x1,
                });
            })
    }
    createContentMarkup = () => {
        return { __html: this.state.content };
    }

    render() {
        return (
            <div className="recipePreview">
                <div className="image">
                    <img className="image-1x1" src={this.state.img} alt="Recipe" />
                </div>
                <div className="details">
                    <p className="title canvas">{this.state.title}</p>
                    <p className="description nexaBold">{this.state.description}</p>
                    <div className="content" dangerouslySetInnerHTML={this.createContentMarkup()} />
                    <p class="more nexaBold">...</p>
                </div>
            </div>
        );
    }
}