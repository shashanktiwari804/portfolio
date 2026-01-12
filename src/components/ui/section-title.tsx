import { MotionDiv } from "@/components/ui/motion-div";
import type { ReactNode } from 'react';

type SectionTitleProps = {
  children: ReactNode;
};

const variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const SectionTitle = ({ children }: SectionTitleProps) => {
  return (
    <MotionDiv
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      variants={variants}
      className="mb-8 text-center text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:mb-12"
    >
      {children}
    </MotionDiv>
  );
};

export default SectionTitle;
