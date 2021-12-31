import {useParams} from 'react-router-dom';
import classes from './ProductDetail.module.css';
import Grid from "@material-ui/core/Grid";
import ProductItemForm from "./ProductItemForm";


const ProductDetail = (props: any) => {

    const params = useParams();

    const {productId} = params;

    return (
        <section className={classes.products}>
            <Grid container justifyContent="center" spacing={1}>
                    <img width='150px' height='150px' src='https://firebasestorage.googleapis.com/v0/b/webshop-c8940.appspot.com/o/rode_giraf.png?alt=media&token=2c1f1923-92f9-40c1-afab-3020fa7f7086' alt={props.description}/>
            </Grid>
            <Grid container justifyContent="center" spacing={1}>
                <figure>
                    <p>{productId}</p>
                    <figcaption>{props.description}</figcaption>
                    <div className={classes.price}>10</div>
                    <ProductItemForm/>
                </figure>
            </Grid>
        </section>
    );
};

export default ProductDetail;
