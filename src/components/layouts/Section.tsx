import type { ReactNode } from 'react';

import { cx } from '@/utils/cx';

type ISectionProps = {
  className?: string;
  children: ReactNode;
};

export default function Section(props: ISectionProps) {
  return (
    <section className={cx('flex flex-col py-12', props.className)}>
      {props.children}
    </section>
  );
}
