import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../App.css'
const Product = ({ product }) => {
    const navigate = useNavigate()
    const navigateProductDetails = (id) => {
        navigate(`/product/${id}`)
    }

    const { _id, name, imgUrl, price, } = product;
    return (
        <div class="drop-shadow-xl px-4 card w-80 bg-base-100 shadow-xl">
            <figure class="px-0 pt-10">
                <img src={imgUrl} alt="Shoes" class="productImg rounded-xl" />
            </figure>
            <div class="items-center ">
                <div class="pl-8">
                    <h2 class=" text-start font-bold mt-3 text-2xl">{name}</h2>
                    <div class="rating rating-sm mt-1">
                        <input type="radio" name="rating-6" class="mask mask-star-2 bg-gold" />
                        <input type="radio" name="rating-6" class="mask mask-star-2 bg-gold" checked />
                        <input type="radio" name="rating-6" class="mask mask-star-2 bg-gold" />
                        <input type="radio" name="rating-6" class="mask mask-star-2 bg-gold" />
                        <input type="radio" name="rating-6" class="mask mask-star-2 bg-gold" />
                    </div>
                </div>
                <div className="flex items-center justify-around  mt-1 mb-4">
                    <p className="text-xl font-semibold text-base pb-2">
                        <span className="text-2xl text-base ">$</span>{price}
                    </p>
                    <button onClick={() => navigateProductDetails(_id)} class=" btn-sm font-semibold bg-base btn-primary rounded-md ">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Product;