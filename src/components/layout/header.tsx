'use client';
import type { navLinks } from '@/lib/data';
import type { SectionId } from '@/lib/data';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, CodeXml } from 'lucide-react';
import { MotionDiv } from '@/components/ui/motion-div';
import type { FC } from 'react';

type HeaderProps = {
  navLinks: typeof navLinks;
  activeSection: SectionId;
};

const Header: FC<HeaderProps> = ({ navLinks, activeSection }) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-4 bg-background/80 backdrop-blur-sm md:hidden">
      <MotionDiv
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-2"
      >
        {/* <a href="#hero" className="flex items-center gap-2 text-lg font-bold">
          <CodeXml className="h-6 w-6 text-primary" />
          <span>Automate Pro</span>
        </a> */}
      </MotionDiv>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Open navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right">
          <nav className="flex flex-col gap-4 pt-8">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={cn(
                  'flex items-center gap-3 rounded-md px-3 py-2 text-lg font-medium transition-colors',
                  activeSection === link.id
                    ? 'bg-primary text-primary-foreground'
                    : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'
                )}
              >
                <link.icon className="h-5 w-5" />
                {link.label}
              </a>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    </header>
  );
};

export default Header;
