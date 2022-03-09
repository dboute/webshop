import React, {useContext, useState} from 'react';
import classes from './Confirmation.module.css';
import CartContext from '../../store/cart-context';
import {Box} from "@mui/material";
import ConfirmationItem from "./ConfirmationItem";

const Confirmation = (props) => {
    const cartCtx = useContext<any>(CartContext);

    const totalAmount = `€${cartCtx.totalAmount.toFixed(2)}`;
    var now = new Date();
    var nextMonth = new Date(now.getFullYear(), now.getMonth()+2, now.getDay());

    const cartModalContent = (
        <React.Fragment>
            <p className={classes.subTitle}>Bekijk uw inbox voor de bevestigingsmail.</p>
            <Box>
                <p>Totale bestelling: {totalAmount}</p>
                <p>Leveringsdatum: { nextMonth.getDay() + '/' + nextMonth.getMonth() + '/' + nextMonth.getFullYear()}</p>
                <p>Bestellingsnummer: LM00501</p>
            </Box>
            { cartCtx.items.length > 1 && <Box className={classes.title}><h2>{`${cartCtx.items.length} Items`}</h2></Box> }
            { cartCtx.items.length < 1 && <Box className={classes.title}><h2>{`${cartCtx.items.length} Item`}</h2></Box> }
            {cartCtx.items.map((item) => (
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
            <Box className={classes.title}><h1>Bedankt voor uw bestelling!</h1></Box>
            <Box>
                { cartModalContent}
            </Box>
        </>
    );
};

export default Confirmation;
