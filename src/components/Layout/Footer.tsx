import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {NavLink} from 'react-router-dom';
import {faFacebookF, faGoogle, faInstagram, faLinkedin, faTwitter} from '@fortawesome/free-brands-svg-icons';
import {faEnvelope, faHome, faRainbow} from '@fortawesome/free-solid-svg-icons';
import classes from './Footer.module.css';
import {useTranslation} from "react-i18next";


const Footer = () => {
    const {t} = useTranslation('translation');

    return (

        <footer className="text-center text-lg-start bg-light text-muted">
            <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
                <div className="me-5 d-none d-lg-block">
                    <span>Get connected with us on social networks:</span>
                </div>
                <div>
                    <a href='https://www.linkedin.com/' className="me-4 text-reset">
                        <FontAwesomeIcon icon={faFacebookF}/>
                    </a>
                    <a href='https://www.linkedin.com/' className="me-4 text-reset">
                        <FontAwesomeIcon icon={faTwitter}/>
                    </a>
                    <a href='https://www.linkedin.com/' className="me-4 text-reset">
                        <FontAwesomeIcon icon={faGoogle}/>
                    </a>
                    <a href='https://www.linkedin.com/' className="me-4 text-reset">
                        <FontAwesomeIcon icon={faInstagram}/>
                    </a>
                    <a href='https://www.linkedin.com/' className="me-4 text-reset">
                        <FontAwesomeIcon icon={faLinkedin}/>
                    </a>
                </div>
            </section>
            <section>
                <div className="container text-center text-md-start mt-5">
                    <div className="row mt-3">
                        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">
                                <FontAwesomeIcon icon={faRainbow} className='me-3'/>
                                Little Momster
                            </h6>
                            <p>

                            </p>
                        </div>
                        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">
                                {t('LITTLE_MOMSTER.PRODUCTS.TITLE')}
                            </h6>
                            <p>
                                <NavLink to='/products/blankets' className={classes.link}>
                                    {t('LITTLE_MOMSTER.PRODUCTS.BLANKETS')}
                                </NavLink>
                            </p>
                            <p>
                                <NavLink to='/products/nests' className={classes.link}>
                                    {t('LITTLE_MOMSTER.PRODUCTS.NESTS')}
                                </NavLink>
                            </p>
                            <p>
                                <NavLink to='/products/rattles' className={classes.link}>
                                    {t('LITTLE_MOMSTER.PRODUCTS.RATTLES')}
                                </NavLink>
                            </p>
                            <p>
                                <NavLink to='/products/pacifier-cloths' className={classes.link}>
                                    {t('LITTLE_MOMSTER.PRODUCTS.PACIFIER-CLOTHS')}
                                </NavLink>
                            </p>
                            <p>
                                <NavLink to='/products/pacifier-clips' className={classes.link}>
                                    {t('LITTLE_MOMSTER.PRODUCTS.PACIFIER-CLIPS')}
                                </NavLink>
                            </p>
                        </div>
                        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">
                                Useful links
                            </h6>
                            <p>
                                <NavLink to='/products' className={classes.link}>
                                    Pricing
                                </NavLink>
                            </p>
                            <p>
                                <NavLink to='/products' className={classes.link}>
                                    Settings
                                </NavLink>
                            </p>
                            <p>
                                <NavLink to='/products' className={classes.link}>
                                    Orders
                                </NavLink>
                            </p>
                            <p>
                                <NavLink to='/products' className={classes.link}>
                                    Help
                                </NavLink>
                            </p>
                        </div>
                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">
                                {t('LITTLE_MOMSTER.CONTACT.TITLE')}
                            </h6>
                            <p><FontAwesomeIcon icon={faHome} className='me-3'/>Keizerstraat 55 8510
                                Marke</p>
                            <p>
                                <FontAwesomeIcon icon={faEnvelope} className='me-3'/>
                                littlemomster2@gmail.com
                            </p>
                            {/*<p><FontAwesomeIcon icon={faPhone} className='me-3'/> 0468 13 72 29</p>*/}
                        </div>
                    </div>
                </div>
            </section>
            <div className="text-center p-4" style={{backgroundColor: 'rgba(0, 0, 0, 0.05)'}}>
                © 2022 Copyright
                <NavLink to ='/' className={classes.link}> Little Momster</NavLink>
            </div>
        </footer>
    );
}

export default Footer;
