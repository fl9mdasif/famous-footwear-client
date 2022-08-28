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
import "swiper/css/pagination";
import { SwiperSlide, Swiper } from 'swiper/react';
import { Pagination, FreeMode, Autoplay } from "swiper";

const BrandsCarousel = () => {
    return (
        <>
            <Swiper
                slidesPerView={5}
                spaceBetween={30}
                freeMode={true}
                centeredSlides={true}

                // pagination={{
                //     clickable: true,
                // }}
                autoplay={{
                    delay: 1800,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay, FreeMode]}
                className="mySwiper"
            >
                <SwiperSlide><img src={adidas} alt="" /></SwiperSlide>
                <SwiperSlide><img src={birkenstock} alt="" /></SwiperSlide>
                <SwiperSlide><img src={converse} alt="" /></SwiperSlide>
                <SwiperSlide><img src={nike} alt="" /></SwiperSlide>
                <SwiperSlide><img src={heydude} alt="" /></SwiperSlide>
                <SwiperSlide><img src={newbalance} alt="" /></SwiperSlide>
                <SwiperSlide><img src={puma} alt="" /></SwiperSlide>
                <SwiperSlide><img src={vans} alt="" /></SwiperSlide>
                <SwiperSlide><img src={drmartens} alt="" /></SwiperSlide>
            </Swiper>
        </>
    );
};

export default BrandsCarousel;