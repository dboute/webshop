import { NavLink } from 'react-router-dom';

import classes from './MainNavigation.module.scss';
import HeaderCartButton from "./HeaderCartButton";

const MainNavigation = (props) => {
  return (
      <header className={classes.header}>
        <div className={classes.logo}>Snuggy</div>
        <nav className={classes.nav}>
          <ul>
            <li>
              <NavLink to='/quotes' activeClassName={classes.active}>
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink to='/new-quote' activeClassName={classes.active}>
                Sale
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
