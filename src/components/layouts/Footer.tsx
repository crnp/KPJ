import logo from '@/public/assets/images/logo.png';
import rental from '@/public/assets/images/rental.png';
import wisma from '@/public/assets/images/wisma.png';
import NextImage from '../NextImage';
import { RiInstagramFill, RiWhatsappFill, RiYoutubeFill } from 'react-icons/ri';
import Divider from './Divider';

export default function Footer() {
  return (
    <footer className="flex flex-col justify-center items-center text-center text-sm py-8 pb-8 px-1 bg-kpj-gray">
      <div className="flex flex-col md:flex-row items-center md:items-start w-full justify-evenly mb-6 gap-12 md:gap-0 h-full">
        <div className="flex flex-col gap-3 items-center">
          <div className="flex flex-row items-center">
            <NextImage src={logo} width="32" height="0" alt="KPJ" />
            <p className="ml-2 font-bold text-md text-white translate-y-2">
              KPJ MESIR
            </p>
          </div>
          <p className="text-md text-white text-start">Social Media Kami</p>
          <div className="flex flex-row gap-3 items-start">
            <a href="https://www.youtube.com/@kpjmesir" target="_blank">
              <RiYoutubeFill className="transition duration-100 ease-in-out p-1 bg-white text-black hover:text-white hover:scale-125 hover:bg-kpj-orange rounded-full text-3xl" />
            </a>
            <a href="https://wa.me/6282113864294" target="_blank">
              <RiWhatsappFill className="transition duration-100 ease-in-out p-1 bg-white text-black hover:text-white hover:scale-125 hover:bg-kpj-orange rounded-full text-3xl" />
            </a>
            <a href="https://www.instagram.com/kpjmesir" target="_blank">
              <RiInstagramFill className="transition duration-100 ease-in-out p-1 bg-white text-black hover:text-white hover:scale-125 hover:bg-kpj-orange rounded-full text-3xl" />
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-3 items-start">
          <div className="flex flex-row items-center">
            <div className="flex items-start md:items-center md:h-[55.5px]">
              <p className="font-bold text-md text-white md:translate-y-2">
                BADAN USAHA KPJ
              </p>
            </div>
          </div>
          <div className="flex flex-row items-center gap-2">
            <a href="https://wa.me/6282113864294" target="_blank">
              <RiWhatsappFill className="transition duration-100 ease-in-out p-1 bg-white text-black hover:text-white hover:scale-125 hover:bg-kpj-orange rounded-full text-3xl" />
            </a>
            <p className="text-md text-white">Narahubung</p>
          </div>
          <div className="flex flex-row gap-3 items-center">
            <NextImage src={rental} width="72" height="0" alt="KPJ" />
            <NextImage src={wisma} width="48" height="0" alt="KPJ" />
          </div>
        </div>
        <div className="flex flex-col gap-3 items-start">
          <div className="flex items-start md:items-center md:h-[55.5px]">
            <p className="font-bold text-md text-white md:translate-y-2">
              HOTLINE KPJ MESIR
            </p>
          </div>
          <p className="text-lg text-white font-semibold">+20123123123</p>
        </div>
      </div>
      <Divider />
      <span className="text-white mt-8">
        © {new Date().getFullYear()} Keluarga Pelajar Jakarta Mesir,{' '}
        <span className="inline-block">All Rights Reserved.</span>
      </span>
      <div className="flex flex-row gap-1">
        <span className="text-white">Developed by</span>
        <a href="https://instagram.com/cpr.studios" target="_blank">
          <span className="group transition duration-300 font-semibold text-white">
            CPR Studios
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-400 h-0.5 bg-white"></span>
          </span>
        </a>
      </div>
    </footer>
  );
}
