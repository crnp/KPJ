import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';

import { FreeMode, Autoplay } from 'swiper';

import NextImage from '../NextImage';

type ICarouselProps = {};

export default function Carousel(props: ICarouselProps) {
  return (
    <div className="bg-kpj-brown z-5 flex">
      <Swiper
        slidesPerView={3}
        spaceBetween={10}
        centeredSlides={true}
        breakpoints={{
          1280: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        freeMode={true}
        loop={true}
        loopedSlides={2}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        speed={300}
        modules={[FreeMode, Autoplay]}
        className="bg-kpj-brown "
      >
        <SwiperSlide>
          <NextImage
            useSkeleton
            src="/assets/images/test.jpg"
            width="400"
            height="0"
            alt="KPJ"
            imgClassName="rounded-3xl"
          />
        </SwiperSlide>
        <SwiperSlide>
          <NextImage
            useSkeleton
            src="/assets/images/thumbnail.jpg"
            width="400"
            height="0"
            alt="KPJ"
            imgClassName="rounded-3xl"
          />
        </SwiperSlide>
        <SwiperSlide>
          <NextImage
            useSkeleton
            src="/assets/images/test.jpg"
            width="400"
            height="0"
            alt="KPJ"
            imgClassName="rounded-3xl"
          />
        </SwiperSlide>
        <SwiperSlide>
          <NextImage
            useSkeleton
            src="/assets/images/thumbnail.jpg"
            width="400"
            height="0"
            alt="KPJ"
            imgClassName="rounded-3xl"
          />
        </SwiperSlide>
        <SwiperSlide>
          <NextImage
            useSkeleton
            src="/assets/images/test.jpg"
            width="400"
            height="0"
            alt="KPJ"
            imgClassName="rounded-3xl"
          />
        </SwiperSlide>
        <SwiperSlide>
          <NextImage
            useSkeleton
            src="/assets/images/thumbnail.jpg"
            width="400"
            height="0"
            alt="KPJ"
            imgClassName="rounded-3xl"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
