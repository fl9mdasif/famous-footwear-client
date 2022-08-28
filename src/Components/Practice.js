// Import Swiper React components
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import "../../src/Components/Home/styles.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";

const Practice = () => {
    // const ref = useRef()
    return (
        <div className="h-screen">
            {/* <Swiper
                spaceBetween={30}
                centeredSlides={true}
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
                <SwiperSlide><img className="object-contain sm:h-80 " src="https://media.rackroomshoes.com/img/events/2022/summer/homepage/20220706-hero.jpg" /></SwiperSlide>
                <SwiperSlide><img className="object-contain " src="https://media.rackroomshoes.com/img/events/2022/summer/homepage/20220706-hero.jpg" /></SwiperSlide>
                <SwiperSlide><img className="object-contain " src="https://cdn.pixabay.com/photo/2022/08/17/02/23/edison-bulb-7391388__480.jpg" /></SwiperSlide>

            </Swiper> */}
            <div className=''>
                <div className="relative h-screen">
                    <img src="https://media.rackroomshoes.com/img/events/2022/summer/homepage/20220706-hero.jpg" alt="" />

                    <div className="absolute flex flex-col  ">
                        <h1 className="heroHead"> Welcome to
                            <br />famous Footwear
                        </h1>

                        <div className=" flex justify-end">
                            <button className="btn heroBtn btn-sm bg-base">Buy now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Practice;