import Meta from '@/components/layouts/Meta';
import Carousel from '@/components/layouts/Carousel';

import image1 from '@/public/assets/images/test.jpg';
import image2 from '@/public/assets/images/thumbnail.jpg';
import image3 from '@/public/assets/images/dog.jpg';

import { sporta } from '@/utils/sporta';
import Divider from '@/components/layouts/Divider';
import Section from '@/components/layouts/Section';
import Map from '@/components/layouts/Map';

const carouselItems = [
  { img: image1, text: 'The Jak FC' },
  { img: image2, text: 'Pencak Silat' },
  { img: image1, text: 'Seni Tari ' },
  { img: image2, text: 'Hadroh ' },
  { img: image1, text: 'Keputrian ' },
  { img: image2, text: 'Band ' },
];

export default function Home() {
  return (
    <>
      <Meta title="KPJ Mesir" description="Keluarga Pelajar Jakarta Mesir" />
      <Section className="overflow-x-hidden">
        <div className="flex w-full my-4 ml-12 lg:my-12 lg:ml-28">
          <h1
            className={`${sporta.className} text-white text-4xl md:text-7xl lg:text-8xl xl:text-9xl tracking-widest leading-normal md:leading-relaxed lg:leading-relaxed xl:leading-relaxed`}
          >
            KELUARGA
            <br />
            PELAJAR JAKARTA
          </h1>
        </div>
        <Carousel items={carouselItems} useSkeleton />
      </Section>
      {/* <Section className="items-center">
        <h1 className="text-kpj-orange text-3xl md:text-4xl font-semibold">
          FAKTA KPJ
        </h1>
        <h2 className="flex flex-row items-center text-kpj-orange text-xl md:text-2xl font-semibold mt-4">
          <p className="group transition duration-300 mr-3 text-white text-md">
            6969
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-400 h-0.5 bg-kpj-orange"></span>
          </p>
          <span className="">Warga</span>
        </h2>
      </Section> */}
      <Divider />
      <Section className="items-center">
        <h1 className="text-kpj-orange text-3xl md:text-4xl font-semibold self-center mb-4">
          SEKRETARIAT <span className="text-white">KPJ</span>
        </h1>
        <Map />
      </Section>
    </>
  );
}
