'use client';

import { useState, useRef } from 'react';
import Header from '@/components/layout/header';
import SidebarNav from '@/components/layout/sidebar-nav';
import { useScrollObserver } from '@/hooks/use-scroll-observer';
import { navLinks } from '@/lib/data';

import HeroSection from '@/components/sections/hero-section';
import AboutSection from '@/components/sections/about-section';
import SkillsSection from '@/components/sections/skills-section';
import ProjectsSection from '@/components/sections/projects-section';
import ExperienceSection from '@/components/sections/experience-section';
import ContactSection from '@/components/sections/contact-section';

export default function Home() {
  const [activeSection, setActiveSection] = useState('hero');
  const mainContainerRef = useRef<HTMLDivElement>(null);
  
  const sectionIds = navLinks.map(link => link.id);
  useScrollObserver(mainContainerRef, sectionIds, setActiveSection);

  return (
    <div className="relative">
      <Header navLinks={navLinks} activeSection={activeSection} />
      <SidebarNav navLinks={navLinks} activeSection={activeSection} />
      <main ref={mainContainerRef} className="h-screen w-full snap-y snap-mandatory overflow-y-scroll scroll-smooth">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
      </main>
    </div>
  );
}