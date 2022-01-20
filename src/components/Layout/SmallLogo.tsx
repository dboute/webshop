import classes from './SmallLogo.module.css';
import logo from "../../assets/SmallLogo.png";

const Logo = () => {
    return <img className={`d-inline-block align-top ${classes.image}`} src={logo} alt='Little Momster'/>
};

export default Logo;
