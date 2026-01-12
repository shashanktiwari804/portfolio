'use client';
import type { navLinks } from '@/lib/data';
import type { SectionId } from '@/lib/data';
import { cn } from '@/lib/utils';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { MotionDiv } from '@/components/ui/motion-div';
import type { FC } from 'react';

type SidebarNavProps = {
  navLinks: typeof navLinks;
  activeSection: SectionId;
};

const SidebarNav: FC<SidebarNavProps> = ({ navLinks, activeSection }) => {
  return (
    <aside className="fixed left-4 top-1/2 z-50 hidden -translate-y-1/2 md:block">
      <TooltipProvider delayDuration={0}>
        <MotionDiv
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <nav className="flex flex-col items-center justify-center gap-2 rounded-full border bg-background/50 p-2 backdrop-blur-sm">
            {navLinks.map((link) => (
              <Tooltip key={link.id}>
                <TooltipTrigger asChild>
                  <a
                    href={`#${link.id}`}
                    aria-label={link.label}
                    className={cn(
                      'flex h-10 w-10 items-center justify-center rounded-full transition-colors',
                      activeSection === link.id
                        ? 'bg-primary text-primary-foreground'
                        : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'
                    )}
                  >
                    <link.icon className="h-5 w-5" />
                  </a>
                </TooltipTrigger>
                <TooltipContent side="right">
                  <p>{link.label}</p>
                </TooltipContent>
              </Tooltip>
            ))}
          </nav>
        </MotionDiv>
      </TooltipProvider>
    </aside>
  );
};

export default SidebarNav;
