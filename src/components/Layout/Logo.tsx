import classes from './Logo.module.css';
import logo from "../../assets/Logo.png";

const Logo = () => {
    return <div className={classes.div}><img className={classes.image} src={logo} alt='Little Momster'/></div>
};

export default Logo;
