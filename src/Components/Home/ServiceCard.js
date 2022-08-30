import React from 'react';
import './styles.css'

const ServiceCard = () => {
    return (
        <div className=" flex justify-center pt-6  flex-wrap  ">
            {/* cards  */}
            <div class="card lg:w-64 mb-3 sm:mr-2 md:w-80  sm:w-80 bg-base-100 shadow-xl">
                <div class="card-body  ">
                    <div class="flex w-56 ">
                        <box-icon color="#4cdab9" type='solid' name='car'></box-icon>
                        <div class='pl-3'>
                            <h2 class=" sm:text-xl font-semibold">FREE SHIPPING</h2>
                            <p className='text-base'>On all order over $2000</p>
                        </div>
                    </div>
                </div>
            </div >

            <div class="card lg:w-64 mb-3 sm:mr-2 md:w-80 sm:w-80 bg-base-100 shadow-xl">
                <div class="card-body  ">
                    <div class="flex w-56 ">
                        <box-icon color='#4cdab9' name='refresh'></box-icon>
                        <div class='pl-3'>
                            <h2 class="sm:text-xl font-semibold ">FREE RETURN</h2>
                            <p className='text-base'>1st exchange in 30 days</p>
                        </div>
                    </div>
                </div>
            </div >

            <div class="card lg:w-64 mb-3 sm:mr-2 md:w-80 sm:w-80 bg-base-100 shadow-xl">
                <div class="card-body  ">
                    <div class="flex w-56">
                        <box-icon className='box-icon' color="#4cdab9" type='solid' name='gift'></box-icon>

                        <div class='pl-3'>
                            <h2 class="sm:text-xl font-semibold ">USER DISCOUNT</h2>
                            <p className='text-base'>Register save up to $29%</p>
                        </div>
                    </div>
                </div>
            </div >
            <div class="card lg:w-64 mb-3 sm:mr-2 md:w-80 sm:w-80 bg-base-100 shadow-xl">
                <div class="card-body  ">
                    <div class="flex w-56 ">
                        <box-icon name='headphone' color='#4cdab9' ></box-icon>
                        <div class='pl-3'>
                            <h2 class="sm:text-xl font-semibold ">PREMIUM SUPPORT</h2>
                            <p className='text-base'>Support 24 hours per day</p>
                        </div>
                    </div>
                </div>
            </div >

        </div >
    );
};

export default ServiceCard;