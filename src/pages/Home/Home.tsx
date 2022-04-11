import React from 'react';

import classes from './Home.module.css';
import {Col, Container, Row} from "react-bootstrap";
import {useTranslation} from "react-i18next";
import InstagramFeed from "../../components/UI/instafeed";

const Home = () => {
    const {t} = useTranslation('translation');


    return (<Container>
        <Row className={classes.center}>
            <h2>{t('LITTLE_MOMSTER.HOME.TITLE')}</h2>
        </Row>
        <Row className={classes.row}>
            <Col xs={12} className={classes.col}>
                {t('LITTLE_MOMSTER.HOME.TEXT')}
                <InstagramFeed token={'IGQVJYRWhZAVi12ZA1hSMjdMdXpMUHczWnJsbVh2dG1RVXVrLWl6NW1HYmtfd1VscVR3RzZA6RmNHSVRvYzliUFpRVFdrdGMzbTNkMERkVUh0akFKeldldDdnRFZAzSWZA5QUdLTUZAEWi1nM1ZAFR25udkFJZAgZDZD'
                }  counter="6"/>
            </Col>
        </Row>
    </Container>)
};

export default Home;
