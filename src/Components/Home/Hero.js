import React from 'react';
// Import Swiper React components
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import '../../Components/Home/styles.css';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
const Hero = () => {
    return (
        <>
            <Swiper
                spaceBetween={0}
                // centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    < div div className="relative h-scren w-screen " >
                        <img className="object-fill sliderImg " src=" https://cdn.shopify.com/s/files/1/0145/5613/5478/files/banner-v3-img2.jpg?v=1565864825" alt="" />
                        <div className="absolute flex flex-col  justify-start">
                            <p className="heroP"> Welcome to </p>
                            <h1 className="heroHead" >Famous Footwear</h1>
                            <div className=" flex justify-start">
                                <button className="btn heroBtn text-italic btn-sm bg-base">Buy now</button>
                            </div>
                        </div>
                    </ div>

                </SwiperSlide>
                <SwiperSlide>
                    < div div className="relative h-scren w-screen " >
                        <img className="object-fill sliderImg " src=" https://cdn.shopify.com/s/files/1/0145/5613/5478/files/banner-v3-img2.jpg?v=1565864825" alt="" />
                        <div className="absolute flex flex-col  justify-start">
                            <p className="heroP"> Welcome to </p>
                            <h1 className="heroHead" >Famous Footwear</h1>
                            <div className=" flex justify-start">
                                <button className="btn heroBtn text-italic btn-sm bg-base">Buy now</button>
                            </div>
                        </div>
                    </ div>

                </SwiperSlide>
                <SwiperSlide>
                    < div div className="relative h-scren w-screen " >
                        <img className="object-fill sliderImg " src=" https://cdn.shopify.com/s/files/1/0145/5613/5478/files/banner-v3-img2.jpg?v=1565864825" alt="" />
                        <div className="absolute flex flex-col  justify-start">
                            <p className="heroP"> Welcome to </p>
                            <h1 className="heroHead" >Famous Footwear</h1>
                            <div className=" flex justify-start">
                                <button className="btn heroBtn text-italic btn-sm bg-base">Buy now</button>
                            </div>
                        </div>
                    </ div>

                </SwiperSlide>


            </Swiper >

        </>

    );
};

export default Hero;