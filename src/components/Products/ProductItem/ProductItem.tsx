import {useContext} from 'react';
import {NavLink} from 'react-router-dom';


import classes from './ProductItem.module.css';
import CartContext from '../../../store/cart-context';

const ProductItem = (props: any) => {
    const firebaseUrl = 'https://firebasestorage.googleapis.com/v0/b/webshop-c8940.appspot.com/o/';
    const cartCtx = useContext(CartContext);

    const price = `€${props.price.toFixed(2)}`;

    const addToCartHandler = (amount: any) => {
        cartCtx.addItem({
            id: props.id,
            name: props.name,
            amount: amount,
            price: props.price
        });
    };

    return (
        <li className={classes.product}>
            <div>
                <h3>{props.name}</h3>
                {/*<div className={classes.description}>{props.description}</div>*/}
                <NavLink to={`/products/${props.id}`}>
                    <img width='200px' height='200px' src={`${firebaseUrl}${props.picture}`} alt={props.description}/>
                </NavLink>
                <div className={classes.price}>{price}</div>

                {/*<ProductItemForm onAddToCart={addToCartHandler}/>*/}
            </div>
        </li>
    );
};

export default ProductItem;
