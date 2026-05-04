'use client';

import Link from 'next/link';
import { ArrowRight, ShoppingBag, Star, Truck, Shield, Clock } from 'lucide-react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import SliderOne from '../slider/SliderOne';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import SliderTwo from '../slider/SliderTwo';
import SliderThree from '../slider/SliderThree';
import SliderFour from '../slider/SliderFour';

const HeroBanner = () => {
    return (
        <div className="bg-linear-to-r from-amber-50 to-sky-50 overflow-hidden">
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={30}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 4000 }}
                loop={true}
            >
                <SwiperSlide> <SliderOne /> </SwiperSlide>
                <SwiperSlide> <SliderTwo/> </SwiperSlide>
                <SwiperSlide> <SliderThree/> </SwiperSlide>
                <SwiperSlide> <SliderFour/> </SwiperSlide>
            </Swiper>

        </div>
    );
};

export default HeroBanner;