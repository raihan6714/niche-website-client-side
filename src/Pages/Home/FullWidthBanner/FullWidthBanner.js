import React from 'react';
import { Link } from 'react-router-dom';
const FullWidthBanner = () => {
    return (
        <div className="full_width_banner pb-110">
            <div className="single_banner">
                <Link to="/"><img src="https://i.ibb.co/7p2p4LH/8.jpg" alt="Shop Banner" /></Link>
            </div>
        </div>
    );
};

export default FullWidthBanner;