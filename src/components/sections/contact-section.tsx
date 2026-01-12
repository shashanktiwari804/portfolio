import Section from '@/components/ui/section';
import SectionTitle from '@/components/ui/section-title';
import { ContactForm } from '@/components/contact-form';
import { socialLinks } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { MotionDiv } from '@/components/ui/motion-div';
import { Download } from 'lucide-react';

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const ContactSection = () => {
  return (
    <Section id="contact" className="relative">
      <SectionTitle>Get In Touch</SectionTitle>

      <MotionDiv
        className="container mx-auto grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-2 md:gap-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={cardVariants}
      >
        <div className="flex flex-col justify-center text-center md:text-left">
          <h3 className="text-2xl font-bold">
            Let&apos;s build something great.
          </h3>

          <p className="mt-4 text-muted-foreground">
            I&apos;m currently open to new opportunities and collaborations.
            Feel free to reach out via the form, or connect with me on social media.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 md:justify-start">
            {/* Social Links */}
            {socialLinks.map((link) => (
              <Button key={link.name} asChild variant="outline" size="icon">
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                >
                  <link.icon className="h-5 w-5" />
                </a>
              </Button>
            ))}

            {/* Download Resume */}
            <Button asChild variant="default">
              <a
                href="/resume/Shashank_Tiwari_Resume.pdf"
                download
                aria-label="Download Resume"
              >
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </a>
            </Button>
          </div>
        </div>

        <div>
          <ContactForm />
        </div>
      </MotionDiv>

      <footer className="absolute bottom-4 w-full text-center text-sm text-muted-foreground">
        <p>
          &copy; {new Date().getFullYear()} Shashank Tiwari. All Rights Reserved.
        </p>
      </footer>
    </Section>
  );
};

export default ContactSection;
