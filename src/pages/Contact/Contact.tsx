import {TextareaAutosize, TextField} from "@mui/material";
import {Col, Container, Row} from "react-bootstrap";
import classes from './Contact.module.css';
import OrderButton from "../../components/UI/OrderButton";
import {useTranslation} from "react-i18next";

const Contact = () => {
    const {t} = useTranslation('translation');

    return (
        <Container>
            <Row className={classes.center}>
                <h2>{t('LITTLE_MOMSTER.CONTACT.US')}</h2>
            </Row>
            <Row className={classes.row}>
                <Col className={classes.col}>
                    <form action="/action_page.php">
                        <Row className={classes.row}><TextField
                            required
                            id="outlined-required"
                            label={t('LITTLE_MOMSTER.CONTACT.NAME')}
                        /></Row>
                        <Row className={classes.row}><TextField
                            required
                            id="outlined-required"
                            label={t('LITTLE_MOMSTER.CONTACT.EMAIL')}
                        /></Row>
                        <Row className={classes.row}><TextareaAutosize
                            maxLength={ 250 }
                            aria-label="maximum height"
                            placeholder={t('LITTLE_MOMSTER.CONTACT.TEXT')}
                        /></Row>
                        <Row className={classes.row}><OrderButton
                            text={t('LITTLE_MOMSTER.CONTACT.US')}
                        /></Row>
                    </form>
                </Col>
            </Row>
        </Container>)
};

export default Contact;
