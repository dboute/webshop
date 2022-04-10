import {InputLabel, Select} from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import {useTranslation} from "react-i18next";

const CountryOptions = () => {
    const {t} = useTranslation('translation');

    return (
        <FormControl fullWidth>
            <InputLabel id="country-select-label">{t('LITTLE_MOMSTER.SHOPPING_CART.COUNTRY')}</InputLabel>
            <Select className="custom-select" type="select" label="Country"
                    name="coSelectCountry" id="coCountry">
                <MenuItem data-code="BE" value="Belgium">Belgium</MenuItem>
                <MenuItem data-code="FR" value="France">France</MenuItem>
                <MenuItem data-code="DE" value="Germany">Germany</MenuItem>
                <MenuItem data-code="NL" value="Netherlands">Netherlands</MenuItem>
            </Select>
        </FormControl>
    );
}

export default CountryOptions;
