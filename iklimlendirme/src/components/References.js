import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";

export default function References() {
return (
    <>
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
            <SwiperSlide>
                <Image src="/img/logo.jpg" alt="Photo 1" width={500} height={300} />
            </SwiperSlide>
            <SwiperSlide>
                <Image src="/img/logo.jpg" alt="Photo 2" width={500} height={300} />
            </SwiperSlide>
            <SwiperSlide>
                <Image src="/img/logo.jpg" alt="Photo 3" width={500} height={300} />
            </SwiperSlide>
        </Swiper>
    </>
);
}
