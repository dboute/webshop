import {useEffect, useState} from 'react';
import Grid from '@material-ui/core/Grid';
import ProductItem from './ProductItem/ProductItem';
import classes from './AvailableProducts.module.css';
import LoadingSpinner from "../UI/LoadingSpinner";
import {getAvailableProducts} from "../../api/products/get-available-products";
import {useParams} from 'react-router-dom';

const AvailableProducts = () => {
        const [products, setProducts] = useState<any>([]);
        const [isLoading, setIsLoading] = useState(true);
        const [httpError, setHttpError] = useState();
        const {type} = useParams();

        useEffect(() => {
            const fetchProducts = async () => {
                var responseData = (await getAvailableProducts()).productResources;
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
                console.log(products);
                setIsLoading(false);
            };

            fetchProducts().catch((error) => {
                setIsLoading(false);
                setHttpError(error.message);
            });
        }, []);

        if (isLoading) {
            return (<section className={classes.ProductsLoading}>
                <LoadingSpinner/>
            </section>);
        }

        if (httpError) {
            return (<section className={classes.ProductsError}>
                <p>{httpError}</p>
            </section>);
        }

        if (products.length === 0) {
            return (<section className={classes.products}>
                <p>No products available for this category.</p>
            </section>);
        }


        const productsList = products.map((product) => (<ProductItem
            key={product.id}
            id={product.id}
            name={product.name}
            preview={product.preview}
            price={product.price}
            picture={product.picture}
            type={product.type}
        />));

        return (<section className={classes.products}>
            <h2 className={classes.center}>{type}</h2>
            <Grid container justifyContent="center" spacing={1}>
                {productsList.map((value) => (<Grid key={value} item>
                    {value}
                </Grid>))}
            </Grid>
        </section>);
    }
;

export default AvailableProducts;
