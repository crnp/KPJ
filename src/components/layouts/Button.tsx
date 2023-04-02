import { cx } from '@/utils/cx';

type IButtonProps = {
  children: string;
  active?: boolean;
  href?: string;
};

export default function Button({
  active = false,
  href = '',
  ...props
}: IButtonProps) {
  return (
    <a
      href={href}
      className={cx(
        active ? 'bg-kpj-orange text-white' : 'bg-white text-black',
        'py-2 px-14 inline-block rounded-[10px] shadow-sm text-base font-bold'
      )}
    >
      {props.children}
    </a>
  );
}
