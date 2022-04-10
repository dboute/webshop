import {NavLink} from 'react-router-dom';


import classes from './ProductItem.module.css';
import {useTranslation} from "react-i18next";

const ProductItem = (props: any) => {
    const firebaseUrl = 'https://firebasestorage.googleapis.com/v0/b/webshop-c8940.appspot.com/o/';
    const {t} = useTranslation('translation');

    const price = `€${props.price.toFixed(2)}`;

    return (
        <li className={classes.product}>
            <div>
                <NavLink to={`/products/${props.type}/${props.id}`}>
                    <img className={classes.image} src={`${firebaseUrl}${props.picture}`} alt={props.description}/>
                </NavLink>
                <h3>{t(`LITTLE_MOMSTER.${props.type?.toUpperCase()}.${props.name?.toUpperCase()}`)}</h3>
                <div className={classes.price}>{price}</div>
            </div>
        </li>
    );
};

export default ProductItem;
