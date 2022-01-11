import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import classes from "./AboutUs.module.css";

const AboutUs = () => {
    return (<Container>
        <Row className={classes.center}>
            <h2>Over ons</h2>
        </Row>
        <Row className={classes.row}>
            <Col xs={3} className={classes.col}>

            </Col>
            <Col xs={3} className={classes.col}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ut luctus urna. Donec venenatis, diam vel ultricies ultrices, lacus nunc ornare lacus, eu mollis neque ex ut risus. Donec sollicitudin ultricies suscipit. Proin nec volutpat felis. Fusce rutrum ultrices pharetra. Praesent pretium, metus eu vestibulum hendrerit, sapien lectus ultricies ligula, id fermentum est risus a lectus. Morbi non eleifend nisi. Donec eleifend interdum lobortis. Cras bibendum sollicitudin volutpat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Morbi pharetra elementum ante sed imperdiet. Duis rhoncus nec augue et dictum. Vestibulum vel volutpat dui, euismod lobortis dolor. Aenean eget lacinia metus, et tincidunt est.
            </Col>
        </Row>
    </Container>)
};

export default AboutUs;
