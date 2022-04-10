import * as React from 'react';
import {useEffect, useState} from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import {styled} from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import classes from './Selector.module.css';
import {getAvailableColors} from "../../api/products/get-available-colors";
import LoadingSpinner from "./LoadingSpinner";
import {useTranslation} from "react-i18next";

const Item = styled(Paper)(({theme}) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));
export default function SelectLabels(props) {
    const [colors, setColors] = useState<any>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [httpError, setHttpError] = useState();
    const {t} = useTranslation('translation');

    const handleChange = (event) => {
        props.parentCallback(event.target.value);
        props.onChange(event, event.target.value);
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
                    <Item className={classes.item}>{t(`LITTLE_MOMSTER.COLORS.${color.name?.toUpperCase()}`)}</Item>
                </Grid>
            </Grid>
        </MenuItem>));

    return (
        <div>
                <InputLabel id="color-select-label">{t('LITTLE_MOMSTER.COLORS.TITLE')}</InputLabel>
                <Select
                    className={classes.select}
                    labelId="color-select-label"
                    id="color-select"
                    label="Colors"
                    inputRef={props.inputRef}
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
        </div>
    );
}
