import { useRouter } from 'next/router';

import {
  HiOutlineHome,
  HiOutlineDocumentText,
  HiOutlineLocationMarker,
  HiOutlineMenu,
  HiOutlinePhotograph,
  HiOutlineX,
} from 'react-icons/hi';

import { cx } from '@/utils/cx';
import Button from './Button';
import NextImage from '../NextImage';
import Link from 'next/link';
import logo from '@/public/assets/images/logo.png';
import navItems from '@/utils/nav';

export default function Navbar() {
  const router = useRouter();

  return (
    <div className="w-full">
      <div className="flex justify-between items-center py-2 px-4 lg:px-8 space-x-10">
        <div className="flex justify-start items-center">
          <NextImage src={logo} width="40" height="40" alt="KPJ" />
          <div className="font-bold text-md lg:text-xl text-white translate-y-2 ml-4">
            KPJ MESIR
          </div>
        </div>
        <nav className="flex space-x-5">
          {navItems.map((item) => (
            <Link href={item.href} key={item.name}>
              <Button active={router.route === item.href ? true : false}>
                {item.name}
              </Button>
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}
