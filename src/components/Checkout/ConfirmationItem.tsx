import classes from './ConfirmationItem.module.css';
import { Col, Container, Row} from "react-bootstrap";

const ConfirmationItem = (props) => {
    const firebaseUrl = 'https://firebasestorage.googleapis.com/v0/b/webshop-c8940.appspot.com/o/';

    const price = `€${props.price.toFixed(2)}`;

    return (
        <Container>
            <Row>
                <Col>
                    <img className={classes.image} src={`${firebaseUrl}${props.picture}`} alt={props.description}/>
                </Col>
                <Col xs={6} className={classes.itemTitle}>
                    {props.name} - {props.color}
                    <Row>
                        <Col xs={6} className={classes.itemTitle}>
                        {`quantity: ${props.amount}`}
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default ConfirmationItem;
