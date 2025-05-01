import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import styles from "./References.module.css";

import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";

export default function App() {
  const images = [
    { img: "/img/logo.jpg", alt: "Image 1" },
    { img: "/img/logo.jpg", alt: "Image 2" },
    { img: "/img/logo.jpg", alt: "Image 3" },
    { img: "/img/logo.jpg", alt: "Image 4" },
    { img: "/img/logo.jpg", alt: "Image 5" },
    { img: "/img/logo.jpg", alt: "Image 6" },
    { img: "/img/logo.jpg", alt: "Image 7" },
    { img: "/img/logo.jpg", alt: "Image 8" },
    { img: "/img/logo.jpg", alt: "Image 9" },
  ];

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
                layout="fill"
                className={styles.image}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
