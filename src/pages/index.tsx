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
      <section>tes</section>
    </Main>
  );
}
