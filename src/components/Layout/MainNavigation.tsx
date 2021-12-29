import {NavLink} from 'react-router-dom';
import classes from './MainNavigation.module.scss';
import $ from 'jquery';

const MainNavigation = (props) => {

    const hideDropDown = () => {
        $('.dropdown-menu').removeClass('show');
    }

    return (
        <ul className="nav justify-content-center">
            <li className="nav-item">
                <NavLink to='/home' className={classes.link}>Home</NavLink>
            </li>
            <li className="nav-item dropdown">
                <NavLink to='/shop' className='nav-link link-dark dropdown-toggle' id='navbarDropdownMenuLink'
                         role='button'
                         data-bs-toggle='dropdown' aria-expanded='false'>
                    Shop
                </NavLink>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <li><NavLink to='/shop' onClick={hideDropDown} className={classes.dropdownItem}>
                        Speenkoorden
                    </NavLink></li>
                    <li><NavLink to='/shop' onClick={hideDropDown} className={classes.dropdownItem}>
                        Nestjes
                    </NavLink></li>
                    <li><NavLink to='/shop' onClick={hideDropDown} className={classes.dropdownItem}>
                        Rammelaars
                    </NavLink></li>
                    <li><NavLink to='/shop' onClick={hideDropDown} className={classes.dropdownItem}>
                        Speendoekjes
                    </NavLink></li>
                    <li><NavLink to='/shop' onClick={hideDropDown} className={classes.dropdownItem}>
                        Dekentjes
                    </NavLink></li>
                </ul>
            </li>
            <li className="nav-item">
                <NavLink to='/contact' className={classes.link}>Contact</NavLink>
            </li>
            <li className="nav-item">
                <NavLink to='/about-us' className={classes.link}>Over ons</NavLink>
            </li>
        </ul>
    );
};

export default MainNavigation;
