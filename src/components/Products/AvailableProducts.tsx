import {useEffect, useState} from 'react';
import Grid from '@material-ui/core/Grid';
import ProductItem from './ProductItem/ProductItem';
import classes from './AvailableProducts.module.css';
import LoadingSpinner from "../UI/LoadingSpinner";
import {getAvailableProducts} from "../../api/products/get-available-products";
import {NavLink, useParams} from 'react-router-dom';
import {Breadcrumb} from "react-bootstrap";
import {useTranslation} from "react-i18next";


const AvailableProducts = () => {
        const [products, setProducts] = useState<any>([]);
        const [isLoading, setIsLoading] = useState(true);
        const [httpError, setHttpError] = useState();
        const {type} = useParams();
        const {t} = useTranslation('translation');

        useEffect(() => {
            const fetchProducts = async () => {
                var responseData = (await getAvailableProducts());
                const loadedProducts: object[] = [];

                for (const key in responseData) {
                    if (responseData[key].preview) {
                        if (responseData[key].type === type) {
                            loadedProducts.push({
                                id: key,
                                name: responseData[key].name,
                                price: responseData[key].price,
                                picture: responseData[key].picture,
                                color: responseData[key].color,
                                type: responseData[key].type,
                            });
                        }
                    }
                }

                setProducts(loadedProducts);
                setIsLoading(false);
            };

            fetchProducts().catch((error) => {
                setIsLoading(false);
                setHttpError(error.message);
            });
        }, [type]);

        const productsList = products.map((product) => (<ProductItem
            key={product.id}
            id={product.id}
            name={product.name}
            preview={product.preview}
            price={product.price}
            picture={product.picture}
            type={product.type}
        />));

        return (
            <section className={classes.products}>
                <Breadcrumb>
                    <Breadcrumb.Item>
                        <NavLink to='/products' className={classes.link}>{t('LITTLE_MOMSTER.PRODUCTS.ALL')}</NavLink>
                    </Breadcrumb.Item>
                </Breadcrumb>
                <h2 className={classes.center}>{t(`LITTLE_MOMSTER.PRODUCTS.${type?.toUpperCase()}`)}</h2>
                {isLoading &&
                    <section className={classes.ProductsLoading}>
                        <LoadingSpinner/>
                    </section>}
                {products.length === 0 &&
                    <section className={classes.NoProducts}>
                        <p>No colors available.</p>
                    </section>}
                {httpError &&
                    <section className={classes.ProductsError}>
                        <p>{httpError}</p>
                    </section>}
                <Grid container justifyContent="center" spacing={1}>
                    {productsList.map((value) => (<Grid key={value.key} item>
                        {value}
                    </Grid>))}
                </Grid>
            </section>);
    }
;

export default AvailableProducts;
