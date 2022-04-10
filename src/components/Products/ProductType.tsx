import {NavLink} from 'react-router-dom';


import classes from './ProductType.module.css';
import {useTranslation} from "react-i18next";

const ProductType = (props: any) => {
    const firebaseUrl = 'https://firebasestorage.googleapis.com/v0/b/webshop-c8940.appspot.com/o/';
    const {t} = useTranslation('translation');

    return (
        <li className={classes.product}>
            <div>
                <h3>{t(`LITTLE_MOMSTER.PRODUCTS.${props.type?.toUpperCase()}`)}</h3>
                <NavLink to={`/products/${props.type}`}>
                    <img className={classes.image} src={`${firebaseUrl}${props.picture}`} alt={props.description}/>
                </NavLink>
            </div>
        </li>
    );
};

export default ProductType;
