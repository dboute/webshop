import classes from './Logo.module.css';
import logo from "../../assets/logo.png";
import Card from "../UI/Card";

const Logo = props => {
    return <div><img className={classes.image} src={logo} width='400px' alt='Little Momster'/></div>
};

export default Logo;
