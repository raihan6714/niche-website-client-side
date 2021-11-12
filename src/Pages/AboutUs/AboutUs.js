import React from 'react';
import Navigation from '../Shared/Navigation/Navigation';
import './AboutUs.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faUserCircle, faTruck, faMedal } from '@fortawesome/free-solid-svg-icons';
import Footer from '../Shared/Footer/Footer';
const AboutUs = () => {
    return (
        <>
            <Navigation />
            <div className="about-us bg-gray mt-5 mb-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="about-description">
                                <div className="about-content">
                                    <h3>about us</h3>
                                    <div className="about-read">
                                        <p className="text-1">
                                            BikeDekho is a web portal under the renowned GirnarSoft group. We are a team who believe that the customer is king and strive to make sure you are treated like a king. Our efforts and drive doesn’t just come from one person but from all of our partners and employees. We believe that together we can make your experience one that you never forget. That’s why our website is your one stop shop for two wheelers.
                                        </p>
                                        <p className="text-2">
                                            On our site, you can sell your old bike, buy a used bike, compare bikes, find dealers and even get the on-road price of the bike you’re looking for. We pride ourselves on giving you everything that you need to make a decision while buying a bike. So on our site, you can also calculate your EMI(easy monthly instalment) options, find tyres for your bike and also write your own personal review of a bike.
                                        </p>
                                        <p className="text-3">
                                            Besides all this, we also have an editorial section where you can check out the latest news in the two-wheeler industry; find feature stories and great advisory stories that will help you become a better rider and help you maintain your bike as well. Sounds like we’ve given you everything you need right? Well there’s one more section that plays a vital role in helping you finalise which bike to buy: The Expert Reviews section. It contains detailed analysis of bikes by biking and industry professionals with years of experience. They test the bikes and give their honest opinions on the positives and negatives while also giving you an unbiased verdict of the bike. If you’d rather watch a video review of a new bike, you can do that too in our video review section.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="about-fun-fact">
                    <div className="about-fun-fact-inner white-overlay">
                        <div className="fun-factor">
                            <div className="row">
                                <div className="col-lg-6 col-md-6  mb-5">
                                    <div className="single-fun-fact text-center">
                                        <div className="fun-icon">
                                            <FontAwesomeIcon icon={faCheckCircle}></FontAwesomeIcon>
                                        </div>
                                        <div className="fun-text">
                                            <h2>Successfull work</h2>
                                            <h3 className="counter">290</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 mb-5">
                                    <div className="single-fun-fact text-center">
                                        <div className="fun-icon">
                                            <FontAwesomeIcon icon={faUserCircle}></FontAwesomeIcon>
                                        </div>
                                        <div className="fun-text">
                                            <h2>Happy People</h2>
                                            <h3 className="counter">990</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 ">
                                    <div className="single-fun-fact text-center">
                                        <div className="fun-icon">
                                            <FontAwesomeIcon icon={faTruck}></FontAwesomeIcon>
                                        </div>
                                        <div className="fun-text">
                                            <h2>Freight Vehicles</h2>
                                            <h3 className="counter">120</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 ">
                                    <div className="single-fun-fact text-center">
                                        <div className="fun-icon">
                                            <FontAwesomeIcon icon={faMedal}></FontAwesomeIcon>
                                        </div>
                                        <div className="fun-text">
                                            <h2>Award Winning</h2>
                                            <h3 className="counter">499</h3>
                                        </div>
                                    </div>
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

export default AboutUs;