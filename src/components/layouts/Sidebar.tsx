import NextImage from '../NextImage';
import logo from '@/public/assets/images/logo.png';
import Button from './Button';
import navItems from '@/utils/nav';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Divider from './Divider';

export default function Sidebar() {
  const router = useRouter();
  return (
    <>
      <div className="p-6 min-h-screen w-[35vw] bg-kpj-gray peer-focus:left-0 peer:transition ease-out delay-150 duration-200">
        <div className="flex flex-col justify-center items-center gap-4">
          <NextImage src={logo} width="86" height="0" alt="KPJ" className="" />
          <Divider />
          {navItems.map((item) => (
            <Link href={item.href} key={item.name}>
              <Button active={router.route === item.href ? true : false}>
                {item.name}
              </Button>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
