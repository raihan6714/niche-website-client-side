import React from 'react';
import { faFacebook, faGoogle, faInstagram, faLinkedin, faPinterest, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import './Contact.css';
import Navigation from '../Shared/Navigation/Navigation';
import './Contact.css';
import { faPhone, faVoicemail } from '@fortawesome/free-solid-svg-icons';
import Footer from '../Shared/Footer/Footer';
const Contact = () => {
    return (
        <>
            <Navigation />
            <div className="contact-us pt-5 pb-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 col-12">
                            <div className="contact-us-desc">
                                <div className="get-in-touch">
                                    <h3>get in touch</h3>
                                    <p>While we have the latter on test here, the two Honda CBs share 90 percent of their parts, so the differences in our observations aren't going to be vastly different. Did Honda do a good enough job in outdoing the new Classic 350? Or does it still have to play catch up?</p>
                                </div>
                                <div className="contact-social">
                                    <Link className="facebook" to="/" title="Facebook">
                                        <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
                                    </Link>
                                    <Link className="google-plus" to="/" title="Google Plus">
                                        <FontAwesomeIcon icon={faGoogle}></FontAwesomeIcon>
                                    </Link>
                                    <Link className="twitter" to="/" title="Twitter">
                                        <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
                                    </Link>
                                    <Link className="linkedin" to="/" title="Linkedin">
                                        <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
                                    </Link>
                                    <Link className="linkedin" to="/" title="Linkedin">
                                        <FontAwesomeIcon icon={faPinterest}></FontAwesomeIcon>
                                    </Link>
                                    <Link className="linkedin" to="/" title="Linkedin">
                                        <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
                                    </Link>
                                </div>
                                <div className="contact-address">
                                    <h3>address</h3>
                                    <div className="contact-list">
                                        <div className="single-contact-list">
                                            <div className="contact-icon">
                                                <i className="zmdi zmdi-pin"></i>
                                            </div>
                                            <div className="conatct-desc">
                                                <h6>Jaipur Office
                                                    Girnar Software Pvt. Ltd.,
                                                    JTM, Model Town, Near Jagatpura Flyover,
                                                    Jaipur -302017</h6>

                                                <p>Gurugram Office
                                                    11th Floor, Tower B, Emaar
                                                    Digital Greens, Golf Course Ext,
                                                    Road, Sec-61, Gurugram, Haryana</p>
                                            </div>
                                        </div>
                                        <div className="single-contact-list">
                                            <div className="contact-icon">
                                                <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>
                                            </div>
                                            <div className="conatct-desc">
                                                <p>+660 256444 24857 <br /> +660 256 24857</p>
                                            </div>
                                        </div>
                                        <div className="single-contact-list">
                                            <div className="contact-icon">
                                                <i className="zmdi zmdi-email"></i>
                                                <FontAwesomeIcon icon={faVoicemail}></FontAwesomeIcon>
                                            </div>
                                            <div className="conatct-desc">
                                                <p>info@example.com <br /> info @example.com</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-12">
                            <div className="contact-form-inner pt-95">
                                <div className="contact-form-titile text-center">
                                    <h3>Send Us a Message</h3>
                                </div>
                                <div className="contat_form_inner mt-60">
                                    <form id="contact-form" action="https://preview.hasthemes.com/exporso-preview/exporso/assets/mail.php" method="POST">
                                        <div className="single-contact-form d-flex">
                                            <div className="contact-box">
                                                <input type="text" placeholder="Your Name *" name="name" />
                                            </div>
                                            <div className="contact-box">
                                                <input type="text" placeholder="Phone *" name="phone" />
                                            </div>
                                        </div>
                                        <div className="single-contact-form">
                                            <div className="contact-box subject">
                                                <input type="email" placeholder="Email*" name="email" />
                                            </div>
                                        </div>
                                        <div className="single-contact-form">
                                            <div className="contact-box message">
                                                <textarea name="message" placeholder="Message*"></textarea>
                                            </div>
                                        </div>
                                        <div className="contact-btn">
                                            <button className="btn btn-success" type="submit">Send Message</button>
                                        </div>
                                        <p className="form-messege"></p>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Contact;