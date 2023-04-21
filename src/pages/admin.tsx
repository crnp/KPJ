import { BiTrashAlt } from 'react-icons/bi';
import { useState } from 'react';
import { Taslim } from '@/utils/types';
import AdminForm from '@/components/layouts/AdminForm';
import { useRouter } from 'next/router';

interface AdminProps {
  taslim: Array<Taslim>;
}

export async function getServerSideProps() {
  const res = await fetch(process.env.API_URL as string);
  const taslim = await res.json();

  return {
    props: { taslim },
  };
}

export default function Admin(props: AdminProps) {
  const dev = process.env.NODE_ENV !== 'production';
  const apiURL = dev
    ? 'http://localhost:3000/api/taslim'
    : 'http://localhost:3000/api/taslim';

  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const { taslim } = props;

  return (
    <>
      <AdminForm url={apiURL} />
      <table className="min-w-full mx-auto table-auto border-collapse text-white">
        <thead>
          <tr className="bg-gray-800">
            <th className="px-16 py-2 border border-gray-400">
              <span>Nama</span>
            </th>
            <th className="px-16 py-2 border border-gray-400">
              <span>Hapus</span>
            </th>
          </tr>
        </thead>
        <tbody className="bg-gray-600 text-center">
          {taslim.map((t) => (
            <tr key={t._id}>
              <td className="px-16 py-2 border border-gray-400">{t.nama}</td>
              <td className="font-bold border border-gray-400 flex justify-center">
                <button
                  onClick={async (event) => {
                    setLoading(true);
                    await fetch(apiURL + '/' + t._id, {
                      method: 'delete',
                    });
                    setLoading(false);
                    router.push('/admin');
                  }}
                  className="flex justify-center items-center rounded-md bg-red-500 text-white px-4 py-2 hover:scale-105"
                  disabled={loading}
                >
                  Hapus
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
