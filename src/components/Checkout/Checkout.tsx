import React, {FunctionComponent, useContext} from 'react';
import {Box, Grid, TextField} from '@mui/material';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAddressCard, faCreditCard, faHome} from "@fortawesome/free-solid-svg-icons";
import classes from './Checkout.module.css';
import {useHistory} from 'react-router-dom';
import "react-step-progress/dist/index.css";
import StepProgressBar from "react-step-progress";
import {useForm} from "react-hook-form";
import CountryOptions from "./CountryOptions";
import CartContext from "../../store/cart-context";
import {useTranslation} from "react-i18next";

export const Checkout: FunctionComponent = () => {
    const cartCtx = useContext(CartContext);
    const {t} = useTranslation('translation');

    const submitOrderHandler = async (userData) => {
        await fetch('https://webshop-c8940-default-rtdb.europe-west1.firebasedatabase.app/orders.json', {
            method: 'POST',
            body: JSON.stringify({
                user: userData,
                orderedItems: cartCtx.items,
            }),
        });
        history.push('/confirmation');
    };

    const {
        handleSubmit,
    } = useForm({});

    const onSubmit = async (country) => {
        console.log(country);
    };

    const history = useHistory();
    const step1Content =
        <form onSubmit={handleSubmit(onSubmit)}>
            <Box className={classes.title}><h2><FontAwesomeIcon className={classes.icon} icon={faAddressCard}/>{t('LITTLE_MOMSTER.SHOPPING_CART.ADDRESS')}
            </h2></Box>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <TextField label={t('LITTLE_MOMSTER.SHOPPING_CART.FIRST_NAME')} variant="outlined" fullWidth/>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField label={t('LITTLE_MOMSTER.SHOPPING_CART.LAST_NAME')} variant="outlined" fullWidth/>
                </Grid>
                <Grid item xs={12}>
                    <TextField label={t('LITTLE_MOMSTER.SHOPPING_CART.ADDRESS')} variant="outlined" fullWidth/>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField label={t('LITTLE_MOMSTER.SHOPPING_CART.POSTAL_CODE')} variant="outlined" fullWidth/>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField label={t('LITTLE_MOMSTER.SHOPPING_CART.CITY')} variant="outlined" fullWidth/>
                </Grid>
                <Grid item xs={12}>
                    <CountryOptions/>
                </Grid>
            </Grid>
        </form>;

    const step2Content = <Box className={classes.title}>
        <h2><FontAwesomeIcon className={classes.icon} icon={faHome}/>{t('LITTLE_MOMSTER.SHOPPING_CART.DELIVERY_ADDRESS')}</h2>
        <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
                <TextField label={t('LITTLE_MOMSTER.SHOPPING_CART.FIRST_NAME')} variant="outlined" fullWidth/>
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField label={t('LITTLE_MOMSTER.SHOPPING_CART.LAST_NAME')} variant="outlined" fullWidth/>
            </Grid>
            <Grid item xs={12}>
                <TextField label={t('LITTLE_MOMSTER.SHOPPING_CART.ADDRESS')} variant="outlined" fullWidth/>
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField label={t('LITTLE_MOMSTER.SHOPPING_CART.POSTAL_CODE')} variant="outlined" fullWidth/>
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField label={t('LITTLE_MOMSTER.SHOPPING_CART.CITY')} variant="outlined" fullWidth/>
            </Grid>
            <Grid item xs={12}>
                <CountryOptions/>
            </Grid>
        </Grid>
    </Box>;
    const step3Content = <Box className={classes.title}><h2><FontAwesomeIcon className={classes.icon}
                                                                             icon={faCreditCard}/>{t('LITTLE_MOMSTER.SHOPPING_CART.PAYMENT')}</h2></Box>;


    return (
        <form noValidate autoComplete="off">
            <StepProgressBar
                startingStep={0}
                steps={[
                    {
                        label:  `${t('LITTLE_MOMSTER.SHOPPING_CART.ADDRESS')}`,
                        name: `${t('LITTLE_MOMSTER.SHOPPING_CART.ADDRESS')}`,
                        content: step1Content
                    },
                    {
                        label: `${t('LITTLE_MOMSTER.SHOPPING_CART.DELIVERY_ADDRESS')}`,
                        name: `${t('LITTLE_MOMSTER.SHOPPING_CART.DELIVERY_ADDRESS')}`,
                        content: step2Content
                    },
                    {
                        label: `${t('LITTLE_MOMSTER.SHOPPING_CART.PAYMENT')}`,
                        name: `${t('LITTLE_MOMSTER.SHOPPING_CART.PAYMENT')}`,
                        content: step3Content,
                    },
                ]}
                onSubmit={(userdata) => submitOrderHandler(userdata)}/>

        </form>
    );
};
