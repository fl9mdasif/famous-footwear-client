import React from 'react';
import './styles.css'
const Offers = () => {
    return (
        <div className='mt-12 w-auto relative' >
            <img style={{
                width: '100%',
                objectFit: 'cover',
                objectPosition: "center"

            }}
                className="Offer-img" src="https://cdn.shopify.com/s/files/1/0145/5613/5478/files/banner-v3-img.jpg?v=1565862788" alt='/' />
            <div className="absolute offer-div  top-16 right-10">
                <h1 className="offer-h1 p-3 sm:text-xs md:text-lg  lg:text-3xl font-bold uppercase text-center text-"> Global brands warehouse</h1>
            </div>
        </div>
    );
};

export default Offers;