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

const navitems = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'Profile',
    href: '/profile',
  },
  {
    name: 'Galeri',
    href: '/galeri',
  },
  {
    name: 'Taslim',
    href: '/taslim',
  },
];

export default function Navbar() {
  const router = useRouter();

  return (
    <div className="mx-auto px-4 sm:px-6">
      <div className="flex justify-between items-center py-2 px-8 xl:px-0 md:justify-start md:space-x-10">
        <div className="flex justify-start items-center lg:flex-1">
          <NextImage
            src="/assets/images/logo.png"
            width="72"
            height="72"
            alt="KPJ"
          />
          <div className="font-bold text-md lg:text-xl text-white translate-y-2">
            KPJ MESIR
          </div>
        </div>
        <nav className="flex space-x-10">
          {navitems.map((item) => (
            <Button
              key={item.name}
              href={item.href}
              active={router.route === item.href ? true : false}
            >
              {item.name}
            </Button>
          ))}
        </nav>
      </div>
    </div>
  );
}
