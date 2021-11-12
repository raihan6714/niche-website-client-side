import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css';
const Banner = () => {
    return (
        <div className="banner_area pt-2 pb-4">
            <div className="banner_area_inner">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="single_banner">
                                <Link to=""><img src="https://i.ibb.co/BBR3gdJ/2.jpg" alt="" /></Link>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="single_banner">
                                <Link to=""><img src="https://i.ibb.co/G5RGyVc/3.jpg" alt="" /></Link>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Banner;