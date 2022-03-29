import React, {useContext, useState} from 'react';
import classes from './Confirmation.module.css';
import CartContext from '../../store/cart-context';
import {Box} from "@mui/material";
import ConfirmationItem from "./ConfirmationItem";

const Confirmation = () => {
    const cartCtx = useContext<any>(CartContext);
    const [items,setItems] = useState(cartCtx.items);
    const [totalAmount,setTotalAmount] = useState(`€${cartCtx.totalAmount.toFixed(2)}`);

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
            <p className={classes.subTitle}>Bekijk uw inbox voor de bevestigingsmail.</p>
            <Box>
                <p>Totale bestelling: {totalAmount}</p>
                <p>Leveringsdatum: { getCurrentDate()}</p>
                <p>Bestellingsnummer: LM00501</p>
            </Box>
            { items.length > 1 && <Box className={classes.title}><h2>{`${items.length} Items`}</h2></Box> }
            { items.length < 1 && <Box className={classes.title}><h2>{`${items.length} Item`}</h2></Box> }
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
            <Box className={classes.title}><h1>Bedankt voor uw bestelling!</h1></Box>
            <Box>
                { cartModalContent}
            </Box>
        </>
    );
};

export default Confirmation;
