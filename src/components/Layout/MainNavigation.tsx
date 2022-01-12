import {NavLink} from 'react-router-dom';
import classes from './MainNavigation.module.scss';
import {Nav, NavDropdown} from "react-bootstrap";

const MainNavigation = (props) => {

    return (
        <Nav className="justify-content-center">
            <NavLink to='/home' className={classes.link}>Home</NavLink>
            <NavDropdown title="Shop" id="basic-nav-dropdown">
                <NavDropdown.Item><NavLink to='/products' className={classes.dropdownItem}>
                    Speenkoorden
                </NavLink></NavDropdown.Item>
                <NavDropdown.Item><NavLink to='/products' className={classes.dropdownItem}>
                    Nestjes
                </NavLink></NavDropdown.Item>
                <NavDropdown.Item><NavLink to='/products' className={classes.dropdownItem}>
                    Rammelaars
                </NavLink></NavDropdown.Item>
                <NavDropdown.Item><NavLink to='/products' className={classes.dropdownItem}>
                    Speendoekjes
                </NavLink></NavDropdown.Item>
                <NavDropdown.Item><NavLink to='/products' className={classes.dropdownItem}>
                    Dekentjes
                </NavLink></NavDropdown.Item>
            </NavDropdown>
            <NavLink to='/contact' className={classes.link}>Contact</NavLink>
            <NavLink to='/about-us' className={classes.link}>Over ons</NavLink>
            <Nav.Link></Nav.Link>
            <Nav.Link></Nav.Link>
        </Nav>
    );
};

export default MainNavigation;
