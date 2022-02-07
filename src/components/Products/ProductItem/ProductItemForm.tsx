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

    const getPickerValue = (value) =>{
        setAmount(value);
        console.log(value) // Here you can get the value of the Quantity picker
    }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
        <QuantityPicker min={0} max={5} onChange={(getPickerValue)}/>
      <Button text='Bestel nu!' type='submit' />
    </form>
  );
};

export default ProductItemForm;
