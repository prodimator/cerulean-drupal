import React, { Component } from 'react';
import NavSmall from '../../components/navSmall/navSmall';
import NavMobile from '../../components/navMobile/navMobile';
import FooterSmall from '../../components/footerSmall/footerSmall';
import FormValidator from '../../validators/FormValidator';
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

        this.validator = new FormValidator([
            { 
                field: 'email', 
                method: 'isEmpty', 
                validWhen: false, 
                message: 'Email is required.' 
            },
            { 
                field: 'email',
                method: 'isEmail', 
                validWhen: true, 
                message: 'That is not a valid email.'
            },
            { 
                field: 'name', 
                method: 'isEmpty', 
                validWhen: false, 
                message: 'Pleave provide your name.'
            },
            { 
                field: 'subject', 
                method: 'isEmpty', 
                validWhen: false, 
                message: 'Pleave provide a subject.'
            },
            { 
                field: 'message', 
                method: 'isEmpty', 
                validWhen: false, 
                message: 'Please write a message.'
            }
        ]);

        this.state = {
            title: '',
            contact_text: '',
            name: '',
            email: '',
            subject: '',
            message: '',
            validation: this.validator.valid(),
            result: '',
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

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const validation = this.validator.validate(this.state);
        this.setState({ validation });

        if (validation.isValid) {
            this.setState({
                name: e.target.name.value,
                email: e.target.email.value,
                subject: e.target.subject.value,
                message: e.target.message.value
            });

            axios.get(CONSTANTS.BASE_URL + '/session/token').then(result => {
                if (result.status === 200) {
                    const csrfToken = result.data;
                    fetch(CONSTANTS.BASE_URL + '/webform_rest/submit?_format=json', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            'X-CSRF-Token': csrfToken
                        },
                        body: JSON.stringify({
                            // webform_id is the id name of the webform template
                            'webform_id': 'contact',
                            'entity_type': null,
                            'entity_id': null,
                            'in_draft': false,
                            'uri': ['/webform/webform_id/api'],
                            'name': this.state.name,
                            'email': this.state.email,
                            'subject': this.state.subject,
                            'message': this.state.message,
                        }),
                    })
                        .then(response => {
                            this.setState({
                                name: "",
                                email: "",
                                subject: "",
                                message: "",
                                result: "Success! Message sent."
                            });
                            console.log('Success!', response);
                        })
                        .catch(error => {
                            this.setState({
                                result: "Oops -- an error occured"
                            });
                            console.log('An error occurred', error);
                        });
                }
            });
            
        }
    }

    render() {
        const { width } = this.state;
        const isMobile = width <= 650;

        let validation = this.state.validation;

        if (!isMobile) {
            return (
                <>
                    <NavSmall />
                    <div className="contact">
                        <div className="contact-left">
                            <div className="contact-content">
                                <p className="title playfair">{this.state.title}</p>
                                <div className="content">
                                    <div dangerouslySetInnerHTML={this.createContactMarkup()} />
                                </div>
                                <div className="contact-social-media">
                                    <div className="fb-icon">
                                        <a href="https://www.facebook.com/lapa.eats" target="_blank" rel="noopener noreferrer">
                                            <FontAwesomeIcon icon={faFacebookF} />
                                            <span className="fb">lapa.eats</span>
                                        </a>
                                    </div>
                                    <div className="ig-icon">
                                        <a href="https://www.instagram.com/lapa.eats" target="_blank" rel="noopener noreferrer">
                                            <FontAwesomeIcon icon={faInstagram} />
                                            <span className="ig">lapa.eats</span>
                                        </a>
                                    </div>
                                    <div className="pin-icon">
                                        <a href="https://www.pinterest.com/lapaeats" target="_blank" rel="noopener noreferrer">
                                            <FontAwesomeIcon icon={faPinterestP} />
                                            <span className="pin">lapaeats</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="contact-right">
                            <form onSubmit={this.handleSubmit} onChange={this.handleChange}>
                                <p>Your Email</p>
                                <input type="text" value={this.state.email} name="email" />
                                <span className="help-block">{validation.email.message}</span>
                                <p>Your Name</p>
                                <input type="text" value={this.state.name} name="name" />
                                <span className="help-block">{validation.name.message}</span>
                                <p>Subject</p>
                                <input type="text" value={this.state.subject} name="subject" />
                                <span className="help-block">{validation.subject.message}</span>
                                <p>Message</p>
                                <textarea value={this.state.message} name="message" />
                                <span className="help-block help-message">{validation.message.message}</span>
                                <button type="submit" className="primary">Submit</button>
                                <span className="form-submit-success">{this.state.result}</span>
                            </form>
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
                    <div className="mobile-contact">
                        <div className="contact-content">
                            <p className="header playfair">{this.state.title}</p>
                            <div dangerouslySetInnerHTML={this.createContactMarkup()} />
                        </div>
                        <div className="mobile-contact-form">
                            <form onSubmit={this.handleSubmit} onChange={this.handleChange}>
                                <p>Your Email</p>
                                <input type="text" value={this.state.email} name="email" />
                                <span className="help-block">{validation.email.message}</span>
                                <p>Your Name</p>
                                <input type="text" value={this.state.name} name="name" />
                                <span className="help-block">{validation.name.message}</span>
                                <p>Subject</p>
                                <input type="text" value={this.state.subject} name="subject" />
                                <span className="help-block">{validation.subject.message}</span>
                                <p>Message</p>
                                <textarea value={this.state.message} name="message" />
                                <span className="help-block help-message">{validation.message.message}</span>
                                <button type="submit" className="primary">Submit</button>
                                <span className="form-submit-success">{this.state.result}</span>
                            </form>
                        </div>
                        <FooterSmall />
                    </div>
                </>
            );
        }

    }
}
