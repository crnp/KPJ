import Main from '@/components/layouts/Main';
import Meta from '@/components/layouts/Meta';
import localFont from 'next/font/local';
import {
  RiInstagramFill,
  RiWhatsappFill,
  RiFacebookFill,
  RiYoutubeFill,
} from 'react-icons/ri';
import { HiPhone } from 'react-icons/hi';
import { TbSocial } from 'react-icons/tb';
import Carousel from '@/components/layouts/Carousel';
import Image from 'next/image';

import logo from '@/public/assets/images/logo.png';

const sporta = localFont({ src: '../styles/fonts/sportaregular.ttf' });

export default function Home() {
  return (
    <Main
      meta={
        <Meta title="KPJ Mesir" description="Keluarga Pelajar Jakarta Mesir" />
      }
    >
      <section className="flex flex-col bg-kpj-brown overflow-x-hidden">
        {/* <Image
          src={logo}
          alt=""
          className="absolute left-[30vw] opacity-10"
          width={800}
        /> */}
        <div className="flex flex-row w-full my-10 lg:my-12 ml-12 lg:ml-28">
          <h1
            className={`${sporta.className} text-white text-4xl md:text-7xl lg:text-8xl xl:text-9xl tracking-widest leading-normal md:leading-relaxed lg:leading-relaxed xl:leading-relaxed`}
          >
            KELUARGA
            <br />
            PELAJAR JAKARTA
          </h1>
        </div>
      </section>
      <Carousel />
      <section className="flex flex-col justify-center p-8 bg-kpj-brown">
        <span className="w-full mx-auto my-14 p-[1px] bg-black lg:w-5/6"></span>
        <h1 className="text-kpj-orange text-4xl font-semibold mb-4 self-center">
          {/* <h1
          className={`text-kpj-orange text-4xl font-semibold mb-4 ${sporta.className}`}
        > */}
          Jumlah Warga KPJ
        </h1>
        <h1 className="flex flex-row items-center text-kpj-orange text-3xl font-semibold self-center">
          <p className="group transition duration-300 mr-3 cursor-pointer text-white">
            6969
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-400 h-0.5 bg-red-700"></span>
          </p>
          <span className="text-sm">Warga</span>
        </h1>
        <div className="flex justify-evenly py-12">
          <div className="flex flex-col items-center gap-4">
            <TbSocial size={150} color="white" />
            <p className="text-kpj-orange text-xl font-semibold">
              SOCIAL MEDIA KAMI
            </p>
            <div className="flex gap-5">
              <a href="https://facebook.com/kpjmesir" target="_blank">
                <RiFacebookFill
                  size={40}
                  color="white"
                  className="transition duration-100 ease-in-out p-0.5 hover:scale-125 hover:bg-kpj-orange rounded-lg"
                />
              </a>

              <a href="https://instagram.com/kpjmesir" target="_blank">
                <RiInstagramFill
                  size={40}
                  color="white"
                  className="transition duration-100 ease-in-out p-0.5 hover:scale-125 hover:bg-kpj-orange rounded-lg"
                />
              </a>
              <a href="https://youtube.com/kpjmesir" target="_blank">
                <RiYoutubeFill
                  size={40}
                  color="white"
                  className="transition duration-100 ease-in-out p-0.5 hover:scale-125 hover:bg-kpj-orange rounded-lg"
                />
              </a>
            </div>
          </div>
          <div className="flex flex-col items-center gap-4">
            <HiPhone size={150} color="white" />
            <p className="text-kpj-orange text-xl font-semibold">HOTLINE KPJ</p>
            <p className="text-white font-semibold text-3xl transition duration-100 hover:scale-105 hover:text-kpj-orange">
              +20123123123
            </p>
          </div>
        </div>
      </section>
    </Main>
  );
}
