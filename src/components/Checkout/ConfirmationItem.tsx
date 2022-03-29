import classes from './ConfirmationItem.module.css';
import { Col, Container, Row} from "react-bootstrap";

const ConfirmationItem = (props) => {
    const firebaseUrl = 'https://firebasestorage.googleapis.com/v0/b/webshop-c8940.appspot.com/o/';


    return (
        <Container>
            <Row>
                <Col>
                    <img className={classes.image} src={`${firebaseUrl}${props.picture}`} alt={props.description}/>
                </Col>
                <Col xs={6} className={classes.itemTitle}>
                    {props.name}
                    <Row>
                        <Col xs={12} className={classes.item}>
                            {`Color: ${props.color}`}
                        </Col>
                        <Col xs={12} className={classes.item}>
                        {`quantity: ${props.amount}`}
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default ConfirmationItem;
