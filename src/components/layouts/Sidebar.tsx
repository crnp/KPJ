import NextImage from '../NextImage';
import logo from '@/public/assets/images/logo.png';
import navItems from '@/utils/nav';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Divider from './Divider';
import { cx } from '@/utils/cx';

export default function Sidebar() {
  const router = useRouter();
  return (
    <>
      <div className="py-6 w-[100vw] flex justify-start bg-kpj-gray peer-focus:top-0 peer:transition ease-out delay-150 duration-200">
        <div className="flex flex-col justify-start items-center gap-4 w-full">
          <NextImage src={logo} width="86" height="0" alt="KPJ" className="" />
          {navItems.map((item) => (
            <Link
              href={item.href}
              key={item.name}
              className="flex w-5/6 mx-auto justify-center"
            >
              <button
                className={cx(
                  router.route === item.href
                    ? 'bg-kpj-orange text-white'
                    : 'bg-white text-black',
                  'py-2 inline-block rounded-lg shadow-sm text-base font-semibold w-full'
                )}
              >
                {item.name}
              </button>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
