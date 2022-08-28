import React, { useEffect, useState } from 'react';
import Product from './Product';

const AllShoes = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(result => result.json())
            .then(data => setProducts(data))
    }, []);

    return (
        <div className=" container mx-auto w-100 ">
            <h1 className="p-3 font-bold text-center text-primary sm:text-xl md:text-3xl lg:text-4xl">MAN'S SHOES</h1>

            <div className="m-3 justify-items-center grid 
            sm:grid-cols-1 
            md:grid-cols-2 
            lg:grid-cols-3 
            xl:grid-cols-4 ">
                {
                    products.map(product => <Product key={product._id} product={product}></Product>)
                }
            </div>
        </div>
    );
};

export default AllShoes;