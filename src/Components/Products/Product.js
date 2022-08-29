import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../App.css'
const Product = ({ product }) => {

    const navigate = useNavigate()

    const navigateProductDetails = (id) => {
        navigate(`/productDetails/${id}`)
    }
    console.log(product);

    // const { _id, name, imgUrl, price, brand, } = product;
    const { _id, name, originalPrice, discountPrice, imgUrl, discountRoundPrice } = product

    console.log(_id);
    return (
        <div class="drop-shadow-xl rounded-none px-4 card w-72 mb-4 bg-base-100 ">
            <figure class="px-0 pt-4">
                <img src={imgUrl} alt="Shoes" class="productImg rounded" />
            </figure>
            <div class="items-center ">
                <div class="px-2">
                    <h2 class=" text-start font-semibold text-xl">{name}</h2>
                    <div class="rating rating-sm mt- ">
                        <input type="radio" name="rating-6" class="mask mask-star-2 bg-gold" />
                        <input type="radio" name="rating-6" class="mask mask-star-2 bg-gold" checked />
                        <input type="radio" name="rating-6" class="mask mask-star-2 bg-gold" />
                        <input type="radio" name="rating-6" class="mask mask-star-2 bg-gold" />
                        <input type="radio" name="rating-6" class="mask mask-star-2 bg-gold" />
                    </div>
                    {/* <h2 class=" text-start   text-lg">{brand}</h2> */}

                    <div className="flex items-center justify-between  mt-1 mb-4">
                        <p className="text-xl font-semibold text-base pb-2">
                            {/* original Price */}
                            <span style={{ color: '#4c4c4cc7' }} className="text-lg pr-3  line-through"><span>$</span>{originalPrice}</span>
                            {/* discount price */}
                            <span className="text-2xl text-base "><span>$</span>{discountPrice}</span>
                        </p>
                        <button onClick={() => navigateProductDetails(_id)} class=" btn-sm font-semibold bg-base btn-primary rounded-md ">Buy Now</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Product;