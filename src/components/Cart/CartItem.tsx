import classes from './CartItem.module.css';
import {QuantityPicker} from "../UI/QuantityPicker";
import {Button, Col, Container, Row} from "react-bootstrap";
import {faTrash} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const CartItem = (props) => {
    const firebaseUrl = 'https://firebasestorage.googleapis.com/v0/b/webshop-c8940.appspot.com/o/';

    const price = `€${props.price.toFixed(2)}`;
    const total = props.price * props.amount;
    const totalItemPrice = `€${total.toFixed(2)}`;

    return (
        <Container>
            <Row>
                <Col sm={4}>
                    <img className={classes.image} src={`${firebaseUrl}${props.picture}`} alt={props.description}/>
                </Col>
                <Col xs={6} className={classes.itemTitle}>
                    {props.name} - {props.color}
                </Col>
            </Row>
            <Row>
                <Col className={classes.price} xs={4}>{price}
                </Col>
            </Row>
            <Row className={classes.row}>
                <Col xs={6} sm={4}> <QuantityPicker onRemove={props.onRemove} onAdd={props.onAdd} min={0} max={5} value={props.amount}/></Col>
                <Col className={classes.totalItemPrice}>{totalItemPrice}
                    <Button className={classes.button} onClick={props.onRemoveAll}>
                        <FontAwesomeIcon icon={faTrash} />
                    </Button></Col>
            </Row>
        </Container>
    );
};

export default CartItem;
