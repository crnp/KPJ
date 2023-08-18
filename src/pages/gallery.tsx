import Meta from '@/components/layouts/Meta';
import { sporta } from '@/utils/sporta';

import bola from '@/public/assets/images/bola.png';
import palangpintu from '@/public/assets/images/palangpintu.png';
import tari from '@/public/assets/images/tari.png';
import marawis from '@/public/assets/images/marawis.png';
import band from '@/public/assets/images/bandormaba.png';

import aswaja from '@/public/assets/images/aswaja.png';
import gallery1 from '@/public/assets/images/gallery1.png';
import gallery2 from '@/public/assets/images/gallery2.png';
import jaxes from '@/public/assets/images/jaxes.png';
import jaxes2 from '@/public/assets/images/jaxes2.png';
import ormabajaxes from '@/public/assets/images/ormabajaxes.png';
import sosialita from '@/public/assets/images/sosialita.png';
import syekh from '@/public/assets/images/syekh.png';
import pp2 from '@/public/assets/images/pp2.png';

import CarouselGallery from '@/components/layouts/CarouselGallery';
import Image from 'next/image';

const carouselItems = [
  { img: bola },
  { img: palangpintu },
  { img: tari },
  { img: marawis },
  { img: band },
];

const photos = [
  aswaja,
  gallery1,
  gallery2,
  jaxes,
  jaxes2,
  ormabajaxes,
  sosialita,
  syekh,
  pp2,
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
          GALLERY. <span className="text-kpj-orange">OUR GALLERY.</span> OUR
          GALLERY.
        </p>
        <p
          className={`${sporta.className} text-kpj-orange text-8xl tracking-widest whitespace-nowrap`}
        >
          UR GALLERY. <span className="text-white">OUR GALLERY.</span> OUR
          GALLERY.
        </p>
      </div>
      <div className="hidden md:block">
        <CarouselGallery items={carouselItems} useSkeleton spv={3} />
      </div>
      <div className="block md:hidden">
        <CarouselGallery items={carouselItems} useSkeleton spv={2} />
      </div>
      <div className="flex flex-col items-center justify-center mb-6">
        <h1
          className={`${sporta.className} text-center text-5xl my-6 text-white tracking-widest md:tracking-[2rem]`}
        >
          GALLERY
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-12 px-6 md:px-8">
          {photos.map((item, index) => (
            <Image
              key={index}
              className="rounded-md md:rounded-lg lg:rounded-xl"
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
