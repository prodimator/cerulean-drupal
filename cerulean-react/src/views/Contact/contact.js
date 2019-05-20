import React, { Component } from 'react';
import * as CONSTANTS from '../../Constants';
import NavSmall from '../../components/navSmall/navSmall';
import NavMobile from '../../components/navMobile/navMobile';
import Footer from '../../components/footer/footer';
import axios from 'axios';

export default class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
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

    render() {
        const { width } = this.state;
        const isMobile = width <= 650;

        if (!isMobile) {
            return ( 
                <div className="contact">
                    <div className="contact-left">
                        <NavSmall />
                        <div className="contact-content">
                        </div>
                        <Footer />
                    </div>
                    <div className="contact-right">
                    </div>
                </div>
            );
        }
        else{
            return(
                <div className="mobile-contact">
                    <NavMobile />
                    <div className="contact-content">
                    </div>
                </div>
            );
        }

    }
}