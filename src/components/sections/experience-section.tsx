import Section from '@/components/ui/section';
import SectionTitle from '@/components/ui/section-title';
import { experience } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MotionDiv } from '@/components/ui/motion-div';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const ExperienceSection = () => {
  return (
    <Section id="experience">
      <SectionTitle>Work Experience</SectionTitle>
      <MotionDiv
        className="container mx-auto max-w-3xl space-y-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        {experience.map((item) => (
          <MotionDiv key={item.company} variants={itemVariants}>
            <Card className="border-l-4 border-primary bg-card/50">
              <CardHeader className="grid grid-cols-1 items-start md:grid-cols-[1fr_auto] md:gap-4">
                <div>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                  <p className="font-semibold text-primary">{item.company}</p>
                </div>
                <p className="text-sm text-muted-foreground md:text-right">{item.date}</p>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          </MotionDiv>
        ))}
      </MotionDiv>
    </Section>
  );
};

export default ExperienceSection;
