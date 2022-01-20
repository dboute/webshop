import {NavLink} from 'react-router-dom';


import classes from './ProductItem.module.css';

const ProductItem = (props: any) => {
    const firebaseUrl = 'https://firebasestorage.googleapis.com/v0/b/webshop-c8940.appspot.com/o/';

    const price = `€${props.price.toFixed(2)}`;

    return (
        <li className={classes.product}>
            <div>
                <NavLink to={`/products/${props.type}/${props.id}`}>
                    <img className={classes.image} src={`${firebaseUrl}${props.picture}`} alt={props.description}/>
                </NavLink>
                <h3>{props.name}</h3>
                <div className={classes.price}>{price}</div>
            </div>
        </li>
    );
};

export default ProductItem;
