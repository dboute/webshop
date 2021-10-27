import {Fragment, useState} from 'react';

import classes from './Layout.module.css';
import MainNavigation from './MainNavigation';
import Cart from "../Cart/Cart";
import CartProvider from "../../store/CartProvider";


const Layout = (props) => {
    const [cartIsShown, setCartIsShown] = useState(false);

    const showCartHandler = () => {
        setCartIsShown(true);
    };

    const hideCartHandler = () => {
        setCartIsShown(false);
    };

    return (
        <Fragment>
            <CartProvider>
                <MainNavigation onShowCart={showCartHandler}/>
                {cartIsShown && <Cart onClose={hideCartHandler}/>}
                <main className={classes.main}>{props.children}</main>
            </CartProvider>
        </Fragment>
    );
};

export default Layout;
