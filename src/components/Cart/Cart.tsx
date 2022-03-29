import React, {useContext, useState} from 'react';
import CartItem from './CartItem';
import classes from './Cart.module.css';
import CartContext from '../../store/cart-context';
import {faShoppingBag} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Box} from "@mui/material";
import Button from "../UI/Button";
import { useHistory } from 'react-router-dom';

const Cart = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [didSubmit, setDidSubmit] = useState(false);
    const cartCtx = useContext<any>(CartContext);
    const history = useHistory();

    const totalAmount = `€${cartCtx.totalAmount.toFixed(2)}`;
    const hasItems = cartCtx.items.length > 0;

    const cartItemRemoveHandler = (id) => {
        cartCtx.removeItem(id, false);
    };

    const cartItemRemoveAllHandler = (id) => {
        cartCtx.removeItem(id, true);
    };

    const cartItemAddHandler = (item) => {
        cartCtx.addItem({...item, amount: 1});
    };

    const orderHandler = () => {
        console.log("test");
        history.push('/checkout');
    };

    const modalActions = (
        <div className={classes.actions}>
            {hasItems && (
                <Button text='Bestel nu!' onClick={orderHandler} />
            )}
        </div>
    );

    const cartModalContent = (
        <React.Fragment>
            {cartCtx.items.map((item) => (
                <CartItem
                    key={item.id}
                    name={item.name}
                    amount={item.amount}
                    price={item.price}
                    color={item.color}
                    picture={item.picture}
                    onRemove={cartItemRemoveHandler.bind(null, item.id)}
                    onRemoveAll={cartItemRemoveAllHandler.bind(null, item.id)}
                    onAdd={cartItemAddHandler.bind(null, item)}
                />
            ))}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            {modalActions}
        </React.Fragment>
    );

    const isSubmittingModalContent = <p>Sending order data...</p>;

    const didSubmitModalContent = (
        <React.Fragment>
            <p>Successfully sent the order!</p>
            <div className={classes.actions}>

            </div>
        </React.Fragment>
    );

    return (<>
            <Box className={classes.title}><h2><FontAwesomeIcon icon={faShoppingBag}/>Winkelmandje</h2></Box>
            <Box>
                {!isSubmitting && !didSubmit && cartModalContent}
                {isSubmitting && isSubmittingModalContent}
                {!isSubmitting && didSubmit && didSubmitModalContent}
            </Box>
        </>
    );
};

export default Cart;
