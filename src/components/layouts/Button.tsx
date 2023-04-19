import { cx } from '@/utils/cx';

type IButtonProps = {
  children: string;
  active?: boolean;
  className?: string;
};

export default function Button({ active = false, ...props }: IButtonProps) {
  return (
    <button
      className={cx(
        active ? 'bg-kpj-orange text-white' : 'bg-white text-black',
        props.className,
        'py-2 md:px-6 lg:px-14 inline-block rounded-[10px] shadow-sm text-base font-bold transition duration-100 hover:scale-110'
      )}
    >
      {props.children}
    </button>
  );
}
