import React, {Fragment, useState} from 'react';

import classes from './Layout.module.css';
import MainNavigation from './MainNavigation';
import Cart from "../Cart/Cart";
import CartProvider from "../../store/CartProvider";
import Footer from "../UI/Footer";
import Logo from "./Logo";
import HeaderCartButton from "./HeaderCartButton";

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
                <HeaderCartButton onClick={showCartHandler}/>
                <Logo/>
                <MainNavigation/>
                {cartIsShown && <Cart onClose={hideCartHandler}/>}
                <main className={classes.main}>{props.children}</main>
                <Footer/>
            </CartProvider>
        </Fragment>
    );
};

export default Layout;
