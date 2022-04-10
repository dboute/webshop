import {NavLink} from 'react-router-dom';
import classes from './MainNavigation.module.scss';
import {Container, Nav, Navbar, NavDropdown} from 'react-bootstrap';
import SmallLogo from './SmallLogo';
import React from "react";
import {useTranslation} from "react-i18next";
import i18next from "i18next";
import MenuItem from "@mui/material/MenuItem";
import {Select} from "@mui/material";

const MainNavigation = () => {
    const {t} = useTranslation('translation');
    const [language, setLanguage] = React.useState(i18next.language);

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
                            <NavLink to='/home' className={classes.link}>{t('LITTLE_MOMSTER.HOME.TITLE')}</NavLink>
                        </Nav.Link>
                        <NavDropdown title={t('LITTLE_MOMSTER.SHOP.TITLE')} id='basic-nav-dropdown'>
                            <NavDropdown.Item eventKey='2'><NavLink to='/products/blankets'
                                                                    className={classes.dropdownItem}>
                                {t('LITTLE_MOMSTER.PRODUCTS.BLANKETS')}
                            </NavLink>
                            </NavDropdown.Item>
                            <NavDropdown.Item eventKey='3'><NavLink to='/products/nests'
                                                                    className={classes.dropdownItem}>
                                {t('LITTLE_MOMSTER.PRODUCTS.NESTS')}
                            </NavLink></NavDropdown.Item>
                            <NavDropdown.Item eventKey='4'><NavLink to='/products/rattles'
                                                                    className={classes.dropdownItem}>
                                {t('LITTLE_MOMSTER.PRODUCTS.RATTLES')}
                            </NavLink></NavDropdown.Item>
                            <NavDropdown.Item eventKey='5'><NavLink to='/products/pacifier-cloths'
                                                                    className={classes.dropdownItem}>
                                {t('LITTLE_MOMSTER.PRODUCTS.PACIFIER-CLOTHS')}
                            </NavLink></NavDropdown.Item>
                            <NavDropdown.Item eventKey='6'><NavLink to='/products/pacifier-clips'
                                                                    className={classes.dropdownItem}>
                                {t('LITTLE_MOMSTER.PRODUCTS.PACIFIER-CLIPS')}
                            </NavLink></NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link eventKey='7'>
                            <NavLink to='/contact'
                                     className={classes.link}>{t('LITTLE_MOMSTER.CONTACT.TITLE')}</NavLink>
                        </Nav.Link>
                        <Nav.Link eventKey='8'>
                            <NavLink to='/about-us'
                                     className={classes.link}>{t('LITTLE_MOMSTER.ABOUT_US.TITLE')}</NavLink>
                        </Nav.Link>
                        <Nav.Link eventKey='9' className={classes.cart}>
                            <NavLink to='/cart'
                                     className={classes.link}>{t('LITTLE_MOMSTER.SHOPPING_CART.TITLE')}</NavLink>
                        </Nav.Link>
                        <NavDropdown title={t('LITTLE_MOMSTER.LANGUAGE.TITLE')} id='basic-nav-dropdown'>
                            <NavDropdown.Item eventKey='2'>
                            <Select
                                id="select-language"
                                label="Language"
                                multiple={false}
                                value={language}
                                onChange={async (option, value) => {
                                    if (option) {
                                        i18next.changeLanguage(option.target.value);
                                        setLanguage(option.target.value);
                                    }
                                }}
                            > <MenuItem value={'en'}>English</MenuItem>
                                <MenuItem value={'fr'}>Français</MenuItem>
                                <MenuItem value={'nl'}>Nederlands</MenuItem>
                            </Select>
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default MainNavigation;
