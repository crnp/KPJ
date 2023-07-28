import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';

import { FreeMode, Autoplay } from 'swiper';

import Image, { StaticImageData } from 'next/image';
import { cx } from '@/utils/cx';
import { useState } from 'react';

type ICarouselGalleryProps = {
  useSkeleton?: boolean;
  items: { img: StaticImageData }[];
  spv: number;
};

export default function CarouselGallery({
  useSkeleton = false,
  ...props
}: ICarouselGalleryProps) {
  const [status, setStatus] = useState(useSkeleton ? 'loading' : 'complete');

  return (
    <div className="z-5">
      <Swiper
        slidesPerView={props.spv}
        spaceBetween={20}
        centeredSlides={true}
        breakpoints={{
          640: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
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
      >
        {props.items.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center py-8">
              <Image
                src={item.img}
                alt="KPJ"
                height={300}
                onLoadingComplete={() => setStatus('complete')}
                className={cx(
                  status === 'loading' && 'animate-pulse',
                  'rounded-2xl transition duration-300 ease-in-out hover:scale-110'
                )}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
