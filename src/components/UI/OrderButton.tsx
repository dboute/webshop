import React from 'react';

import classes from './Button.module.css';

const OrderButton = props =>  {
    return (<button onClick={props.onClick} className={classes.button}>{props.text}</button>);
}

export default OrderButton;
