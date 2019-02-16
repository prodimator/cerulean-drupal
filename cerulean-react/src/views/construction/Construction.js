import React, { Component } from 'react';
import { Row, Col } from 'react-flexbox-grid';

import './Construction.scss';

import Turtle from '../../svg/tortoise.svg';


class Construction extends Component {
    render() {
        return(
            <Row center="md" middle="md" className="water">
                <Col md={4}>
                    <Row center="md">
                        <Col>
                            <img src={Turtle} className="turtle" alt="Turtle" />
                        </Col>
                    </Row>
                    <Row center="md">
                        <Col>
                            <p className="title-bold">Under construction!</p>
                        </Col>
                    </Row>
                    <Row start="md">
                        <Col>
                            <p>Sorry about that. We have some things to work out on our and end the site might be down for some time. You can check back in a bit!</p>
                        </Col>
                    </Row>
                </Col>
            </Row>
        )

    }
}

export default Construction;