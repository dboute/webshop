import { useRef, useState } from 'react';

import Input from '../../UI/Input';
import classes from './ProductItemForm.module.css';
import Button from "../../UI/Button";

const ProductItemForm = (props: any) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef<any>();

  const submitHandler = (event: any) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current?.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }

    props.onAddToCart(enteredAmountNumber);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label='Aantal'
        input={{
          id: 'amount',
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1',
        }}
      />
      <Button text='Bestel nu!' />
      {!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
    </form>
  );
};

export default ProductItemForm;
