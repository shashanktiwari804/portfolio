import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';

type SectionProps = {
  id: string;
  className?: string;
  children: ReactNode;
};

const Section = ({ id, className, children }: SectionProps) => {
  return (
    <section
      id={id}
      className={cn(
        'relative flex h-screen w-full snap-start flex-col items-center justify-center p-4 md:p-8 lg:p-16',
        className
      )}
    >
      {children}
    </section>
  );
};

export default Section;