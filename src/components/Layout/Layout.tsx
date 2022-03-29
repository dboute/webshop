import React from 'react';

import classes from './Layout.module.css';
import MainNavigation from './MainNavigation';
import CartProvider from "../../store/CartProvider";
import Footer from "./Footer";
import Logo from "./Logo";
import HeaderCartButton from "./HeaderCartButton";
import { useHistory } from 'react-router-dom';


const Layout = (props) => {
    const history = useHistory();

    const showCartHandler = () => {
        history.push('/cart');
    };

    return (
        <CartProvider>
            <HeaderCartButton onClick={showCartHandler}/>
            <Logo/>
            <MainNavigation/>
            <main className={classes.main}>{props.children}</main>
            <Footer/>
        </CartProvider>
    );
};

export default Layout;
