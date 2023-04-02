import { Fragment, useState } from 'react';
import type { ReactNode } from 'react';

import { GiHamburgerMenu } from 'react-icons/gi';
import { Dialog, Transition } from '@headlessui/react';
import NextImage from '@/components/NextImage';
import Link from 'next/link';

import Sidebar from './Sidebar';
import Navbar from './Navbar';
import { cx } from '@/utils/cx';
import { useScrollPosition } from '@/utils/useScrollPositions';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

export default function Main(props: IMainProps) {
  const [isOpen, setIsOpen] = useState(false);
  const scrollPos = useScrollPosition();
  return (
    <>
      {props.meta}
      <div className="flex flex-col antialiased min-h-screen">
        <div
          className={cx(
            scrollPos > 200 && 'backdrop-blur-xl',
            'sticky top-0 lg:hidden z-20'
          )}
        >
          <div className="flex justify-between items-center px-8 py-4">
            <NextImage
              src="/assets/images/logo.png"
              width="64"
              height="64"
              alt="KPJ Mesir"
            />
            <GiHamburgerMenu
              className="text-3xl text-white"
              onClick={() => {
                setIsOpen(true);
              }}
            />
          </div>
          <Transition show={isOpen} as={Fragment}>
            <Dialog
              unmount={false}
              onClose={() => {
                setIsOpen(false);
              }}
              className="fixed z-40 inset-0 overflow-y-auto"
            >
              <div className="flex w-3/5 md:w-5/12">
                <Transition.Child
                  as={Fragment}
                  enter="transition-opacity ease-in duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-70"
                  leave="transition-opacity ease-out duration-300"
                  leaveFrom="opacity-70"
                  leaveTo="opacity-0"
                >
                  <Dialog.Overlay className="z-20 fixed inset-0 bg-black bg-opacity-50" />
                </Transition.Child>
                <Transition.Child
                  as={Fragment}
                  enter="transition ease-in-out duration-300 transform"
                  enterFrom="-translate-x-full"
                  enterTo="translate-x-0"
                  leave="transition ease-in-out duration-300 transform"
                  leaveFrom="translate-x-0"
                  leaveTo="-translate-x-full"
                >
                  <div
                    className={`z-50 overflow-hidden
                         shadow-xl`}
                  >
                    <aside className="overflow-y-auto lg:hidden">
                      <Sidebar />
                    </aside>
                  </div>
                </Transition.Child>
              </div>
            </Dialog>
          </Transition>
        </div>
        <nav
          className={cx(
            scrollPos > 200 && 'backdrop-blur-xl',
            'hidden lg:block sticky top-0 z-20 h-full transition-all ease-in-out'
          )}
        >
          <Navbar />
        </nav>
        <main className="flex-col min-h-screen">{props.children}</main>
        <footer className="flex flex-col justify-center items-center text-center text-sm py-4 bg-kpj-orange">
          {/* <div className="flex gap-4 mb-6 group justify-end">
            <Link href="https://whatsapp.com">
              <RiWhatsappFill className="text-4xl text-gray-300 cursor-pointer opacity-90 hover:text-white transition-colors duration-150 ease-in-out" />
            </Link>
            <Link href="https://instagram.com">
              <RiInstagramFill className="text-4xl text-gray-300 cursor-pointer  hover:text-white transition-colors duration-150 ease-in-out" />
            </Link>
            <Link href="https://tiktok.com">
              <IoLogoTiktok className="text-4xl text-gray-300 cursor-pointer  hover:text-white transition-colors duration-150 ease-in-out" />
            </Link>
            <Link href="https://facebook.com">
              <RiFacebookFill className="text-4xl text-gray-300 cursor-pointer  hover:text-white transition-colors duration-150 ease-in-out" />
            </Link>
            <Link href="mailto:example@mail.com">
              <HiMail className="text-4xl text-gray-300 cursor-pointer opacity-90 hover:text-white transition-colors duration-150 ease-in-out" />
            </Link>
          </div> */}
          <span className="text-white">
            © {new Date().getFullYear()} Keluarga Pelajar Jakarta Mesir, All
            Rights Reserved.
          </span>
          <div className="flex flex-row gap-1">
            <span className="text-white">Developed by</span>
            <a href="https://instagram.com/cpr.studios" target="_blank">
              <span className="group transition duration-300 font-semibold text-white">
                CPR Studios
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-400 h-0.5 bg-white"></span>
              </span>
            </a>
          </div>
          {/* <span className="italic">
            Website created by <b>Calvin</b>
          </span> */}
        </footer>
      </div>
    </>
  );
}
