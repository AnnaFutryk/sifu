"use client";
import { Pagination, Scrollbar, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import slide1 from "../../../../../public/images/slider/slide1.png";
import slide2 from "../../../../../public/images/slider/slide2.png";
import slide3 from "../../../../../public/images/slider/slide3.png";
import cls from "./styles.module.scss";
import Image from "next/image";

const slides = [
  {
    id: 1,
    image: slide1,
    alt: "Slide 1",
    title: "ON THE PATH OF VENGEANCE",
    txt: "The hunt for the assassins of your family will take you through the hidden corners of the city, from gang-ridden suburbs to the cold hallways of corporate towers. You have one day, and countless enemies on your way. Time will be the price to pay.",
  },
  {
    id: 2,
    image: slide2,
    alt: "Slide 2",
    title: "ON THE PATH OF VENGEANCE",
    txt: "The hunt for the assassins of your family will take you through the hidden corners of the city, from gang-ridden suburbs to the cold hallways of corporate towers. You have one day, and countless enemies on your way. Time will be the price to pay.",
  },
  {
    id: 3,
    image: slide3,
    alt: "Slide 3",
    title: "TRAINING NEVER ENDS",
    txt: "The hunt for the assassins of your family will take you through the hidden corners of the city, from gang-ridden suburbs to the cold hallways of corporate towers. You have one day, and countless enemies on your way. Time will be the price to pay.",
  },
];

const SliderSection = () => {
  return (
    <section className={cls.wrapper}>
      <Swiper
        className={cls.swipper}
        modules={[Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={30}
        slidesPerView={"auto"}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className={cls.slide}>
            <div className={cls.slideWrapp}>
              <Image
                src={slide.image}
                alt={slide.alt}
                className={cls.slideImg}
                sizes="100vh"
              />
            </div>
            <div className={cls.textBlock}>
              <h2 className={cls.title}>{slide.title}</h2>
              <hr className={cls.line} />
              <p className={cls.text}>{ slide.txt}</p>
            </div>
           
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default SliderSection;
