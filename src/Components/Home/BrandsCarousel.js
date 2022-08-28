import React from 'react';
import adidas from '../../../src/assest/BrandsLogo/adidas.svg';
import birkenstock from '../../../src/assest/BrandsLogo/birkenstock.svg';
import converse from '../../../src/assest/BrandsLogo/converse.svg';
import drmartens from '../../../src/assest/BrandsLogo/drmartens.svg';
import heydude from '../../../src/assest/BrandsLogo/heydude.svg';
import newbalance from '../../../src/assest/BrandsLogo/newbalance.svg';
import puma from '../../../src/assest/BrandsLogo/puma.svg';
import vans from '../../../src/assest/BrandsLogo/vans.svg';
import nike from '../../../src/assest/BrandsLogo/nike.svg';

import '../../../src/Components/Home/styles.css'
import "swiper/css";
import "swiper/css/navigation";
import { SwiperSlide, Swiper } from 'swiper/react';
import { Navigation, FreeMode, Autoplay } from "swiper";

const BrandsCarousel = () => {
    return (
        <>
            <Swiper
                slidesPerView={5}
                spaceBetween={30}
                freeMode={true}
                // centeredSlides={true}
                Navigation={true}
                autoplay={{
                    delay: 1800,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay, FreeMode, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide><img className="" src={adidas} alt="" /></SwiperSlide>
                <SwiperSlide><img className="" src={birkenstock} alt="" /></SwiperSlide>
                <SwiperSlide><img className="" src={converse} alt="" /></SwiperSlide>
                <SwiperSlide><img className="" src={nike} alt="" /></SwiperSlide>
                <SwiperSlide><img className="" src={heydude} alt="" /></SwiperSlide>
                <SwiperSlide><img className="" src={newbalance} alt="" /></SwiperSlide>
                <SwiperSlide><img className="" src={puma} alt="" /></SwiperSlide>
                <SwiperSlide><img className="" src={vans} alt="" /></SwiperSlide>
                <SwiperSlide><img className="" src={drmartens} alt="" /></SwiperSlide>
            </Swiper>
        </>
    );
};

export default BrandsCarousel;