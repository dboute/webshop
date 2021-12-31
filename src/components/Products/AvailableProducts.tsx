import {useEffect, useState} from 'react';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ProductItem from './ProductItem/ProductItem';
import classes from './AvailableProducts.module.css';
import LoadingSpinner from "../UI/LoadingSpinner";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        paper: {
            height: 140,
            width: 100,
        },
        control: {
            padding: theme.spacing(2),
        },
    }),
);

const AvailableProducts = () => {
    const [products, setProducts] = useState<any>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [httpError, setHttpError] = useState();

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await fetch('https://webshop-c8940-default-rtdb.europe-west1.firebasedatabase.app/products.json');

            if (!response.ok) {
                throw new Error('Something went wrong!');
            }

            const responseData = await response.json();

            const loadedProducts: object[] = [];

            for (const key in responseData) {
                loadedProducts.push({
                    id: key,
                    name: responseData[key].name,
                    description: responseData[key].description,
                    price: responseData[key].price,
                    picture: responseData[key].picture,
                });
            }

            setProducts(loadedProducts);
            setIsLoading(false);
        };

        fetchProducts().catch((error) => {
            setIsLoading(false);
            setHttpError(error.message);
        });
    }, []);

    if (isLoading) {
        return (<section className={classes.ProductsLoading}>
            <LoadingSpinner />
        </section>);
    }

    if (httpError) {
        return (<section className={classes.ProductsError}>
            <p>{httpError}</p>
        </section>);
    }

    const productsList = products.map((product) => (<ProductItem
        key={product.id}
        id={product.id}
        name={product.name}
        description={product.description}
        price={product.price}
        picture={product.picture}
    />));

    return (<section className={classes.products}>
        <Grid container justifyContent="center" spacing={1}>
            {productsList.map((value) => (<Grid key={value} item>
                {value}
            </Grid>))}
        </Grid>
    </section>);
};

export default AvailableProducts;
