import classes from './ProductSummary.module.css';

const ProductSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Delicious Food, Delivered To You</h2>
      <p>
        Choose your favorite product from our broad selection of available products
        and enjoy a delicious lunch or dinner at home.
      </p>
      <p>
        All our products are cooked with high-quality ingredients, just-in-time and
        of course by experienced chefs!
      </p>
    </section>
  );
};

export default ProductSummary;