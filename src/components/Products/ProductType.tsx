import {NavLink} from 'react-router-dom';


import classes from './ProductType.module.css';

const ProductType = (props: any) => {
    const firebaseUrl = 'https://firebasestorage.googleapis.com/v0/b/webshop-c8940.appspot.com/o/';

    return (
        <li className={classes.product}>
            <div>
                <h3>{props.type}</h3>
                <NavLink to={`/products/${props.type}`}>
                    <img className={classes.image} src={`${firebaseUrl}${props.picture}`} alt={props.description}/>
                </NavLink>
            </div>
        </li>
    );
};

export default ProductType;
