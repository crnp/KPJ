import NextImage from '@/components/NextImage';
import Main from '@/components/layouts/Main';
import Meta from '@/components/layouts/Meta';
import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  return (
    <Main
      meta={
        <Meta title="KPJ Mesir" description="Keluarga Pelajar Jakarta Mesir" />
      }
    >
      <section className="flex flex-col justify-center items-center p-8 bg-gray-900">
        <div className="mb-8">
          <NextImage
            useSkeleton
            src="/assets/images/thumbnail.jpg"
            width="800"
            height="0"
            alt="KPJ"
          />
        </div>
        <div className="flex gap-12">
          <NextImage
            src="/assets/images/thumbnail.jpg"
            width="400"
            height="0"
            alt="KPJ"
          />
          <NextImage
            src="/assets/images/thumbnail.jpg"
            width="400"
            height="0"
            alt="KPJ"
          />
          <NextImage
            src="/assets/images/thumbnail.jpg"
            width="400"
            height="0"
            alt="KPJ"
          />
        </div>
      </section>
      <section className="bg-blue-300 h-screen">section 2</section>
    </Main>
  );
}
