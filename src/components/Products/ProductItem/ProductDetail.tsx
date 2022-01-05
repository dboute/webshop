import {useParams} from 'react-router-dom';
import classes from './ProductDetail.module.css';
import Grid from "@material-ui/core/Grid";
import ProductItemForm from "./ProductItemForm";
import {useCallback, useContext, useEffect, useState} from "react";
import CartContext from "../../../store/cart-context";
import {getProduct} from "../../../api/products/get-product";

const ProductDetail = (props: any) => {
    const {productId} = useParams();
    const firebaseUrl = 'https://firebasestorage.googleapis.com/v0/b/webshop-c8940.appspot.com/o/';
    const [product, setProduct] = useState<any>({
        id: 0,
        name: 'test',
        price: 10
    });
    const cartCtx = useContext(CartContext);

    const fetchProduct = useCallback(async () => {
        let response  = await getProduct(productId);
        setProduct(response)
    }, [])

    useEffect(() => {
        fetchProduct()
    }, [fetchProduct])

    const addToCartHandler = (amount: any) => {
        cartCtx.addItem({
            id: props.id,
            name: props.name,
            amount: amount,
            price: props.price
        });
    };

    return (
        <section className={classes.products}>
            <Grid container justifyContent="center" spacing={1}>
                <img width='200px' height='200px' src={`${firebaseUrl}${product.picture}`} alt={props.description}/>
            </Grid>
            <Grid container justifyContent="center" spacing={1}>
                <figure>
                    <p>{product.name}</p>
                    <figcaption>{product.description}</figcaption>
                    <div className={classes.price}>{product.description}</div>
                    <ProductItemForm onAddToCart={addToCartHandler}/>
                </figure>
            </Grid>
        </section>
    );
};

export default ProductDetail;
