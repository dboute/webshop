import {useParams} from 'react-router-dom';
import classes from './ProductDetail.module.css';
import ProductItemForm from "./ProductItemForm";
import {useCallback, useContext, useEffect, useState} from "react";
import CartContext from "../../../store/cart-context";
import {getProduct} from "../../../api/products/get-product";
import {Breadcrumb, Button, Col, Container, Modal, Row} from "react-bootstrap";
import ImageGallery from 'react-image-gallery';
import Selector  from '../../UI/Selector';
import {getAvailableProducts} from "../../../api/products/get-available-products";
import {NavLink} from 'react-router-dom';
import { useHistory } from 'react-router-dom';



const ProductDetail = () => {
    const {productId} = useParams();
    const history = useHistory();
    const firebaseUrl = 'https://firebasestorage.googleapis.com/v0/b/webshop-c8940.appspot.com/o/';
    const [product, setProduct] = useState<any>({
        id: 0,
        name: 'test',
        price: 10
    });
    const [similarProducts, setSimilarProducts] = useState<any[]>([]);
    const cartCtx = useContext(CartContext);
    const [selectedColor, setSelectedColor] = useState('');
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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
        setProduct(response);
    }, [productId])

    useEffect(() => {
        fetchProduct();
        fetchSimilarProducts();
    }, [fetchProduct,fetchSimilarProducts])

    const handleCallback = (childData) =>{
        setSelectedColor( childData)
    }

    const goToCart = () =>{
        history.push('/cart');
    }

    const addToCartHandler = (amount: any) => {
        cartCtx.addItem({
            id: productId,
            name: product.name,
            amount: amount,
            price: product.price,
            color: selectedColor,
            picture: product.picture
        });
        handleShow();
    };

    return (

        <Container className={classes.products}>
            <Breadcrumb>
                <Breadcrumb.Item>
                    <NavLink to='/products' className={classes.link}>alle producten</NavLink>
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                    <NavLink to={`/products/${product.type}`} className={classes.link}>{product.type}</NavLink>
                </Breadcrumb.Item>
            </Breadcrumb>
            <Row>
                <Col>
                    <ImageGallery items={similarProducts} showFullscreenButton={false} showPlayButton={false} showThumbnails={similarProducts.length > 1} show/>
                </Col>
                <Col className={classes.detail}>
                    <h3>{product.name}</h3>
                    <div className={classes.description}>{product.description}</div>
                    <div className={classes.price}>{price}</div>
                    <div className={classes.color}>
                        <Selector parentCallback = {handleCallback}/>
                    </div>
                    <ProductItemForm onAddToCart={addToCartHandler}/></Col>
            </Row>
            <Modal show={show} onHide={handleClose}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>Het product is toegevoegd</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col>
                            <img className={classes.image} src={`${firebaseUrl}${product.picture}`} alt={product.description}/>
                        </Col>
                        <Col>
                            {product.name}
                        </Col>
                        <Col>
                            {price}
                        </Col>
                    </Row>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Verder winkelen
                    </Button>
                    <Button className={classes.button} onClick={goToCart}>
                        Naar winkelwagen
                    </Button>
                </Modal.Footer>
            </Modal>
        </Container>
    );
};

export default ProductDetail;

