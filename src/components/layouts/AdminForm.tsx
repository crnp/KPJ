import { useRouter } from 'next/router';
import { FormEventHandler, useRef, useState } from 'react';
import { Taslim } from '@/utils/types';

interface AdminFormProps {
  url: string;
}

export default function AdminForm(props: AdminFormProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const item = useRef<HTMLInputElement>(null);

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    let taslim: Taslim = { nama: '' };
    if (null !== item.current) {
      setLoading(true);
      taslim = { nama: item.current.value };

      await fetch(props.url, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(taslim),
      });
      item.current.value = '';
    }
    setLoading(false);
    router.push('/admin');
  };

  return (
    <form className="flex gap-4 px-8 py-6" onSubmit={handleSubmit}>
      <div className="input-type">
        <input
          type="text"
          ref={item}
          name="name"
          placeholder="Nama"
          className="border w-full px-5 py-3 focus:outline-none rounded-md"
          autoComplete="off"
          disabled={loading}
        />
      </div>
      <button
        type="submit"
        className="flex justify-center items-center rounded-md bg-green-500 text-white px-4 py-2 hover:scale-105"
        disabled={loading}
      >
        Submit
      </button>
    </form>
  );
}
