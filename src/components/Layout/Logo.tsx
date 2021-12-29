import classes from './Logo.module.css';
import logo from "../../assets/logoOld.png";

const Logo = props => {
    return <div><img className={classes.image} src={logo} width='400px' alt='Little Momster'/></div>
};

export default Logo;
