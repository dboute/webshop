import React, {FunctionComponent} from 'react';
import {Box, FormHelperText, Grid, InputLabel, Select, TextField, Typography} from '@mui/material';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAddressCard, faHome , faCreditCard} from "@fortawesome/free-solid-svg-icons";
import classes from './Checkout.module.css';
import {useHistory} from 'react-router-dom';
import "react-step-progress/dist/index.css";
import StepProgressBar from "react-step-progress";
import FormControl from '@mui/material/FormControl';
import {useForm, Controller} from "react-hook-form";
import MenuItem from "@mui/material/MenuItem";
import ReactHookFormSelect from "../Layout/ReactHookFormSelect";
import {FormGroup, Label} from "reactstrap";
import CountryOptions from "./CountryOptions";

// interface CheckoutForm {
//     firstName;
//     lastName;
//     country;
// }

export const Checkout: FunctionComponent = () => {
    const orderHandler = () => {
        console.log("test");
        history.push('/confirmation');
    };

    const {
        handleSubmit,
        control,
    } = useForm({});

    const onSubmit = async (country) => {
        console.log(country);
    };

    const options = [
        { value: 'BE', label: 'België'},
    ];

    const history = useHistory();
    const step1Content =
        <form onSubmit={handleSubmit(onSubmit)} >
        <Box className={classes.title}><h2><FontAwesomeIcon className={classes.icon} icon={faAddressCard}/>Adres</h2></Box>
        <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
                <TextField label="First Name" variant="outlined" fullWidth />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField label="Last Name" variant="outlined" fullWidth />
            </Grid>
            <Grid item xs={12}>
                <TextField label="Address" variant="outlined" fullWidth />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField label="Postal/Zip Code" variant="outlined" fullWidth />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField label="City" variant="outlined" fullWidth />
            </Grid>
            <Grid item xs={12}>
                <CountryOptions />
            </Grid>
        </Grid>
    </form>;

    const step2Content = <Box className={classes.title}>
        <h2><FontAwesomeIcon className={classes.icon} icon={faHome}/>Leveringsadres</h2>
        <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
                <TextField label="First Name" variant="outlined" fullWidth />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField label="Last Name" variant="outlined" fullWidth />
            </Grid>
            <Grid item xs={12}>
                <TextField label="Address line 1" variant="outlined" fullWidth />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField label="Postal/Zip Code" variant="outlined" fullWidth />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField label="City" variant="outlined" fullWidth />
            </Grid>
            <Grid item xs={12}>
            </Grid>
        </Grid>
    </Box>;
    const step3Content = <Box className={classes.title}><h2><FontAwesomeIcon className={classes.icon} icon={faCreditCard}/>Betaling</h2></Box>;



    return (
        <form noValidate autoComplete="off">
            <StepProgressBar
                startingStep={0}
                steps={[
                    {
                        label: "Adres",
                        name: "Adres",
                        content: step1Content
                    },
                    {
                        label: "Leveringsadres",
                        name: "Leveringsadres",
                        content: step2Content
                    },
                    {
                        label: "Betaling",
                        name: "Betaling",
                        content: step3Content,
                    },
                ]}
                onSubmit={() => orderHandler()}/>

        </form>
    );
};
