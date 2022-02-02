import React, {useState} from 'react';

import classes from './Layout.module.css';
import MainNavigation from './MainNavigation';
import Cart from "../Cart/Cart";
import CartProvider from "../../store/CartProvider";
import Footer from "./Footer";
import Logo from "./Logo";
import HeaderCartButton from "./HeaderCartButton";
import {NavLink} from 'react-router-dom';


const Layout = (props) => {
    const [cartIsShown, setCartIsShown] = useState(false);

    const showCartHandler = () => {
        setCartIsShown(true);
    };

    const hideCartHandler = () => {
        setCartIsShown(false);
    };

    return (
        <CartProvider>
            {/*<NavLink to='/cart'>*/}
            {/*    <HeaderCartButton/>*/}
            {/*</NavLink>*/}
            <Logo/>
            <MainNavigation/>
            {cartIsShown && <Cart onClose={hideCartHandler}/>}
            <main className={classes.main}>{props.children}</main>
            <Footer/>
        </CartProvider>
    );
};

export default Layout;
