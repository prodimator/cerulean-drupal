import React, { Component } from 'react';
import NavSmall from '../../components/navSmall/navSmall';
import NavMobile from '../../components/navMobile/navMobile';
import FooterSmall from '../../components/footerSmall/footerSmall';
import './contact.scss';


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
        const textDisplay = "Like what you see? Please us a message and tell us what you think! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."

        if (!isMobile) {
            return (
                <>
                    <NavSmall />
                    <div className="contact">
                        <div className="contact-left">
                            <div className="contact-content">
                                <p className="title canvas">Leave us a message!</p>
                                <div className="content">
                                    <p>{textDisplay}</p>
                                </div>
                            </div>
                        </div>
                        <div className="contact-right">
                            <form>
                                <p>Your Email</p>
                                <input type="text" name="email" />
                                <p>Your Name</p>
                                <input type="text" name="name" />
                                <p>Subject</p>
                                <input type="text" name="subject" />
                                <p>Message</p>
                                <textarea name="message" />
                                <button>Submit</button>
                            </form>
                        </div>
                    </div>
                    <FooterSmall />
                </>
            );
        }
        else {
            return (
                <div className="mobile-contact">
                    <NavMobile />
                    <div className="contact-content">
                    </div>
                </div>
            );
        }

    }
}