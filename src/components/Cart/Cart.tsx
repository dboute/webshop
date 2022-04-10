import React, {useContext} from 'react';
import CartItem from './CartItem';
import classes from './Cart.module.css';
import CartContext from '../../store/cart-context';
import {faShoppingBag} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Box} from "@mui/material";
import OrderButton from "../UI/OrderButton";
import { useHistory } from 'react-router-dom';
import {useTranslation} from "react-i18next";

const Cart = () => {
    const cartCtx = useContext<any>(CartContext);
    const history = useHistory();
    const {t} = useTranslation('translation');

    const totalAmount = `€${cartCtx.totalAmount.toFixed(2)}`;
    const hasItems = cartCtx.items.length > 0;

    const cartItemRemoveHandler = (item) => {
        cartCtx.removeItem(item, false);
    };

    const cartItemRemoveAllHandler = (item) => {
        cartCtx.removeItem(item, true);
    };

    const cartItemAddHandler = (item) => {
        cartCtx.addItem({...item, amount: 1});
    };

    const orderHandler = () => {
        history.push('/checkout');
    };

    const modalActions = (
        <div className={classes.actions}>
            {hasItems && (
                <OrderButton text={t('LITTLE_MOMSTER.PRODUCTS.ORDER_NOW')} onClick={orderHandler} />
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
                    onRemove={cartItemRemoveHandler.bind(null, item)}
                    onRemoveAll={cartItemRemoveAllHandler.bind(null, item)}
                    onAdd={cartItemAddHandler.bind(null, item)}
                />
            ))}
            <div className={classes.total}>
                <span>{t('LITTLE_MOMSTER.SHOPPING_CART.TOTAL_AMOUNT')}</span>
                <span>{totalAmount}</span>
            </div>
            {modalActions}
        </React.Fragment>
    );


    return (<>
            <Box className={classes.title}><h2><FontAwesomeIcon icon={faShoppingBag}/>{t('LITTLE_MOMSTER.SHOPPING_CART.TITLE')}</h2></Box>
            <Box>
                {cartModalContent}
            </Box>
        </>
    );
};

export default Cart;
