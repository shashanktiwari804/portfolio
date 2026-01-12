import { Button } from '@/components/ui/button';
import Section from '@/components/ui/section';
import { ArrowDown, Mail } from 'lucide-react';
import { MotionDiv } from '@/components/ui/motion-div';

const HeroSection = () => {
  return (
    <Section id="hero" className="animated-background-hero">
      <div className="container mx-auto flex flex-col items-center justify-center text-center">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl md:text-7xl">
            Hi, I&apos;m Shashank Tiwari
          </h1>
          <p className="mt-4 text-lg text-muted-foreground sm:text-xl md:text-2xl">
            Python Developer | Automation Engineer
          </p>
          <MotionDiv
            className="mx-auto mt-2 h-1 max-w-sm bg-primary"
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 0.8, delay: 0.8, ease: 'easeInOut' }}
          />
        </MotionDiv>
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-10 flex flex-col gap-4 sm:flex-row"
        >
          <Button asChild size="lg">
            <a href="#projects">
              <ArrowDown /> View Projects
            </a>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href="#contact">
              <Mail /> Contact Me
            </a>
          </Button>
        </MotionDiv>
      </div>
    </Section>
  );
};

export default HeroSection;
