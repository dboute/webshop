import Products from './components/Products/Products';
import {Redirect, Route, Switch} from 'react-router-dom';
import Layout from "./components/Layout/Layout";
import 'bootstrap';
import './index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import {dom, library} from '@fortawesome/fontawesome-svg-core'
import {fas} from '@fortawesome/free-solid-svg-icons'
import {far} from '@fortawesome/free-regular-svg-icons'
import {fab} from '@fortawesome/free-brands-svg-icons'
import NotFound from "./pages/Home/NotFound";
import Home from "./pages/Home/Home";
import AboutUs from "./pages/AboutUs/AboutUs";
import Contact from "./pages/Contact/Contact";
import ProductDetail from "./components/Products/ProductItem/ProductDetail";
import React from "react";
import Cart from "./components/Cart/Cart";

function App() {
    library.add(fas, far, fab);
    dom.i2svg()
    return (
        <Layout>
            <Switch>
                <Route path='/' exact>
                    <Redirect to='/home'/>
                </Route>
                <Route path='/home' exact>
                    <Home/>
                </Route>
                <Route path='/products/:type/:productId' exact>
                    <ProductDetail/>
                </Route>
                <Route path='/products/:type' exact>
                    <Products/>
                </Route>
                <Route path='/contact' exact>
                    <Contact/>
                </Route>
                <Route path='/cart' exact>
                    <Cart/>
                </Route>
                <Route path='/about-us' exact>
                    <AboutUs/>
                </Route>
                <Route path='*'>
                    <NotFound/>
                </Route>
            </Switch>
        </Layout>
    );
}

export default App;
