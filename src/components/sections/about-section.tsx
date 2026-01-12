import Section from '@/components/ui/section';
import SectionTitle from '@/components/ui/section-title';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import { MotionDiv } from '@/components/ui/motion-div';

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const AboutSection = () => {
  const profileImage = PlaceHolderImages.find(
    (p) => p.id === 'profile-picture'
  );

  return (
    <Section id="about">
      <SectionTitle>About Me</SectionTitle>

      <MotionDiv
        className="container mx-auto grid max-w-4xl grid-cols-1 items-center gap-8 md:grid-cols-3 md:gap-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={cardVariants}
      >
        <div className="relative mx-auto h-48 w-48 md:h-56 md:w-56">
          {profileImage && (
            <>
              <div className="absolute inset-0 translate-x-1 translate-y-1 rounded-full bg-primary" />

              <Image
                src="/images/profile.jpeg"
                alt={profileImage.description}
                data-ai-hint={profileImage.imageHint}
                width={300}
                height={300}
                className="relative h-full w-full rounded-full border-4 border-background object-cover"
                priority
              />
            </>
          )}
        </div>

        <div className="col-span-1 text-center md:col-span-2 md:text-left">
          <p className="text-lg text-muted-foreground">
            With over 2.5 years of dedicated experience, I specialize in developing
            robust Python automation solutions and backend systems. My passion lies
            in architecting efficient, scalable processes that eliminate manual work
            and enhance productivity. I approach every challenge with an
            automation-first mindset, always seeking to build streamlined and
            intelligent systems.
          </p>
        </div>
      </MotionDiv>
    </Section>
  );
};

export default AboutSection;
