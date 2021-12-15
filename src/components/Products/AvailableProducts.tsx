import {useEffect, useState} from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ProductItem from './ProductItem/ProductItem';
import classes from './AvailableProducts.module.css';
import {Paper} from "@material-ui/core";

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
    const [products, setMeals] = useState<any>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [httpError, setHttpError] = useState();

    useEffect(() => {
        const fetchMeals = async () => {
            const response = await fetch('https://webshop-c8940-default-rtdb.europe-west1.firebasedatabase.app/products.json');

            if (!response.ok) {
                throw new Error('Something went wrong!');
            }

            const responseData = await response.json();

            const loadedMeals : object[] = [];

            for (const key in responseData) {
                loadedMeals.push({
                    id: key,
                    name: responseData[key].name,
                    description: responseData[key].description,
                    price: responseData[key].price,
                });
            }

            setMeals(loadedMeals);
            setIsLoading(false);
        };

        fetchMeals().catch((error) => {
            setIsLoading(false);
            setHttpError(error.message);
        });
    }, []);

    if (isLoading) {
        return (<section className={classes.MealsLoading}>
                <p>Loading...</p>
            </section>);
    }

    if (httpError) {
        return (<section className={classes.MealsError}>
                <p>{httpError}</p>
            </section>);
    }

    const mealsList = products.map((product) => (<ProductItem
            key={product.id}
            id={product.id}
            name={product.name}
            description={product.description}
            price={product.price}
        />));

    return (<section className={classes.products}>
            <Grid container justifyContent="center" spacing={1}>
                {mealsList.map((value) => (<Grid key={value} item>
                        <Paper className={classes.paper}>
                            {value}
                        </Paper>
                    </Grid>))}
            </Grid>
        </section>);
};

export default AvailableProducts;
