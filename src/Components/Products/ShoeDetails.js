import React from 'react';
import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';



const ShoeDetails = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const { productID } = useParams();
    const { isLoading, error, data: product, refetch } = useQuery(['shoeData'], () =>
        fetch(`http://localhost:5000/allshoes/${productID}`).then(res =>
            res.json())
    )
    if (isLoading) return 'Loading...'
    if (error) return 'An error has occurred: ' + error.message
    // console.log(products)
    const { name, brand, description, available, gender, originalPrice, discountPrice, imgUrl, discountRoundPrice } = product
    // console.log(product);




    // restockQuantity
    const onSubmit = formInfo => {
        console.log(formInfo.restockQuantity)

        const product = {
            name: name,
            description: description,
            brand: brand,
            gender: gender,
            originalPrice: originalPrice,
            discountPrice: discountPrice,
            available: formInfo.restockQuantity,
            imgUrl: imgUrl,
            discountRoundPrice: discountRoundPrice,
            // review: review,
        }
        console.log('tasklist', product);


        const url = `http://localhost:5000/allshoes/${productID}`;

        //put updateOne
        fetch(url, {
            method: 'PUT',
            body: JSON.stringify(product),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => {
                console.log(json);
                toast.success('Product Quantity updated successfully')
                refetch()
            });
        reset()
    }

    const deliveryBtnDecrease = available - 1;
    // console.log(deliveryBtnDecrease);

    // delivey btn decrease product quantity by one  
    function deliveryProduct() {
        const product = {
            name: name,
            description: description,
            brand: brand,
            gender: gender,
            originalPrice: originalPrice,
            discountPrice: discountPrice,
            available: deliveryBtnDecrease,
            imgUrl: imgUrl,
            discountRoundPrice: discountRoundPrice,
            // review: review,
        }
        console.log('tasklist', product);


        const url = `http://localhost:5000/allshoes/${productID}`;

        //put updateOne
        fetch(url, {
            method: 'PUT',
            body: JSON.stringify(product),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => {
                console.log(json);
                toast.success('Product Quantity updated successfully')
                refetch()
            });
        reset()
    }
    return (
        <>
            <section class="text-gray-600 body-font overflow-hidden">
                <div class="container px-5 mx-auto ">
                    <div class="lg:w-4/5 mx-auto flex flex-wrap ">
                        <img alt="ecommerce" class="lg:w-1/2 w-full  lg:h-96 h-64 object-cover object-center rounded"
                            src={imgUrl} />

                        <div class=" border-gray-100 lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                            <p class="text-sm pb-2 title-font text-gray-500 uppercase tracking-widest">{brand}</p>
                            <h1 class=" text-3xl title-font font-medium mb-1">{name}</h1>

                            {/* Review section */}
                            <div class="flex mb-4 ">
                                <span class="flex items-center">
                                    <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-gold" viewBox="0 0 24 24">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                    </svg>
                                    <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-gold" viewBox="0 0 24 24">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                    </svg>
                                    <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-gold" viewBox="0 0 24 24">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                    </svg>
                                    <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-gold" viewBox="0 0 24 24">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                    </svg>
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-gold" viewBox="0 0 24 24">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                    </svg>
                                    <span class="text-gray-600 ml-3">4 Reviews</span>
                                </span>
                            </div>

                            {/* discount percentage */}
                            <p class="text-sm pb-2 title-font text-green uppercase tracking-widest">Save: {discountRoundPrice}%</p>


                            {/* price   */}
                            <div class="flex items-center ">
                                <span style={{ color: '#4c4c4cc7' }} class="title-font pr-4 line-through font-medium text-xl"><span>$</span>{originalPrice}</span>
                                <span class="title-font font-medium text-3xl  text-base"><span>$</span>{discountPrice}</span>
                                <button class="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Button</button>

                            </div>

                            <h1 className="pt-2 text-2xl inline-block mr-3">Availability: </h1>
                            <span className='text-md text-green'>{available} left in stock</span>

                            {/* color and size section      */}
                            <div class="flex flex-row item-start mt-6 items-center pb-5  mb-5">
                                <div class=" items-center">
                                    <select class="select select-primary w-22 mr-4 max-w-xs">
                                        <option disabled selected>Size</option>
                                        <option>9</option>
                                        <option>10</option>
                                        <option>11</option>
                                        <option>12</option>
                                    </select>
                                </div>
                                <div class="flex items-center">
                                    <span class="mr-3">Color</span>
                                    <button class="border-2 bg-green rounded-full w-6 h-6 focus:outline-none"></button>
                                    <button class="border-2 bg-black ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
                                    <button class="border-2 bg-base ml-1 bg-indigo-500 rounded-full w-6 h-6 focus:outline-none"></button>
                                </div>
                            </div>


                            {/* update quantity   */}
                            <div className="flex-col flex">

                                <form className="flex " onSubmit={handleSubmit(onSubmit)}>

                                    {/* Input discountPrice Price */}
                                    <div className="form-control w-full max-w-xs">
                                        <input
                                            type="number"
                                            placeholder=" Restock Quantity"
                                            className="input input-bordered w-full max-w-xs"
                                            {...register("restockQuantity", {
                                                required: {
                                                    value: true,
                                                    message: 'Product Price is Required'
                                                }
                                            })}
                                        />
                                        <label className="label">
                                            {errors.price?.type === 'required' && <span className="label-text-alt text-red-500">{errors.price.message}</span>}
                                        </label>
                                    </div>

                                    {/* Sbmit Button */}
                                    <input className='btn bg-base  text-white' type="submit" value="Upload Shoe" />
                                </form>

                                <button onClick={deliveryProduct} className="btn ">Delivered</button>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ShoeDetails;