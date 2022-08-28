import React from 'react';


const ServiceCard = () => {
    return (
        <div className=" flex justify-center pt-6  flex-wrap  ">
            {/* cards  */}
            <div class="card lg:w-64 mb-3 sm:mr-2 md:w-80  sm:w-80 bg-base-100 shadow-xl">
                <div class="card-body  ">
                    <div class="flex ">
                        <box-icon color="red" type='solid' name='car'></box-icon>
                        <div class='pl-3'>
                            <h2 class=" sm:text-xl font-semibold">FREE SHIPPING</h2>
                            <p>On all order over $2000</p>
                        </div>
                    </div>
                </div>
            </div >
            <div class="card lg:w-64 mb-3 sm:mr-2 md:w-80 sm:w-80 bg-base-100 shadow-xl">
                <div class="card-body  ">
                    <div class="flex  ">
                        <box-icon color='red' name='refresh'></box-icon>
                        <div class='pl-3'>
                            <h2 class="sm:text-xl font-semibold ">FREE RETURN</h2>
                            <p>on 1st exchange in 30 days</p>
                        </div>
                    </div>
                </div>
            </div >
            <div class="card lg:w-64 mb-3 sm:mr-2 md:w-80 sm:w-80 bg-base-100 shadow-xl">
                <div class="card-body  ">
                    <div class="flex justify-between ">
                        <box-icon color="red" size='md' type='solid' name='gift'></box-icon>

                        <div class='pl-3'>
                            <h2 class="sm:text-xl font-semibold ">MEMBER DISCOUNT</h2>
                            <p>Register & save up to $29%</p>
                        </div>
                    </div>
                </div>
            </div >
            <div class="card lg:w-64 mb-3 sm:mr-2 md:w-80 sm:w-80 bg-base-100 shadow-xl">
                <div class="card-body  ">
                    <div class="flex ">
                        <box-icon name='headphone' color='red' ></box-icon>
                        <div class='pl-3'>
                            <h2 class="sm:text-xl font-semibold ">PREMIUM SUPPORT</h2>
                            <p>Support 24 hours per day</p>
                        </div>
                    </div>
                </div>
            </div >

        </div >
    );
};

export default ServiceCard;