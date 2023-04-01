import Link from 'next/link';
import NextImage from '../NextImage';

export default function Sidebar() {
  return (
    <>
      <div className="p-6 min-h-screen bg-black peer-focus:left-0 peer:transition ease-out delay-150 duration-200">
        <div className="flex flex-col justify-start items-center">
          <NextImage
            className="w-32 md:w-40"
            src="/assets/images/logo.png"
            width="180"
            height="180"
            alt="KPJ"
          />
        </div>
      </div>
    </>
  );
}
