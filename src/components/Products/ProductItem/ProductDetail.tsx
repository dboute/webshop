import {NavLink, useHistory, useParams} from 'react-router-dom';
import classes from './ProductDetail.module.css';
import {useCallback, useContext, useEffect, useState} from "react";
import CartContext from "../../../store/cart-context";
import {getProduct} from "../../../api/products/get-product";
import {Breadcrumb, Button, Col, Container, Modal, Row} from "react-bootstrap";
import ImageGallery from 'react-image-gallery';
import {getAvailableProducts} from "../../../api/products/get-available-products";
import {Controller, useForm} from "react-hook-form";
import {FormControl, FormHelperText} from "@mui/material";
import ColorSelector from '../../UI/ColorSelector';
import {QuantityPicker} from "../../UI/QuantityPicker";
import OrderButton from "../../UI/OrderButton";
import {ColorResource} from "../../../api/products/color-resource";
import {useTranslation} from "react-i18next";


interface ProductDetailForm {
    quantity;
    color;
}

const ProductDetail = () => {
    const {productId} = useParams();
    const history = useHistory();
    const firebaseUrl = 'https://firebasestorage.googleapis.com/v0/b/webshop-c8940.appspot.com/o/';
    const [product, setProduct] = useState<any>({
        id: 0,
        name: 'test',
        price: 10,
        type: 'RATTLES'
    });
    const [similarProducts, setSimilarProducts] = useState<any[]>([]);
    const cartCtx = useContext(CartContext);
    const [selectedColor, setSelectedColor] = useState('');
    const [show, setShow] = useState(false);
    const {t} = useTranslation('translation');

    const submitHandler = () => {
        addToCartHandler(getValues("quantity"));
    };

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const {
        handleSubmit,
        control,
        getValues,
        trigger,
        formState: {errors, isValid},
    } = useForm<ProductDetailForm>({reValidateMode: 'onSubmit', mode: 'onSubmit'});

    const fetchSimilarProducts = useCallback(async () => {
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
    }, [fetchProduct, fetchSimilarProducts])

    const handleCallback = (childData) => {
        setSelectedColor(childData)
    }

    const goToCart = () => {
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
    const onError = (e) => console.log('error--->', e);

    return (
        <form onSubmit={handleSubmit(submitHandler, onError)}>
            <Container className={classes.products}>
                <Breadcrumb>
                    <Breadcrumb.Item>
                        <NavLink to='/products' className={classes.link}>{t('LITTLE_MOMSTER.PRODUCTS.ALL')}</NavLink>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        <NavLink to={`/products/${product.type}`}
                                 className={classes.link}>{t(`LITTLE_MOMSTER.PRODUCTS.${product.type.toUpperCase()}`)}</NavLink>
                    </Breadcrumb.Item>
                </Breadcrumb>
                <Row>
                    <Col>
                        <ImageGallery items={similarProducts} showFullscreenButton={false} showPlayButton={false}
                                      showThumbnails={similarProducts.length > 1} show/>
                    </Col>
                    <Col className={classes.detail}>
                        <h3>{t(`LITTLE_MOMSTER.${product.type?.toUpperCase()}.${product.name?.toUpperCase()}`)}</h3>
                        <div className={classes.description}>{product.description}</div>
                        <div className={classes.price}>{price}</div>
                        <div className={classes.color}>
                            <Controller
                                name="color"
                                control={control}
                                rules={{
                                    required: 'Select a color',
                                }}
                                defaultValue={null}
                                render={({field: {ref, ...rest}}) => (
                                    <FormControl className='formControl' fullWidth sx={{margin: 0, minWidth: 240}}>
                                        <ColorSelector parentCallback={handleCallback}
                                                       {...rest}
                                                       id="color"
                                                       inputProps={{
                                                           'aria-label': 'color',
                                                           ref,
                                                           onFocus: (e) => e.target.select(),
                                                       }}
                                                       inputRef={ref as any}
                                                       required
                                                       onChange={(e, option: { label: string; value: ColorResource }) => {
                                                           rest.onChange(option);
                                                           trigger('color');
                                                       }}
                                        />
                                        {errors.color && (
                                            <FormHelperText variant="outlined" error={!!errors.color} component="div">
                                                {errors.color?.message || ''}
                                            </FormHelperText>
                                        )}
                                    </FormControl>
                                )}
                            />
                        </div>
                        <Controller
                            name="quantity"
                            control={control}
                            rules={{
                                required: 'Enter a quantity',
                            }}
                            defaultValue={null}
                            render={({field: {ref, ...rest}}) => (
                                <FormControl className='formControl' fullWidth sx={{margin: 0, minWidth: 240}}>
                                    <QuantityPicker min={0} max={10}
                                                    {...rest}
                                                    id="quantity"
                                                    inputProps={{
                                                        'aria-label': 'quantity',
                                                        ref,
                                                        onFocus: (e) => e.target.select(),
                                                    }}
                                                    inputRef={ref as any}
                                                    required
                                                    onChange={async (option) => {
                                                        if (option) {
                                                            rest.onChange(option)
                                                        }
                                                        trigger('color');
                                                    }}
                                    />
                                    {errors.quantity && (
                                        <FormHelperText variant="outlined" error={!!errors.quantity} component="div">
                                            {errors.quantity?.message || ''}
                                        </FormHelperText>
                                    )}
                                </FormControl>
                            )}
                        />
                        <OrderButton text={t('LITTLE_MOMSTER.PRODUCTS.ORDER_NOW')} type='submit'
                                     disabled={!isValid}/></Col>
                </Row>
                <Modal show={show} onHide={handleClose}
                       size="lg"
                       aria-labelledby="contained-modal-title-vcenter"
                       centered
                >
                    <Modal.Header closeButton>
                        <Modal.Title>{t('LITTLE_MOMSTER.PRODUCTS.PRODUCT_ADDED')}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Row>
                            <Col>
                                <img className={classes.image} src={`${firebaseUrl}${product.picture}`}
                                     alt={product.description}/>
                            </Col>
                            <Col>
                                {t(`LITTLE_MOMSTER.${product.type?.toUpperCase()}.${product.name?.toUpperCase()}`)}
                            </Col>
                            <Col>
                                {price}
                            </Col>
                        </Row>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            {t('LITTLE_MOMSTER.PRODUCTS.CONTINUE')}
                        </Button>
                        <Button className={classes.button} onClick={goToCart}>
                            {t('LITTLE_MOMSTER.PRODUCTS.TO_SHOPPING_CART')}
                        </Button>
                    </Modal.Footer>
                </Modal>
            </Container>
        </form>
    );
};

export default ProductDetail;

