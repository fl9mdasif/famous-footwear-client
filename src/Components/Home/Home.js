import React from 'react';
// import { useRef } from 'react';
import AllShoes from '../Products/AllShoes';
import BrandsCarousel from './BrandsCarousel';
import ContactUs from './ContactUs';
import Hero from './Hero';
import Offers from './Offers';
import ProductGallery from './ProductGallery';
import ServiceCard from './ServiceCard';
import Testimonial from './Testimonial';
// import { Parallax, ParallaxLayer } from '@react-spring/parallax'
// import Navbar from '../Shared/Navbar';

const Home = () => {
    // const ref = useRef()

    return (
        <div className="">
            <Hero />
            <ServiceCard />
            <Offers />
            <BrandsCarousel />
            {/* <ProductGallery /> */}
            <AllShoes />
            <Testimonial />
            <ContactUs />

        </div>
    )
};

export default Home;