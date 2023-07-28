import { Fragment, useState } from 'react';
import type { ReactNode } from 'react';

import { GiHamburgerMenu } from 'react-icons/gi';
import { IoMdClose } from 'react-icons/io';
import { Dialog, Transition } from '@headlessui/react';
import NextImage from '@/components/NextImage';

import Sidebar from './Sidebar';
import Navbar from './Navbar';
import { cx } from '@/utils/cx';
import { useScrollPosition } from '@/utils/useScrollPositions';
import Footer from './Footer';
import navItems from '@/utils/nav';
import Link from 'next/link';

type IMainProps = {
  children: ReactNode;
};

export default function Main(props: IMainProps) {
  const [isOpen, setIsOpen] = useState(false);
  const scrollPos = useScrollPosition();
  return (
    <>
      <div className="flex flex-col antialiased min-h-screen pattern-dots pattern-kpj-dots pattern-bg-kpj-brown pattern-size-24 pattern-opacity-100">
        <div
          className={cx(
            scrollPos > 100 && 'backdrop-blur-xl',
            isOpen && 'backdrop-blur-xl',
            'sticky top-0 md:hidden z-20 transition-colors duration-300'
          )}
        >
          <div className="flex flex-col">
            <div className="flex justify-between items-center px-8 py-4">
              <NextImage
                src="/assets/images/logo.png"
                width="32"
                height="0"
                alt="KPJ Mesir"
              />
              <GiHamburgerMenu
                className={cx(isOpen && 'hidden', "text-3xl text-white")}
                onClick={() => {
                  setIsOpen(true);
                }}
              />
              <IoMdClose
                className={cx(isOpen ? 'block' : 'hidden', "text-3xl text-white")}
                onClick={() => {
                  setIsOpen(false);
                }}
              />
            </div>
            <ul className={cx(
              isOpen ? 'block ' : 'hidden',
              'px-8 border-b-2 border-gray-400 font-montserrat'
            )}>
              {navItems.map((item) => (
                <li key={item.name} className="text-white mb-2 text-xl">
                  <Link href={item.href} >
                    {item.name}
                    {/* <Button active={router.route === item.href ? true : false}> */}
                    {/* {item.name} */}
                    {/* </Button> */}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <nav
          className={cx(
            // scrollPos > 50 && 'backdrop-blur-xl',
            'hidden backdrop-blur-xl md:block sticky top-0 z-20 h-full transition-all ease-in-out'
          )}
        >
          <Navbar />
        </nav>
        <main className="flex-col min-h-screen">{props.children}</main>
        <Footer />
      </div>
    </>
  );
}
