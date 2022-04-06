import * as React from 'react';
import {useEffect, useState} from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {styled} from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import classes from './Selector.module.css';
import {getAvailableColors} from "../../api/products/get-available-colors";
import LoadingSpinner from "./LoadingSpinner";

const Item = styled(Paper)(({theme}) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));
export default function SelectLabels(props) {
    const [colors, setColors] = useState<any>([{hex: "#fc0330", name: "rood"}, {hex: "#2003fc", name: "blauw"}]);
    const [isLoading, setIsLoading] = useState(true);
    const [httpError, setHttpError] = useState();

    const handleChange = (event) => {
        props.parentCallback(event.target.value);
    };

    useEffect(() => {
        const fetchColors = async () => {
            var responseData = (await getAvailableColors());
            const loadedColors: object[] = [];

            for (const key in responseData) {
                loadedColors.push({
                    id: key,
                    name: responseData[key].name,
                    hex: responseData[key].hex,
                });
            }

            setColors(loadedColors);
            setIsLoading(false);
        };

        fetchColors().catch((error) => {
            setIsLoading(false);
            setHttpError(error.message);
        });
    }, []);

    const colorsList =
        colors.map((color) => (<MenuItem value={color.name}>
            <Grid container spacing={2}>
                <Grid item xs={2}>
                    <Item className={classes.color} style={{'backgroundColor': `${color.hex}`}}/>
                </Grid>
                <Grid item xs={10}>
                    <Item className={classes.item}>{color.name}</Item>
                </Grid>
            </Grid>
        </MenuItem>));

    return (
        <div>
            <FormControl className='formControl' fullWidth sx={{margin: 0, minWidth: 240}}>
                <InputLabel id="color-select-label">Kleur</InputLabel>
                <Select
                    className={classes.select}
                    labelId="color-select-label"
                    id="color-select"
                    label="Kleuren"
                    onChange={handleChange}>
                    {colorsList}
                    { isLoading &&
                        <section className={classes.ProductsLoading}>
                            <LoadingSpinner/>
                        </section>}
                    { colors.length === 0 &&
                        <section className={classes.NoProducts}>
                            <p>No products available for this category.</p>
                        </section>}
                    { httpError &&
                        <section className={classes.ProductsError}>
                            <p>{httpError}</p>
                        </section>}
                </Select>
            </FormControl>
        </div>
    );
}
