import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Footer.css';
import { faFacebook, faGoogle, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faPhoneAlt, faShieldAlt, faShip } from '@fortawesome/free-solid-svg-icons';
const Footer = () => {
    return (
        <footer className="footer_area">
            <div className="footer_top">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="our_help_services py-5">
                                <div className="row">
                                    <div className="col-lg-4 col-md-6 col-12">
                                        <div className="help_service d-flex">
                                            <div className="h_ser_icon">
                                                <FontAwesomeIcon icon={faShip}></FontAwesomeIcon>
                                            </div>
                                            <div className="h_ser_text">
                                                <h3>Free Shipping</h3>
                                                <p>Free Shipping on Chicago</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-12">
                                        <div className="help_service d-flex justify-content-center">
                                            <div className="h_ser_icon">
                                                <FontAwesomeIcon icon={faShieldAlt}></FontAwesomeIcon>
                                            </div>
                                            <div className="h_ser_text">
                                                <h3>Money Guarentee</h3>
                                                <p>Free Shipping on Chicago</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-12">
                                        <div className="help_service d-flex justify-content-end">
                                            <div className="h_ser_icon">
                                                <i className="zmdi zmdi-phoneSetting"></i>
                                                <FontAwesomeIcon icon={faPhoneAlt}></FontAwesomeIcon>
                                            </div>
                                            <div className="h_ser_text">
                                                <h3>Online Support</h3>
                                                <p>Free Shipping on Chicago</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer_bottom ptb-80">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="single_footer widget_description">
                                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>
                                <div className="addresses_inner">
                                    <div className="single_address">
                                        <p>
                                            <span> Address: </span> <span>Your address goes here.</span>
                                        </p>

                                        <p>
                                            <span> Phone: </span> <span>+12  2223 2223 22 <br />  +125 5455 5555 55</span>
                                        </p>
                                    </div>
                                </div>
                                <div className="social__icon">
                                    <ul>
                                        <li>
                                            <Link className="facebook" to="/" title="Facebook">
                                                <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="google-plus" to="/" title="Google Plus">
                                                <FontAwesomeIcon icon={faGoogle}></FontAwesomeIcon>
                                            </Link>
                                        </li>

                                        <li>
                                            <Link className="twitter" to="/" title="Twitter">
                                                <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="linkedin" to="/" title="Linkedin">
                                                <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="single_footer footer_widget_menu">
                                <div className="widget_title">
                                    <h3>Services</h3>
                                </div>
                                <ul style={{ paddingLeft: 0 }}>
                                    <li><Link to="/">free shipping</Link></li>
                                    <li><Link to="/">Product Delivary</Link></li>
                                    <li><Link to="/">Product Tracking</Link></li>
                                    <li><Link to="/">Online Pyament</Link></li>
                                    <li><Link to="/">Discount</Link></li>
                                    <li><Link to="/">Online Vendor</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="single_footer footer_widget_menu">
                                <div className="widget_title">
                                    <h3>Support</h3>
                                </div>
                                <ul style={{ paddingLeft: 0 }}>
                                    <li><Link to="/">QUeality</Link></li>
                                    <li><Link to="/">Order Details</Link></li>
                                    <li><Link to="/">Order Slips</Link></li>
                                    <li><Link to="/">Shipping</Link></li>
                                    <li><Link to="/">Store Deal</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="single_footer footer_widget_menu">
                                <div className="widget_title">
                                    <h3>Account</h3>
                                </div>
                                <ul style={{ paddingLeft: 0 }}>
                                    <li><Link to="/">My account </Link></li>
                                    <li><Link to="/">order history</Link></li>
                                    <li><Link to="/">wishslist</Link></li>
                                    <li><Link to="/">Cart Details</Link></li>
                                    <li><Link to="/">Compare</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="copyright_inner text-center">
                                <p>©  2021 Design By  <Link className="text-white" to="" target="_blank">Raihan</Link> </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;