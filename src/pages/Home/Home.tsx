import React from 'react';

import classes from './Home.module.css';
import {Col, Container, Row} from "react-bootstrap";
import {useTranslation} from "react-i18next";


const Home = () => {
    const {t} = useTranslation('translation');


    return (<Container>
        <Row className={classes.center}>
            <h2>{t('LITTLE_MOMSTER.HOME.TITLE')}</h2>
        </Row>
        <Row className={classes.row}>
            <Col xs={12} className={classes.col}>
                {t('LITTLE_MOMSTER.HOME.TEXT')}
            </Col>
        </Row>
    </Container>)
};

export default Home;
