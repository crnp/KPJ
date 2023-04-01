import { useScrollPosition } from '@/utils/useScrollPositions';
import { cx } from '@/utils/cx';
import { useRouter } from 'next/router';

import {
  HiOutlineHome,
  HiOutlineDocumentText,
  HiOutlineLocationMarker,
  HiOutlineMenu,
  HiOutlinePhotograph,
  HiOutlineX,
} from 'react-icons/hi';
import Button from './Button';
import NextImage from '../NextImage';

const navitems = [
  {
    name: 'Home',
    href: '/',
    icon: HiOutlineHome,
  },
  {
    name: 'Profile',
    href: '/profile',
    icon: HiOutlineDocumentText,
  },
  {
    name: 'Galeri',
    href: '/galeri',
    icon: HiOutlinePhotograph,
  },
  {
    name: 'Taslim',
    href: '/taslim',
    icon: HiOutlineLocationMarker,
  },
];

export default function Navbar() {
  const scrollPos = useScrollPosition();
  const router = useRouter();

  return (
    <div
      className={cx(
        scrollPos > 200 ? 'shadow bg-gray-300' : 'shadow-none',
        'sticky top-0 z-20 h-full transition-all ease-in-out bg-gray-300'
      )}
    >
      <div className="mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-2 px-8 xl:px-0 md:justify-start md:space-x-10">
          <div className="flex justify-start items-center lg:flex-1">
            <NextImage
              src="/assets/images/logo.png"
              width="72"
              height="72"
              alt="KPJ"
            />
            <div className="font-bold">KPJ Mesir</div>
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
    </div>
  );
}
