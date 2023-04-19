import { Fragment, useState } from 'react';
import type { ReactNode } from 'react';

import { GiHamburgerMenu } from 'react-icons/gi';
import { Dialog, Transition } from '@headlessui/react';
import NextImage from '@/components/NextImage';

import Sidebar from './Sidebar';
import Navbar from './Navbar';
import { cx } from '@/utils/cx';
import { useScrollPosition } from '@/utils/useScrollPositions';
import Footer from './Footer';

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
            scrollPos > 200 && 'backdrop-blur-xl',
            'sticky top-0 md:hidden z-20'
          )}
        >
          <div className="flex justify-between items-center px-8 py-4">
            <NextImage
              src="/assets/images/logo.png"
              width="32"
              height="0"
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
                    <aside className="overflow-y-auto md:hidden">
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
