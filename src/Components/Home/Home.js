import React from 'react';
import Hero from '../Hero.js/Hero';
import AllShoes from '../Products/AllShoes';
import NewProducts from '../Products/NewProducts';
import BrandsCarousel from './BrandsCarousel';
import ContactUs from './ContactUs';
import Offers from './Offers';
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
            <NewProducts />
            {/* <ProductGallery /> */}
            {/* <AllShoes /> */}
            <Testimonial />
            <ContactUs />

        </div>
    )
};

export default Home;