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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ut luctus urna. Donec venenatis, diam vel ultricies ultrices, lacus nunc ornare lacus, eu mollis neque ex ut risus. Donec sollicitudin ultricies suscipit. Proin nec volutpat felis. Fusce rutrum ultrices pharetra. Praesent pretium, metus eu vestibulum hendrerit, sapien lectus ultricies ligula, id fermentum est risus a lectus. Morbi non eleifend nisi. Donec eleifend interdum lobortis. Cras bibendum sollicitudin volutpat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Morbi pharetra elementum ante sed imperdiet. Duis rhoncus nec augue et dictum. Vestibulum vel volutpat dui, euismod lobortis dolor. Aenean eget lacinia metus, et tincidunt est.
                </Col>
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
                            maxRows={10}
                            aria-label="maximum height"
                            placeholder="Maximum 10 rows"
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
