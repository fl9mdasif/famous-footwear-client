import React from 'react';
import img1 from '../../assest/Image/1.jpg'
import img2 from '../../assest/Image/2.jpg'
import img3 from '../../assest/Image/3.jpg'
import img4 from '../../assest/Image/4.jpg'
// import img5 from '../../assest/Image/5.jpg'
import img6 from '../../assest/Image/6.jpg'
// import img7 from '../../assest/Image/7.jpg'
import img8 from '../../assest/Image/8.jpg'

const ProductGallery = () => {
    return (
        <div>
            <section class="text-gray-600 body-font">
                <div class="container px-5 py-24 mx-auto flex flex-wrap">
                    <div class="flex w-full mb-20 flex-wrap">
                        <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4">Brands in our warehouse </h1>
                        <p class="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">Discover The Season's Must-Have Pieces From Ready-to-Wear Fashion to Stylish Accessories. Take 10% off new arrivals with code WEBSTER10 at checkout. Trendy & Diverse Styles. New Arrivals. Online Exclusives. Markdown Sale. Luxury Designer Brands.</p>
                    </div>
                    <div class="flex flex-wrap md:-m-2 -m-1">
                        <div class="flex flex-wrap w-1/2">
                            <div class="md:p-2 p-1 w-1/2">
                                <img alt="gallery" class="w-full object-cover h-full object-center block" src={img3} />
                            </div>
                            <div class="md:p-2 p-1 w-1/2">
                                <img alt="gallery" class="w-full object-cover h-full object-center block" src={img4} />
                            </div>
                            <div class="md:p-2 p-1 w-full">
                                <img alt="gallery" class="w-full h-full object-cover object-center block" src={img1} />
                            </div>
                        </div>
                        <div class="flex flex-wrap w-1/2">
                            <div class="md:p-2 p-1 w-full">
                                <img alt="gallery" class="w-full h-full object-cover object-center block" src={img2} />
                            </div>
                            <div class="md:p-2 p-1 w-1/2">
                                <img alt="gallery" class="w-full object-cover h-full object-center block" src={img8} />
                            </div>
                            <div class="md:p-2 p-1 w-1/2">
                                <img alt="gallery" class="w-full object-cover h-full object-center block" src={img6} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ProductGallery;