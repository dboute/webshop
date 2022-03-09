import React from 'react';
import {InputLabel, Select} from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";

class countryOptions extends React.Component {
    render() {
        return (
            <FormControl fullWidth>
                <InputLabel id="country-select-label">Country</InputLabel>
                <Select className="custom-select" type="select" label="Country" name="coSelectCountry" id="coCountry">
                    <MenuItem data-code="BE" value="Belgium">Belgium</MenuItem>
                    <MenuItem data-code="FR" value="France">France</MenuItem>
                    <MenuItem data-code="DE" value="Germany">Germany</MenuItem>
                    <MenuItem data-code="NL" value="Netherlands">Netherlands</MenuItem>
                </Select>
            </FormControl>
        );
    }
}

export default countryOptions;
