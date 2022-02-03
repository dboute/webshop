import {useParams} from 'react-router-dom';
import classes from './ProductDetail.module.css';
import ProductItemForm from "./ProductItemForm";
import {useCallback, useContext, useEffect, useState} from "react";
import CartContext from "../../../store/cart-context";
import {getProduct} from "../../../api/products/get-product";
import {Breadcrumb, Col, Container, Row} from "react-bootstrap";
import ImageGallery from 'react-image-gallery';
import Selector from '../../UI/Selector';
import {getAvailableProducts} from "../../../api/products/get-available-products";
import {NavLink} from 'react-router-dom';


const ProductDetail = () => {
    const {productId} = useParams();
    const firebaseUrl = 'https://firebasestorage.googleapis.com/v0/b/webshop-c8940.appspot.com/o/';
    const [product, setProduct] = useState<any>({
        id: 0,
        name: 'test',
        price: 10
    });
    const [similarProducts, setSimilarProducts] = useState<any[]>([]);
    const cartCtx = useContext(CartContext);

    // const similarProducts: object[] = [];

    const fetchSimilarProducts = useCallback(async() => {
        var responseData = (await getAvailableProducts());

        for (const key in responseData) {
            if (responseData[key].name === product.name) {
                setSimilarProducts(similarProducts => [...similarProducts, {
                    id: key,
                    original: `${firebaseUrl}${responseData[key].picture}`,
                    thumbnail: `${firebaseUrl}${responseData[key].picture}`,
                }]);
            }
        }
    }, [product.name]);

    const price = `€${product.price.toFixed(2)}`;

    const fetchProduct = useCallback(async () => {
        let response = await getProduct(productId);
        console.log(response);
        setProduct(response);
    }, [productId])

    useEffect(() => {
        fetchProduct();
        fetchSimilarProducts();
    }, [fetchProduct,fetchSimilarProducts])

    const addToCartHandler = (amount: any) => {
        cartCtx.addItem({
            id: productId,
            name: product.name,
            amount: amount,
            price: product.price,
            color: product.color
        });
    };

    return (

        <Container className={classes.products}>
            <Breadcrumb>
                <Breadcrumb.Item> <NavLink to='/home' className={classes.link}>Home</NavLink></Breadcrumb.Item>
                <Breadcrumb.Item>
                    <NavLink to={`/products/${product.type}`} className={classes.link}>{product.type}</NavLink>
                </Breadcrumb.Item>
                <Breadcrumb.Item active className={classes.active}>{product.name}</Breadcrumb.Item>
            </Breadcrumb>
            <Row>
                <Col>
                    <ImageGallery items={similarProducts} showFullscreenButton={false} showPlayButton={false}/>
                </Col>
                <Col className={classes.detail}>
                    <h3>{product.name}</h3>
                    <div className={classes.description}>{product.description}</div>
                    <div className={classes.price}>{price}</div>
                    <div className={classes.color}>
                        <Selector/>
                    </div>
                    <ProductItemForm onAddToCart={addToCartHandler}/></Col>
            </Row>
        </Container>
    );
};

export default ProductDetail;

