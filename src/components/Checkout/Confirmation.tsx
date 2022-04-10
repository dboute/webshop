import React, {useContext, useState} from 'react';
import classes from './Confirmation.module.css';
import CartContext from '../../store/cart-context';
import {Box} from "@mui/material";
import ConfirmationItem from "./ConfirmationItem";
import {useTranslation} from "react-i18next";

const Confirmation = () => {
    const cartCtx = useContext<any>(CartContext);
    const [items,setItems] = useState(cartCtx.items);
    const [totalAmount,setTotalAmount] = useState(`€${cartCtx.totalAmount.toFixed(2)}`);
    const {t} = useTranslation('translation');

    cartCtx.clearCart();

    const getCurrentDate = (separator='/') =>{

        let nextMonth = new Date()
        let day = nextMonth.getDate();
        let month = nextMonth.getMonth() + 2;
        let year = nextMonth.getFullYear();

        return `${day}${separator}${month<10?`0${month}`:`${month}`}${separator}${year}`
    }

    const cartModalContent = (
        <React.Fragment>
            <p className={classes.subTitle}>{t('LITTLE_MOMSTER.SHOPPING_CART.CONFIRMATION_MAIL')}</p>
            <Box>
                <p>{t('LITTLE_MOMSTER.SHOPPING_CART.ORDER_TOTAL')}: {totalAmount}</p>
                <p>{t('LITTLE_MOMSTER.SHOPPING_CART.ORDER_DATE')}: { getCurrentDate()}</p>
                <p>{t('LITTLE_MOMSTER.SHOPPING_CART.ORDER_NUMBER')}: LM00501</p>
            </Box>
            { items.length !== 1 && <Box className={classes.title}><h2>{`${items.length} ${t('LITTLE_MOMSTER.SHOPPING_CART.ARTICLES')}`}</h2></Box> }
            { items.length === 1 && <Box className={classes.title}><h2>{`${items.length} ${t('LITTLE_MOMSTER.SHOPPING_CART.ARTICLE')}`}</h2></Box> }
            {items.map((item) => (
                <ConfirmationItem
                    key={item.id}
                    name={item.name}
                    amount={item.amount}
                    price={item.price}
                    color={item.color}
                    picture={item.picture}
                />
            ))}
        </React.Fragment>
    );

    return (<>
            <Box className={classes.title}><h1>{t('LITTLE_MOMSTER.SHOPPING_CART.THANK_YOU')}</h1></Box>
            <Box>
                { cartModalContent}
            </Box>
        </>
    );
};

export default Confirmation;
