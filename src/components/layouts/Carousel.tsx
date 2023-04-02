import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';

import { FreeMode, Autoplay } from 'swiper';

import NextImage from '../NextImage';
import Image from 'next/image';
import image1 from '@/public/assets/images/test.jpg';
import image2 from '@/public/assets/images/thumbnail.jpg';
import image3 from '@/public/assets/images/dog.jpg';

type ICarouselProps = {};

export default function Carousel(props: ICarouselProps) {
  return (
    <div className="bg-kpj-brown z-5">
      <Swiper
        slidesPerView={3}
        spaceBetween={40}
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
        className="bg-kpj-brown"
      >
        <SwiperSlide>
          <div className="flex flex-col items-center pt-8">
            <Image
              src={image1}
              alt="asd"
              height={300}
              className="rounded-2xl transition duration-300 ease-in-out hover:scale-110"
            />
            <h2 className="text-white text-2xl font-bold mt-5">The Jak FC</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col items-center pt-8">
            <Image
              src={image1}
              alt="asd"
              height={300}
              className="rounded-2xl transition duration-300 ease-in-out hover:scale-110"
            />
            <h2 className="text-white text-2xl font-bold mt-5">Pencak Silat</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col items-center pt-8">
            <Image
              src={image1}
              alt="asd"
              height={300}
              className="rounded-2xl transition duration-300 ease-in-out hover:scale-110"
            />
            <h2 className="text-white text-2xl font-bold mt-5">Hadroh</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col items-center pt-8">
            <Image
              src={image1}
              alt="asd"
              height={300}
              className="rounded-2xl transition duration-300 ease-in-out hover:scale-110"
            />
            <h2 className="text-white text-2xl font-bold mt-5">Seni Tari</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col items-center pt-8">
            <Image
              src={image1}
              alt="asd"
              height={300}
              className="rounded-2xl transition duration-300 ease-in-out hover:scale-110"
            />
            <h2 className="text-white text-2xl font-bold mt-5">Keputrian</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col items-center pt-8">
            <Image
              src={image1}
              alt="asd"
              height={300}
              className="rounded-2xl transition duration-300 ease-in-out hover:scale-110"
            />
            <h2 className="text-white text-2xl font-bold mt-5">Band</h2>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
