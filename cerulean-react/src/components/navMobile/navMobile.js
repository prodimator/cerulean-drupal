import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import Search from '../../components/search/search'

import './navMobile.scss';

export default class NavMobile extends Component {

    constructor(props) {
        super(props);
        this.state = {
            visible: 'hide'
        };
    };

    toggleMenu = () => {
        if (this.state.visible === 'show'){
            this.setState({
                visible: 'hide'
            });
            document.body.style.overflow = "auto";
        }
        if (this.state.visible === 'hide') {
            this.setState({
                visible: 'show'
            });
            document.body.style.overflow = "hidden";
        }
    }
    closeMenu = () => {
        if (this.state.visible === 'show'){
            this.setState({
                visible: 'hide'
            });
            document.body.style.overflow = "auto";
        }
    }

    render() {
        return (
            <>
                <div className="nav-mobile" onClick={this.closeMenu}>
                    <div className="hamburg" onClick={this.toggleMenu}>
                        <div className="top" />
                        <div className="bottom" />
                    </div>
                    <span className="nav-mobile-title playfair">lapa</span>
                    <div className="search">
                        <Search />
                    </div>
                </div>
                <div className={`slide-menu ${this.state.visible}`}>
                    <div className="links">
                        <NavLink className="playfair" exact activeClassName="active" to={'/'} onClick={this.toggleMenu}>
                            <span id="home">Home</span>
                        </NavLink>
                        <NavLink className="playfair" exact activeClassName="active" to={'/recipes'} onClick={this.toggleMenu}>
                            <span id="recipes">Recipes</span>
                        </NavLink>
                        <NavLink className="playfair" exact activeClassName="active" to={'/about'} onClick={this.toggleMenu}>
                            <span id="about">About</span>
                        </NavLink>
                        <NavLink className="playfair" exact activeClassName="active" to={'/contact'} onClick={this.toggleMenu}>
                            <span id="contact">Contact</span>
                        </NavLink>
                    </div>
                </div>
            </>
        );
    }
    
}