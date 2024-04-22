import React from 'react';
import LandingService from '../ServicesPage/LandingService';
import ServiceCard from '../ServicesPage/ServiceCard';
import OurSuperiorService from '../ServicesPage/OurSuperiorService';
import EasyFlowOfService from '../ServicesPage/EasyFlowOfService';
import OurProducts from '../Home/OurProducts';
import FAQ from '../components/FAQ';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';

const Service = () => {
    return (
        <>
            <LandingService />
            <OurSuperiorService />
            <ServiceCard />
            <EasyFlowOfService />
            <OurProducts />
            <Newsletter />
            <FAQ />
            <Footer />
        </>
    );
};

export default Service;
