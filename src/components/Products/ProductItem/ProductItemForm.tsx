import { useState } from 'react';

import { QuantityPicker } from 'react-qty-picker';
import classes from './ProductItemForm.module.css';
import Button from "../../UI/Button";

const ProductItemForm = (props: any) => {
  const [amount, setAmount] = useState<number>(0);

  const submitHandler = (event: any) => {
    event.preventDefault();

    props.onAddToCart(amount);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
        <QuantityPicker min={0} max={5} onChange={()=>{ // here value is the final update value of the component
            setAmount(+amount);
        }}/>

      <Button text='Bestel nu!' />
    </form>
  );
};

export default ProductItemForm;
