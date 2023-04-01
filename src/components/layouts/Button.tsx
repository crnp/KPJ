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
        active ? 'bg-kpj-orange' : 'bg-white',
        'py-3 px-14 inline-block rounded-[10px] shadow-sm text-base text-black font-bold'
      )}
    >
      {props.children}
    </a>
  );
}
