import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import styles from "./References.module.css";

import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";

export default function App() {
  const images = [
    { img: "/img/burgerKing.png", alt: "Burger King" },
    { img: "/img/boyner.png", alt: "Boyner" },
    { img: "/img/ipekyol.png", alt: "Ipekyol" },
    { img: "/img/monoLife.png", alt: "Mono Life" },
    { img: "/img/popeyes.webp", alt: "Popeyes" },
    { img: "/img/ozsut.png", alt: "Ozsut" },
  ];

  return (
    <>
      <Swiper
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          480: {
            slidesPerView: 1,
            spaceBetween: 15,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        centeredSlides={true}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        className={styles.slider}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} className={styles.sliderSlide}>
            <div className={styles.imageContainer}>
              <Image
                src={image.img}
                alt={image.alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{ objectFit: "contain" }}
                className={styles.image}
                priority={index < 2}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
