import Section from '@/components/ui/section';
import SectionTitle from '@/components/ui/section-title';
import { skills } from '@/lib/data';
import { Card, CardContent } from '@/components/ui/card';
import { MotionDiv } from '@/components/ui/motion-div';

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.05,
      duration: 0.5,
    },
  }),
};

const SkillsSection = () => {
  return (
    <Section id="skills">
      <SectionTitle>My Skillset</SectionTitle>

      <div className="container mx-auto grid max-w-4xl grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 md:gap-6">
        {skills.map((skill, index) => (
          <MotionDiv
            key={skill.name}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={cardVariants}
          >
            <Card className="h-full transform-gpu bg-card/50 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-glow-primary hover:bg-card">
              <CardContent className="flex flex-col items-center justify-center gap-4 p-6">

                {/* ✅ SAFE ICON RENDERING */}
                {'path' in skill.icon ? (
                  <svg
                    viewBox="0 0 24 24"
                    className="h-10 w-10 fill-primary"
                    aria-label={skill.name}
                  >
                    <path d={skill.icon.path} />
                  </svg>
                ) : (
                  <skill.icon className="h-10 w-10 text-primary" />
                )}

                <span className="text-center font-medium text-foreground">
                  {skill.name}
                </span>

              </CardContent>
            </Card>
          </MotionDiv>
        ))}
      </div>
    </Section>
  );
};

export default SkillsSection;
