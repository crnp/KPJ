import { Taslim } from '@/utils/types';

interface TaslimTableProps {
  taslim: Array<Taslim>;
}

export default function TaslimTable(props: TaslimTableProps) {
  const { taslim } = props;
  return (
    <table className="min-w-full table-auto">
      <thead>
        <tr className="bg-gray-800">
          <th className="px-16 py-2">
            <span>Nama-nama yang sudah bisa diambil iqomahnya</span>
          </th>
        </tr>
      </thead>
      <tbody className="bg-gray-600 text-center">
        {taslim.map((t) => (
          <tr key={t._id}>
            <td className="px-16 py-2 border border-gray-400">{t.nama}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
