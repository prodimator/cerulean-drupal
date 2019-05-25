import React, { Component } from 'react';
import NavSmall from '../../components/navSmall/navSmall';
import NavMobile from '../../components/navMobile/navMobile';
import FooterSmall from '../../components/footerSmall/footerSmall';
import * as CONSTANTS from '../../Constants';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faPinterestP } from '@fortawesome/free-brands-svg-icons'

import './contact.scss';


export default class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            contact_text: '',
            width: window.innerWidth
        };
    };

    componentDidMount() {
        axios.get(CONSTANTS.BASE_URL + '/api/contact?_format=json')
            .then(res => {
                this.setState({
                    title: res.data[0].title,
                    contact_text: res.data[0].contact_text
                });
            })
    }

    createContactMarkup = () => {
        return { __html: this.state.contact_text };
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
                    // webform_id is the id name of the webform template
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

        if (!isMobile) {
            return (
                <>
                    <NavSmall />
                    <div className="contact">
                        <div className="contact-left">
                            <div className="contact-content">
                                <p className="title canvas">{this.state.title}</p>
                                <div className="content">
                                    <div dangerouslySetInnerHTML={this.createContactMarkup()} />
                                </div>
                                <div className="contact-social-media">
                                    <div className="fb-icon">
                                        <FontAwesomeIcon icon={faFacebookF} />
                                        <div className="fb">lapa.eats</div>
                                    </div>
                                    <div className="ig-icon">
                                        <FontAwesomeIcon icon={faInstagram} />
                                        <div className="ig">lapa.eats</div>
                                    </div>
                                    <div className="pin-icon">
                                        <FontAwesomeIcon icon={faPinterestP} />
                                        <div className="pin">lapaeats</div>
                                    </div>
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
                        <p className="title canvas">{this.state.title}</p>
                        <div dangerouslySetInnerHTML={this.createContactMarkup()} />
                    </div>
                    <div className="mobile-contact-form">
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
            );
        }

    }
}