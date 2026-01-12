'use client';

import { useEffect, type RefObject } from 'react';

export function useScrollObserver(
  containerRef: RefObject<HTMLElement>,
  sectionIds: string[],
  setActiveSection: (id: string) => void
) {
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observerOptions = {
      root: container,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    const sections = sectionIds.map(id => document.getElementById(id)).filter(Boolean);
    sections.forEach(section => observer.observe(section!));

    return () => {
      sections.forEach(section => observer.unobserve(section!));
    };
  }, [containerRef, sectionIds, setActiveSection]);
}