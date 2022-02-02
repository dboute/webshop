import {NavLink} from 'react-router-dom';
import classes from './MainNavigation.module.scss';
import {Container, Nav, Navbar, NavDropdown} from 'react-bootstrap';
import SmallLogo from './SmallLogo';
import HeaderCartButton from "./HeaderCartButton";
import React from "react";

const MainNavigation = () => {

    return (
        <Navbar collapseOnSelect expand="lg" className={classes.navbar}>
            <Container className={classes.container}>
                <Navbar.Toggle aria-controls='responsive-navbar-nav'/>
                <Navbar.Brand className={classes.brand} href='/'>
                    <SmallLogo/>{' '}
                    Little Momster
                </Navbar.Brand>
                <Navbar.Collapse id='responsive-navbar-nav'>
                    <Nav className={classes.center}>
                        <Nav.Link eventKey='1'>
                            <NavLink to='/home' className={classes.link}>Home</NavLink>
                        </Nav.Link>
                            <NavDropdown title='Shop' id='basic-nav-dropdown'>
                                <NavDropdown.Item eventKey='2'><NavLink to='/products/speenkoorden'
                                                                        className={classes.dropdownItem}>
                                    Speenkoorden
                                </NavLink></NavDropdown.Item>
                                <NavDropdown.Item eventKey='3'><NavLink to='/products/rammelaars'
                                                                        className={classes.dropdownItem}>
                                    Rammelaars
                                </NavLink></NavDropdown.Item>
                                <NavDropdown.Item eventKey='4'><NavLink to='/products/speendoekjes'
                                                                        className={classes.dropdownItem}>
                                    Speendoekjes
                                </NavLink></NavDropdown.Item>
                                <NavDropdown.Item eventKey='5'><NavLink to='/products/dekentjes'
                                                                        className={classes.dropdownItem}>
                                    Dekentjes
                                </NavLink>
                                </NavDropdown.Item>
                                <NavDropdown.Item eventKey='6'><NavLink to='/products/nestjes'
                                                                        className={classes.dropdownItem}>
                                    Nestjes
                                </NavLink></NavDropdown.Item>
                            </NavDropdown>
                        <Nav.Link eventKey='7'>
                            <NavLink to='/contact' className={classes.link}>Contact</NavLink>
                        </Nav.Link>
                        <Nav.Link eventKey='8'>
                            <NavLink to='/about-us' className={classes.link}>Over ons</NavLink>
                        </Nav.Link>
                        <Nav.Link eventKey='9' className={classes.cart}>
                            <NavLink to='/cart' className={classes.link}>Winkelwagen</NavLink>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default MainNavigation;
