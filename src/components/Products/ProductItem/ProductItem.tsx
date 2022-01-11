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
                <NavLink to={`/products/${props.id}`}>
                    <img className={classes.image} src={`${firebaseUrl}${props.picture}`} alt={props.description}/>
                </NavLink>
                <h4>{props.name}</h4>
                <div className={classes.description}>{props.description}</div>
                <div className={classes.price}>{price}</div>
                {/*<ProductItemForm onAddToCart={addToCartHandler}/>*/}
            </div>
        </li>
    );
};

export default ProductItem;
