import Meta from '@/components/layouts/Meta';
import { sporta } from '@/utils/sporta';

import image1 from '@/public/assets/images/thumbnail.jpg';
import image2 from '@/public/assets/images/test.jpg';
import image3 from '@/public/assets/images/light.jpg';
import image4 from '@/public/assets/images/campfire.jpg';
import image5 from '@/public/assets/images/house.jpg';

import CarouselGallery from '@/components/layouts/CarouselGallery';
import Image from 'next/image';

const carouselItems = [
  { img: image1 },
  { img: image2 },
  { img: image3 },
  { img: image4 },
  { img: image5 },
  { img: image3 },
];

const photos = [
  image2,
  image3,
  image4,
  image5,
  image2,
  image3,
  image4,
  image5,
  image2,
];

export default function Gallery() {
  return (
    <>
      <Meta
        title="Gallery | KPJ Mesir"
        description="Keluarga Pelajar Jakarta Mesir"
      />
      <div className="overflow-hidden">
        <p
          className={`${sporta.className} text-white text-8xl tracking-widest whitespace-nowrap`}
        >
          R GALLERY. <span className="text-kpj-orange">OUR GALLERY.</span> OUR
          GALLERY.
        </p>
        <p
          className={`${sporta.className} text-kpj-orange text-8xl tracking-widest whitespace-nowrap`}
        >
          UR GALLERY. <span className="text-white">OUR GALLERY.</span> OUR
          GALLERY.
        </p>
      </div>
      <CarouselGallery items={carouselItems} useSkeleton />
      <div className="flex flex-col items-center justify-center mb-6">
        <h1
          className={`${sporta.className} text-center text-5xl my-6 text-white tracking-widest md:tracking-[2rem]`}
        >
          GALLERY
        </h1>
        <div className="grid grid-cols-3 gap-12">
          {photos.map((item, index) => (
            <Image
              key={index}
              className="rounded-2xl"
              src={item}
              width={550}
              height={0}
              alt="KPJ"
            />
          ))}
        </div>
      </div>
    </>
  );
}
