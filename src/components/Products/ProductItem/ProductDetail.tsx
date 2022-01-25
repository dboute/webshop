import {useParams} from 'react-router-dom';
import classes from './ProductDetail.module.css';
import ProductItemForm from "./ProductItemForm";
import {useCallback, useContext, useEffect, useState} from "react";
import CartContext from "../../../store/cart-context";
import {getProduct} from "../../../api/products/get-product";
import {Col, Container, Row} from "react-bootstrap";
import ImageGallery from 'react-image-gallery';
import Selector from '../../UI/Selector';
import {getProductsWithName} from "../../../api/products/get-available-products";


const ProductDetail = () => {
    const {productId} = useParams();
    const firebaseUrl = 'https://firebasestorage.googleapis.com/v0/b/webshop-c8940.appspot.com/o/';
    const [product, setProduct] = useState<any>({
        id: 0,
        name: 'test',
        price: 10
    });
    const [images, setImages] = useState<any[]>([]);
    const cartCtx = useContext(CartContext);

    const price = `€${product.price.toFixed(2)}`;

    const fetchProduct = useCallback(async () => {
        let response = await getProduct(productId);
        setProduct(response)
        if(product !== undefined){
            setImages([{
            original: `${firebaseUrl}${product.picture}`,
            thumbnail: `${firebaseUrl}${product.picture}`,
        }])
            // const productsWithName = await getProductsWithName(product.name);
            // console.log(productsWithName);
        }
        console.log(images);
    }, [product,images])

    useEffect(() => {
        fetchProduct()
    }, [fetchProduct])


    interface Image {
        original: string;
        thumbnail: string;
    }

    const addToCartHandler = (amount: any) => {
        cartCtx.addItem({
            id: product.id,
            name: product.name,
            amount: amount,
            price: product.price,
            color: product.color
        });
    };

    const productsWithName= getProductsWithName('giraf');
        console.log(productsWithName);
    return (

        <Container className={classes.products}>
            <Row>
                <Col>
                    <ImageGallery items={images} showFullscreenButton={false} showPlayButton={false}/>
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
