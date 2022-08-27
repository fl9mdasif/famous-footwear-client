// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import "../../src/Components/Home/styles.css";
import Hero from "./Home/Hero";
import { Autoplay, Pagination, Navigation } from "swiper";

const Practice = () => {
    // const ref = useRef()
    return (
        <div className="lg:h-screen">
            <Swiper
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

            </Swiper>
        </div>

    );
};

export default Practice;