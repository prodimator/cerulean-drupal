import React, { Component } from 'react';
import * as CONSTANTS from '../../Constants';
import NavSmall from '../../components/navSmall/navSmall';
import NavMobile from '../../components/navMobile/navMobile';
import Footer from '../../components/footer/footer';
import axios from 'axios';
import './about.scss';

export default class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            img: '',
            about_the_site: '',
            intro: '',
            what_is_lapa: '',
            who_are_we: '',
            width: window.innerWidth
        };
    };

    componentDidMount() {
        axios.get(CONSTANTS.BASE_URL + '/api/about?_format=json')
            .then(res => {
                this.setState({
                    title: res.data[0].title,
                    img: CONSTANTS.BASE_URL + res.data[0].about_image,
                    about_the_site: res.data[0].about_the_site,
                    intro: res.data[0].intro,
                    what_is_lapa: res.data[0].what_is_lapa,
                    who_are_we: res.data[0].who_are_we
                });
            })
    }

    createAboutSiteMarkup = () => {
        return { __html: this.state.about_the_site };
    }
    createIntroMarkup = () => {
        return { __html: this.state.intro };
    }
    createWhatIsMarkup = () => {
        return { __html: this.state.what_is_lapa };
    }
    createWhoAreWeMarkup = () => {
        return { __html: this.state.who_are_we };
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

    render() {
        const { width } = this.state;
        const isMobile = width <= 650;

        if (!isMobile) {
            return ( 
                <div className="about">
                    <div className="about-left">
                        <NavSmall />
                        <div className="about-content">
                            <p className="title canvas">{this.state.title}</p>
                            <div className="intro" dangerouslySetInnerHTML={this.createIntroMarkup()} />
                            <h3>What Is Lapa</h3>
                            <div className="what-is" dangerouslySetInnerHTML={this.createWhatIsMarkup()} />
                            <h3>Who We Are</h3>
                            <div className="who-we-are" dangerouslySetInnerHTML={this.createWhoAreWeMarkup()} />
                            <h3>About the Site</h3>
                            <div className="about-site" dangerouslySetInnerHTML={this.createAboutSiteMarkup()} />
                        </div>
                        <Footer />
                    </div>
                    <div className="about-right">
                        <img src={this.state.img} alt="Recipe" />
                    </div>
                </div>
            );
        }
        else{
            return(
                <div className="mobile-about">
                    <NavMobile />
                    <div className="about-content">
                        <p className="title canvas">{this.state.title}</p>
                        <div className="intro" dangerouslySetInnerHTML={this.createIntroMarkup()} />
                        <h2>What Is Lapa</h2>
                        <div className="what-is" dangerouslySetInnerHTML={this.createWhatIsMarkup()} />
                        <h2>Who We Are</h2>
                        <div className="who-we-are" dangerouslySetInnerHTML={this.createWhoAreWeMarkup()} />
                        <h2>About the Site</h2>
                        <div className="about-site" dangerouslySetInnerHTML={this.createAboutSiteMarkup()} />
                    </div>
                </div>
            );
        }

    }
}