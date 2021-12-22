import { NavLink } from 'react-router-dom';

import classes from './MainNavigation.module.scss';
import HeaderCartButton from './HeaderCartButton';

const MainNavigation = (props) => {
  return (
      <nav className='navbar navbar-expand-lg navbar-light white'>
          <div className='container-fluid'>
              <NavLink to='/' className='navbar-brand'>
                  Home
              </NavLink>
              <button className='navbar-toggler' type='button' data-bs-toggle='collapse'
                      data-bs-target='#navbarNavLightDropdown' aria-controls='navbarNavLightDropdown'
                      aria-expanded='false' aria-label='Toggle navigation'>
                  <span className='navbar-toggler-icon'></span>
              </button>
              <div className='collapse navbar-collapse' id='navbarNavLightDropdown'>
                  <ul className='navbar-nav'>
                      <li className='nav-item dropdown'>
                          <NavLink to='/' className='nav-link dropdown-toggle' id='navbarLightDropdownMenuLink' role='button'
                                   data-bs-toggle='dropdown' aria-expanded='false'>
                              Shop
                          </NavLink>
                          <ul className='dropdown-menu dropdown-menu-light' aria-labelledby='navbarLightDropdownMenuLink'>
                              <li><NavLink to='/' className='dropdown-item text-reset'>
                                  Speenkoorden
                              </NavLink></li>
                              <li><NavLink to='/' className='dropdown-item text-reset'>
                                  Nestjes
                              </NavLink></li>
                              <li><NavLink to='/' className='dropdown-item text-reset'>
                                  Rammelaars
                              </NavLink></li>
                              <li><NavLink to='/' className='dropdown-item text-reset'>
                                  Speendoekjes
                              </NavLink></li>
                              <li><NavLink to='/' className='dropdown-item text-reset'>
                                  Dekentjes
                              </NavLink></li>
                          </ul>
                      </li>
                  </ul>
              </div>
          </div>
      </nav>
  );
};

export default MainNavigation;
