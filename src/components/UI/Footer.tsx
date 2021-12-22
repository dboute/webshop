import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';
import { faFacebookF, faTwitter, faLinkedin, faInstagram, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faRainbow, faHome, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';


const Footer = props => {
    return (

        <footer className="text-center text-lg-start bg-light text-muted">
            <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
                <div className="me-5 d-none d-lg-block">
                    <span>Get connected with us on social networks:</span>
                </div>
                <div>
                    <NavLink to='/' className="me-4 text-reset">
                        <FontAwesomeIcon icon={faFacebookF} />
                    </NavLink>
                    <NavLink to='/' className="me-4 text-reset">
                        <FontAwesomeIcon icon={faTwitter} />
                    </NavLink>
                    <NavLink to='/' className="me-4 text-reset">
                        <FontAwesomeIcon icon={faGoogle} />
                    </NavLink>
                    <NavLink to='/' className="me-4 text-reset">
                        <FontAwesomeIcon icon={faInstagram} />
                    </NavLink>
                    <NavLink to='/' className="me-4 text-reset">
                        <FontAwesomeIcon icon={faLinkedin} />
                    </NavLink>
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
                                Products
                            </h6>
                            <p>
                                <NavLink to='/' className="text-reset">
                                    Nestjes
                                </NavLink>
                            </p>
                            <p>
                                <NavLink to='/' className="text-reset">
                                    Dekentjes
                                </NavLink>
                            </p>
                            <p>
                                <NavLink to='/' className="text-reset">
                                    Tuttenkoorden
                                </NavLink>
                            </p>
                            <p>
                                <NavLink to='/' className="text-reset">
                                    Rammelaars
                                </NavLink>
                            </p>
                        </div>
                        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">
                                Useful links
                            </h6>
                            <p>
                                <NavLink to='/' className="text-reset">
                                    Pricing
                                </NavLink>
                            </p>
                            <p>
                                <NavLink to='/' className="text-reset">
                                    Settings
                                </NavLink>
                            </p>
                            <p>
                                <NavLink to='/' className="text-reset">
                                    Orders
                                </NavLink>
                            </p>
                            <p>
                                <NavLink to='/' className="text-reset">
                                    Help
                                </NavLink>
                            </p>
                        </div>
                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">
                                Contact
                            </h6>
                            <p><FontAwesomeIcon icon={faHome} className='me-3'/>  Camille Coolsstraat <br /> 15 8890 Moorslede</p>
                            <p>
                                <FontAwesomeIcon icon={faEnvelope} className='me-3'/>
                                info@littlemomster.com
                            </p>
                            <p> <FontAwesomeIcon icon={faPhone} className='me-3'/> 0468 13 72 29</p>
                        </div>
                    </div>
                </div>
            </section>
            <div className="text-center p-4" style={{backgroundColor: 'rgba(0, 0, 0, 0.05)'}}>
                © 2021 Copyright:
                <a className="text-reset fw-bold">Little Momster</a>
            </div>
        </footer>
    );
}

export default Footer;
