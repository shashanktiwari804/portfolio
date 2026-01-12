import Section from '@/components/ui/section';
import SectionTitle from '@/components/ui/section-title';
import { projects } from '@/lib/data';
import ProjectCard from '@/components/ui/project-card';
import { MotionDiv } from '@/components/ui/motion-div';
import { useState } from 'react';

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
    },
  }),
};

const ProjectsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleDragEnd = (offset: { x: number; y: number }) => {
    if (offset.x < -100) {
      // Swiped left - go to next card
      if (currentIndex < projects.length - 1) {
        setCurrentIndex((prev) => prev + 1);
      }
    } else if (offset.x > 100) {
      // Swiped right - go to previous card
      if (currentIndex > 0) {
        setCurrentIndex((prev) => prev - 1);
      }
    }
  };

  return (
    <Section id="projects">
      <div className="text-4xl md:text-5xl">
        <SectionTitle>Featured Projects</SectionTitle>
      </div>
      
      {/* Mobile View - Swipeable Cards */}
      <div className="md:hidden container mx-auto max-w-6xl">
        <div className="relative h-[650px]">
          {projects.map((project, index) => {
            const isVisible = index === currentIndex;
            
            return (
              <MotionDiv
                key={project.title}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={cardVariants}
                className="absolute inset-0 touch-none [&>*]:border-yellow-500 [&_h3]:text-2xl [&_p]:text-base [&_p]:leading-relaxed"
                style={{
                  zIndex: isVisible ? 10 : 0,
                  pointerEvents: isVisible ? 'auto' : 'none',
                  display: isVisible ? 'block' : 'none',
                }}
                drag={isVisible ? "x" : false}
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.05}
                dragTransition={{ bounceStiffness: 1000, bounceDamping: 30 }}
                onDragEnd={(_, { offset }) => handleDragEnd(offset)}
                animate={
                  isVisible
                    ? { scale: 1, opacity: 1, x: 0 }
                    : { scale: 1, opacity: 0, x: 0 }
                }
                transition={{ duration: 0.15, ease: 'easeOut' }}
              >
                <ProjectCard {...project} />
              </MotionDiv>
            );
          })}
          
          <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 flex gap-2">
            {projects.map((_, index) => (
              <div
                key={index}
                className={`h-2.5 rounded-full transition-all duration-150 ${
                  index === currentIndex ? 'bg-yellow-500 w-8' : 'bg-muted w-2.5'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Desktop View - Grid Layout */}
      <div className="container mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 hidden md:grid">
        {projects.map((project, index) => (
          <MotionDiv
            key={project.title}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={cardVariants}
          >
            <ProjectCard {...project} />
          </MotionDiv>
        ))}
      </div>
    </Section>
  );
};

export default ProjectsSection;

