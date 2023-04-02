import NextImage from '@/components/NextImage';
import Main from '@/components/layouts/Main';
import Meta from '@/components/layouts/Meta';
import Head from 'next/head';
import Image from 'next/image';
import localFont from 'next/font/local';

const sporta = localFont({ src: '../styles/fonts/sportaregular.ttf' });

export default function Home() {
  return (
    <Main
      meta={
        <Meta title="KPJ Mesir" description="Keluarga Pelajar Jakarta Mesir" />
      }
    >
      <section className="flex flex-col items-start p-8 bg-kpj-brown overflow-x-hidden">
        <div className="flex my-12 ml-16">
          <h1
            className={`${sporta.className} text-white text-9xl tracking-widest leading-normal`}
          >
            KELUARGA
            <br />
            PELAJAR JAKARTA
          </h1>
        </div>
        <div className="flex flex-row mx-auto gap-8">
          <NextImage
            useSkeleton
            src="/assets/images/test.jpg"
            width="400"
            height="0"
            alt="KPJ"
            className="-translate-y-5 hover:scale-105 transition-all ease-in-out"
            imgClassName="rounded-3xl"
          />
          <NextImage
            useSkeleton
            src="/assets/images/thumbnail.jpg"
            width="400"
            height="0"
            alt="KPJ"
            className="hover:scale-105 transition-all ease-in-out"
            imgClassName="rounded-3xl"
          />
          <NextImage
            useSkeleton
            src="/assets/images/test.jpg"
            width="400"
            height="0"
            alt="KPJ"
            className="-translate-y-5 hover:scale-105 transition-all ease-in-out"
            imgClassName="rounded-3xl"
          />
          <NextImage
            useSkeleton
            src="/assets/images/thumbnail.jpg"
            width="400"
            height="0"
            alt="KPJ"
            className="hover:scale-105 transition-all ease-in-out"
            imgClassName="rounded-3xl"
          />
        </div>
      </section>
      <section className="flex flex-col justify-center items-center p-8 bg-gray-700 overflow-x-hidden">
        <h1 className="text-kpj-orange text-4xl font-semibold mb-4">
          {/* <h1
          className={`text-kpj-orange text-4xl font-semibold mb-4 ${sporta.className}`}
        > */}
          Warga KPJ Mesir
        </h1>
        <h1 className="text-kpj-orange text-3xl font-semibold">
          <span className="underline mr-3">6969</span>
          <span className="text-sm">Warga</span>
        </h1>
      </section>
    </Main>
  );
}
