import React from 'react';
import ContactUs from './ContactUs';
import Hero from './Hero';
import ProductGallery from './ProductGallery';
import ServiceCard from './ServiceCard';
import Testimonial from './Testimonial';

const Home = () => {
    return (
        <div>
            <Hero />
            <ServiceCard />
            <ProductGallery />
            <Testimonial />
            <ContactUs />
        </div>
    );
};

export default Home;