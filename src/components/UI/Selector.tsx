import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {styled} from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import classes from './Selector.module.css';

const Item = styled(Paper)(({theme}) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));
export default function SelectLabels() {
    const [color, setColor] = React.useState('');

    const handleChange = (event) => {
        setColor(event.target.value);
    };

    return (
        <div>
            <FormControl sx={{m: 1, minWidth: 120}}>
                <InputLabel id="demo-simple-select-helper-label">Kleur</InputLabel>
                <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={color}
                    label="Kleuren"
                    onChange={handleChange}
                >
                    <MenuItem value={'rood'}>
                        <Grid container spacing={2}>
                            <Grid item xs={2}>
                                <Item className={classes.color} style={{'backgroundColor': 'red'}}/>
                            </Grid>
                            <Grid item xs={10}>
                                <Item className={classes.item}>Rood</Item>
                            </Grid>
                        </Grid>
                    </MenuItem>
                    <MenuItem disabled={true} value={'blauw'}>
                        <Grid container spacing={2}>
                            <Grid item xs={2}>
                                <Item className={classes.color} style={{'backgroundColor': 'blue'}}/>
                            </Grid>
                            <Grid item xs={10}>
                                <Item className={classes.item}>Blauw</Item>
                            </Grid>
                        </Grid>
                    </MenuItem>
                </Select>
            </FormControl>
        </div>
    );
}
