import { NavLink } from 'react-router-dom';

import classes from './MainNavigation.module.css';
import HeaderCartButton from "./HeaderCartButton";

const MainNavigation = (props) => {
  return (
      <header className={classes.header}>
        <div className={classes.logo}>Brol.com</div>
        <nav className={classes.nav}>
          <ul>
            <li>
              <NavLink to='/quotes' activeClassName={classes.active}>
                All Quotes
              </NavLink>
            </li>
            <li>
              <NavLink to='/new-quote' activeClassName={classes.active}>
                Add a Quote
              </NavLink>
            </li>
            <li>
              <HeaderCartButton onClick={props.onShowCart}/>
            </li>
          </ul>
        </nav>
      </header>
  );
};

export default MainNavigation;
