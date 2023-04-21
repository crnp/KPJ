import Meta from '@/components/layouts/Meta';
import Section from '@/components/layouts/Section';
import { Taslim } from '@/utils/types';
import TaslimTable from '@/components/layouts/TaslimTable';

interface TaslimProps {
  taslim: Array<Taslim>;
}

export async function getServerSideProps() {
  const res = await fetch(process.env.API_URL as string);
  const taslim = await res.json();

  return {
    props: { taslim },
  };
}

export default function TaslimPage(props: TaslimProps) {
  const { taslim } = props;
  return (
    <>
      <Meta
        title="Taslim | KPJ Mesir"
        description="Keluarga Pelajar Jakarta Mesir"
      />
      <Section className="text-white px-12">
        <TaslimTable taslim={taslim} />
      </Section>
    </>
  );
}
