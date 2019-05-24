import React, { Component } from 'react';
import NavSmall from '../../components/navSmall/navSmall';
import NavMobile from '../../components/navMobile/navMobile';
import FooterSmall from '../../components/footerSmall/footerSmall';
import * as CONSTANTS from '../../Constants';
import axios from 'axios';
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

    handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const name = e.target.name.value;
        const subject = e.target.subject.value;
        const message = e.target.message.value;

        axios.get(CONSTANTS.BASE_URL + '/session/token').then(result => {
            console.log(result);
            if (result.status === 200 ) {
                const csrfToken = result.data;
                fetch(CONSTANTS.BASE_URL + '/webform_rest/submit?_format=json', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                    'X-CSRF-Token': csrfToken
                  },
                  body: JSON.stringify({
                    'webform_id':'contact',
                    'entity_type' : null,
                    'entity_id' : null,
                    'in_draft' : false,
                    'uri' : ['/webform/webform_id/api'],
                    'name' : name,
                    'email' : email,
                    'subject' : subject,
                    'message': message,
                  }),
                })
                .then(response => response.json())
                .then(
                  (data) => {
                    //on success you do whatever you will want
                    console.log('success', data);
                  },
                  (error) => {
                    console.log('error', error);
                  }
                );
            }
        });
    }

    render() {
        const { width } = this.state;
        const isMobile = width <= 650;
        const textDisplay = "Like what you see? Please send us a message and tell us what you think! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."

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
                            <form onSubmit={this.handleSubmit}>
                                <p>Your Email</p>
                                <input type="text" name="email" />
                                <p>Your Name</p>
                                <input type="text" name="name" />
                                <p>Subject</p>
                                <input type="text" name="subject" />
                                <p>Message</p>
                                <textarea name="message" />
                                <button type="submit">Submit</button>
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