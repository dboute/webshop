import classes from './CartItem.module.css';
import {QuantityPicker} from "../UI/QuantityPicker";
import {Col, Container, Row} from "react-bootstrap";

const CartItem = (props) => {
    const firebaseUrl = 'https://firebasestorage.googleapis.com/v0/b/webshop-c8940.appspot.com/o/';

    const price = `€${props.price.toFixed(2)}`;
    const total = props.price * props.amount;
    const totalItemPrice = `€${total.toFixed(2)}`;

    return (
        <Container>
            <Row>
                <Col>
                    <img className={classes.image} src={`${firebaseUrl}${props.picture}`} alt={props.description}/>
                </Col>
                <Col xs={6} className={classes.itemTitle}>
                    {props.name} - {props.color}
                </Col>
            </Row>
            <Row>
                <Col className={classes.price} xs={4}>{price}</Col>
            </Row>
            <Row className={classes.row}>
                <Col xs={6}> <QuantityPicker min={0} max={5} value={props.amount}/></Col>
                <Col className={classes.totalItemPrice}>{totalItemPrice}</Col>
            </Row>
        </Container>
    );
};

export default CartItem;
