import React from 'react';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import './Hero.styles.css';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import hero1 from '../../assest/HeroImg/01hero.png';
import hero2 from '../../assest/HeroImg/02hero.png';
import hero3 from '../../assest/HeroImg/03hero.png';

const Hero = () => {
    return (
        <div className="">
            <Swiper
                spaceBetween={0}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Autoplay, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    < div div className="relative h-scren w-screen " >
                        <img className="object-fill sliderImg " src={hero1} alt="" />
                        <div className="absolute flex flex-col  justify-start">
                            <div><p className="heroP"> Man's original</p></div>
                            <div><h1 className="heroHead text-start" >Falcon Shoes</h1></div>
                            <div><p className="heroP pb-4 "> Lorem ipsum dolor amet consectetur <br />adipisicing Nobis, excepturi. </p></div>

                            <div className=" flex justify-start">
                                <button className="btn drop-shadow-xl heroBtn text-italic btn-sm bg-base">Buy now</button>
                            </div>
                        </div>
                    </ div>

                </SwiperSlide>
                <SwiperSlide>
                    < div div className="relative h-scren w-screen " >
                        <img className="object-fill sliderImg " src={hero2} alt="" />
                        <div className="absolute flex flex-col  justify-start">
                            <div><p className="heroP text-white "> Running Sneakers </p></div>
                            <div><h1 className="heroHead text-start " >Men's like flex</h1></div>
                            <div><p className="heroP text-white pb-4 "> Lorem ipsum dolor amet consectetur <br />adipisicing Nobis, excepturi. </p></div>

                            <div className=" flex justify-start">
                                <button className="btn heroBtn text-italic btn-sm bg-black">Buy now</button>
                            </div>
                        </div>
                    </ div>

                </SwiperSlide>
                <SwiperSlide>
                    < div div className="relative h-scren w-screen " >
                        <img className="object-fill sliderImg " src={hero3} alt="" />
                        <div className="absolute3 flex flex-col justify-end">
                            <div className="flex justify-end flex-col">
                                <div><p className="heroP flex justify-end  "> Welcome to </p></div>
                                <div><h1 style={{ color: '#4c4029' }} className="heroHead text-end" >Famous Footwear</h1></div>
                                <div><p className="heroP2 pb-4  flex justify-end  "> Lorem ipsum dolor amet consectetur <br />adipisicing Nobis, excepturi. </p></div>

                            </div>
                            <div className=" flex justify-end">
                                <button
                                    style={{ backgroundColor: '#4c4029' }} className="btn heroBtn btn-sm ">Buy now</button>
                            </div>
                        </div>
                    </ div>

                </SwiperSlide>


            </Swiper >

        </div>

    );
};

export default Hero;