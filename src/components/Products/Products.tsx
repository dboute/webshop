import {useEffect, useState} from 'react';
import Grid from '@material-ui/core/Grid';
import ProductItem from './ProductItem/ProductItem';
import classes from './Products.module.css';
import LoadingSpinner from "../UI/LoadingSpinner";
import {getAvailableProducts} from "../../api/products/get-available-products";
import {useParams} from 'react-router-dom';
import {Breadcrumb} from "react-bootstrap";
import {NavLink} from 'react-router-dom';
import ProductType from "./ProductType";


const Products = () => {
        const [products, setProducts] = useState<any>([]);
        const [isLoading, setIsLoading] = useState(true);
        const [httpError, setHttpError] = useState();
        const [typesList, setTypesList] = useState<String[]>([]);
        const {type} = useParams();

        useEffect(() => {
            const fetchProducts = async () => {
                var responseData = (await getAvailableProducts());
                const loadedProducts: object[] = [];

                for (const key in responseData) {
                    if (responseData[key].preview) {
                        if (!typesList.includes(responseData[key].type)) {
                            loadedProducts.push({
                                id: key,
                                name: responseData[key].name,
                                price: responseData[key].price,
                                picture: responseData[key].picture,
                                color: responseData[key].color,
                                type: responseData[key].type,
                            });
                            typesList.push(responseData[key].type);
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

        const productsList = products.map((product) => (<ProductType
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
                <h2 className={classes.center}>{type}</h2>
                { isLoading &&
                    <section className={classes.ProductsLoading}>
                        <LoadingSpinner/>
                    </section>}
                { products.length === 0 &&
                    <section className={classes.NoProducts}>
                        <p>No products available for this category.</p>
                    </section>}
                { httpError &&
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

export default Products;
