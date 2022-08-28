import React from 'react';

const ShoeDetails = () => {
    return (
        <>
            <section class="text-gray-600 body-font overflow-hidden">
                <div class="container px-5 mx-auto ">
                    <div class="lg:w-4/5 mx-auto flex flex-wrap ">
                        <img alt="ecommerce" class="lg:w-1/2 w-full  lg:h-96 h-64 object-cover object-center rounded"
                            src="https://i.ibb.co/D9LLPML/Oliver-Mason-Ralph.jpg" />

                        <div class=" border-gray-100 lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                            <h2 class="text-sm pb-2 title-font text-gray-500 tracking-widest">BRAND NAME</h2>
                            <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">The Catcher in the Rye</h1>

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
                            {/* price   */}
                            <div class="flex items-center ">
                                <span style={{ color: '#4c4c4cc7' }} class="title-font pr-4 line-through font-medium text-xl">$58.00</span>
                                <span class="title-font font-medium text-3xl  text-base">$58.00</span>
                                <button class="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Button</button>

                            </div>

                            <h1 className="pt-2 text-2xl inline-block mr-3">Availability: </h1>
                            <span className='text-md text-green'>20 left in stock</span>

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
                            <div className="flex-col flex">
                                <div>
                                    <input className="border" type="number" placeholder='quantity' name="number" id="" />
                                    <button className="btn mb-2 text-md ">Update Quantity</button>
                                </div>
                                <button className="btn ">Delivered</button>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ShoeDetails;