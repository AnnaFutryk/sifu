import { Pagination, A11y, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import slide1 from "../../../../../../public/images/gallery/img1.png";
import slide2 from "../../../../../../public/images/gallery/img2.png";
import cls from "./styles.module.scss";
import Image from "next/image";
import Arrow from "../../../../../../public/icons/chevron.svg";

const slides = [
  {
    id: 1,
    image: slide1,
    alt: "Slide 1",
  },
  {
    id: 2,
    image: slide2,
    alt: "Slide 2",
  },
  {
    id: 3,
    image: slide1,
    alt: "Slide 3",
  },
  {
    id: 4,
    image: slide2,
    alt: "Slide 4",
  },
];

const GallerySlider = () => {
  return (
    <section className={cls.wrapper}>
      <Swiper
        className={cls.swipper}
        modules={[Pagination, A11y, Navigation]}
        spaceBetween={40}
        slidesPerView={"auto"}
        pagination={{ clickable: true }}
        navigation={{
          nextEl: `.${cls.next}`,
          prevEl: `.${cls.prev}`,
        }}
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
          </SwiperSlide>
        ))}
        <Arrow className={cls.prev} />
        <Arrow className={cls.next} />
      </Swiper>
    </section>
  );
};

export default GallerySlider;
