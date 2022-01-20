import {TextareaAutosize, TextField} from "@mui/material";
import {Col, Container, Row} from "react-bootstrap";
import classes from './Contact.module.css';
import Button from "../../components/UI/Button";

const Contact = () => {
    return (
        <Container>
            <Row className={classes.center}>
                <h2>Contacteer ons</h2>
            </Row>
            <Row className={classes.row}>
                <Col className={classes.col}>
                    <form action="/action_page.php">
                        <Row className={classes.row}><TextField
                            required
                            id="outlined-required"
                            label="Naam"
                        /></Row>
                        <Row className={classes.row}><TextField
                            required
                            id="outlined-required"
                            label="Email"
                        /></Row>
                        <Row className={classes.row}><TextareaAutosize
                            maxLength={ 250 }
                            aria-label="maximum height"
                            placeholder="Maximum 250 characters"
                        /></Row>
                        <Row className={classes.row}><Button
                            text='Verstuur'
                        /></Row>
                    </form>
                </Col>
            </Row>
        </Container>)
};

export default Contact;
