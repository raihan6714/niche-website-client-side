import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import Banner from '../Banner/Banner';
import FullWidthBanner from '../FullWidthBanner/FullWidthBanner';
import Newsletter from '../Newsletter/Newsletter';
import OverView from '../OverView/OverView';
import Reviews from '../Reviews/Reviews';
import Services from '../Services/Services';
import Slider from '../Slider/Slider';

const Home = () => {
    return (
        <div>
            <Navigation />
            <Slider />
            <OverView />
            <Banner />
            <Services />
            <FullWidthBanner />
            <Newsletter />
            <Reviews />
            <Footer />
        </div>
    );
};

export default Home;