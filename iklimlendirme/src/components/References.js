import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination, Autoplay } from "swiper/modules"; // Import Autoplay module
import Image from "next/image";

export default function App() {
  return (
    <>
      <Swiper
        slidesPerView={4}
        centeredSlides={true}
        spaceBetween={30}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]} // Add Autoplay module here
        className="mySwiper"
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
      >
        <SwiperSlide>
          <Image src={`/img/logo.jpg`} width={250} height={250} alt="logo" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={`/img/logo.jpg`} width={250} height={250} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={`/img/logo.jpg`} width={250} height={250} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={`/img/logo.jpg`} width={250} height={250} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={`/img/logo.jpg`} width={250} height={250} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={`/img/logo.jpg`} width={250} height={250} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={`/img/logo.jpg`} width={250} height={250} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={`/img/logo.jpg`} width={250} height={250} />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
