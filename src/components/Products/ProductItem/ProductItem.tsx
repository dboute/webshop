import { useContext } from 'react';

import ProductItemForm from './ProductItemForm';
import classes from './ProductItem.module.css';
import CartContext from '../../../store/cart-context';

const ProductItem = (props : any) => {
  const cartCtx = useContext(CartContext);

  const price = `$${props.price.toFixed(2)}`;

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
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <ProductItemForm onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default ProductItem;
