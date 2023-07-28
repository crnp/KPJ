import Meta from '@/components/layouts/Meta';
import Carousel from '@/components/layouts/Carousel';

import image1 from '@/public/assets/images/test.jpg';
import image2 from '@/public/assets/images/thumbnail.jpg';

import { sporta } from '@/utils/sporta';
import Divider from '@/components/layouts/Divider';
import Section from '@/components/layouts/Section';
import Map from '@/components/layouts/Map';
import Image from 'next/image';

import NextImage from '@/components/NextImage';
import logo from '@/public/assets/images/logo.png';
import { HiArrowDown } from 'react-icons/hi';

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
        <div className="hidden md:block">
          <Carousel items={carouselItems} useSkeleton spv={3} />
        </div>
        <div className="block md:hidden">
          <Carousel items={carouselItems} useSkeleton spv={2} />
        </div>
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
      <Section>
        <div className="relative h-[20rem] md:mt-20">
          <Image src={image1} alt="Profil" fill className="object-cover" />
          <h1
            className={`${sporta.className} text-kpj-orange text-3xl md:text-6xl lg:text-7xl xl:text-8xl tracking-widest w-full text-center -top-[5%] md:-top-[9%] lg:-top-[13%] absolute`}
          >
            KELUARGA PELAJAR JAKARTA
          </h1>
        </div>
        <div className="px-8 mt-12">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <p className="mb-3 text-white text-justify">
              <span className="font-bold">Keluarga Pelajar Jakarta</span> yang
              disingkat menjadi KPJ berdiri pada tahun 1960-an, dipelopori oleh
              beberapa pelajar senior yang berasal dari Jakarta dan sekitarnya.
              Pada awalnya hanya berjalan beberapa tahun saja dan kemudian vakum
              kurang lebih dua tahun yang disebabkan oleh menyusutnya jumlah
              pelajar Jakarta yang ada di Mesir. Arus pelajar Jakarta (Betawi)
              yang datang ke Mesir mengalami peningkatan pada tahun 1969 yang
              menyebabkan pada tahun 1973 para pelajar junior mengajukan kepada
              para senior agar mengaktifkan dan meremajakan kembali kekeluargaan
              ini.
            </p>
            <p className="mb-3 text-white text-justify">
              Pada awal berdirinya, Keluarga Pelajar Jakarta masih dalam bentuk
              ejaan lama;{' '}
              <span className="font-bold">Keluarga Pelajar Djakarta (KPD)</span>
              , yang pada akhirnya disesuaikan dengan ejaan baru yang disingkat
              menjadi KPJ. Para pelopor yang mengaktifkan dan meremajakan
              kekeluargaan ini diantaranya DR. Musa Fathullah Harun (Jak-Sel),
              Bapak Bakhtiar (Tambun) dan Bapak Marzuki Arman (Jak-Sel)
            </p>
          </div>
        </div>
      </Section>
      <Section className="px-16">
        <div className="flex justify-center md:justify-end">
          <div className="min-w-[160px] py-2 px-4 rounded-full bg-kpj-orange shadow-sm text-white text-center font-bold">
            LOGO
          </div>
        </div>
        <div className="flex flex-col md:flex-row mt-8 items-center">
          <div className="text-white text-xl md:basis-2/3 order-2 md:order-1">
            <div className="flex flex-col gap-8">
              <div>
                <p className="font-bold">Simbol</p>
                <ul className="list-disc">
                  <li>Tugu Monas</li>
                  <li>Buku Terbuka</li>
                  <li>Bintang Segi Delapan</li>
                </ul>
              </div>
              <div>
                <p className="font-bold">Warna</p>
                <ul className="list-disc">
                  <li>
                    Monas =<span className="text-[#fefe00]"> Kuning Emas </span>{' '}
                    dengan puncak tugu berwarna
                    <span className="text-[#ff0000]"> merah</span>
                  </li>
                  <li>Buku Terbuka = Putih bergaris hitam</li>
                  <li>
                    Bintang Segi Delapan ={' '}
                    <span className="text-[#009044]">Hijau </span>
                    dengan garis hitam
                  </li>
                </ul>
              </div>
              <div>
                <p className="font-bold">Filosofi</p>
                <ul className="list-disc">
                  <li>Monas = Anggota KPJ adalah anak-anak Jakarta</li>
                  <li>Buku = KPJ adalah organisasi pelajar</li>
                  <li>Bintang Segi Delapan = Melambangkan dunia Islam</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <NextImage src={logo} width={200} height={0} alt="KPJ" />
          </div>
        </div>
      </Section>
      <Section className="px-16">
        <div className="flex justify-center md:justify-start">
          <div className="min-w-[160px] py-2 px-6 ml-4 rounded-full bg-kpj-orange shadow-sm text-white text-center font-bold">
            STRUKTUR
          </div>
        </div>
        <div className="flex justify-center">
          <div className="flex flex-col items-center gap-2 mt-8">
            <div className="bg-white rounded-lg px-6 text-xl">MP</div>
            <HiArrowDown className="text-2xl text-white" />
            <div className="bg-white rounded-lg px-6 text-xl">MPO</div>
            <HiArrowDown className="text-2xl text-white" />
            <div className="bg-white rounded-lg px-6 text-xl">
              Dewan Pengurus
            </div>
          </div>
        </div>
      </Section>
      <Section className="px-16">
        <div className="flex justify-center md:justify-end">
          <div className="min-w-[160px] py-2 px-4 rounded-full bg-kpj-orange shadow-sm text-white text-center font-bold">
            TUJUAN
          </div>
        </div>
        <div className="flex flex-col md:flex-row mt-8 items-center justify-between ">
          <div className="text-white text-xl order-2 basis-1/2">
            <div className="flex flex-col gap-8">
              <div>
                <p className="font-bold">Tujuan Khusus</p>
                <ul className="mt-4 list-disc">
                  <li>Menjalin Silaturrahmi antar warga KPJ.</li>
                  <li>Menjalin Mempererat Ukhuwah Islamiyah</li>
                  <li>
                    Membantu dan membimbing anggota dalam usaha kelancaran studi
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="order-1 mb-6 md:mb-0 basis-1/2 items-center">
            <Image src={image1} width={550} height={0} alt="KPJ" />
          </div>
        </div>
        <div className="flex flex-col md:flex-row mt-8 items-center justify-between">
          <div className="text-white text-xl basis-1/2 order-2 md:order-1">
            <div className="flex flex-col gap-8">
              <div>
                <p className="font-bold">Tujuan Umum</p>
                <ul className="mt-4 list-disc">
                  <li>
                    Meningkatkan volume dakwah Islamiyah di Jakarta khususnya,
                    dengan jalan dibentukya ikatan alumni timur-tengah di tanah
                    air sehingga jalur komunikasi antara Tulusan timur tengah
                    akan lancar dan saling membantu dalam mengatasi problematika
                    berdakwah.
                  </li>
                  <li>
                    Menyiapkan wadah untuk menampung alumni KPJ di tanah air
                    dalam bentuk sarana pendidikan (sebuah wadah pendidikan
                    sudah terealisasikan di daerah Ciganjur).
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex order-1 mb-6 md:mb-0 md:order-2 ">
            <Image src={image1} width={550} height={0} alt="KPJ" />
          </div>
        </div>
      </Section>
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
