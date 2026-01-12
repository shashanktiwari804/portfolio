import React from 'react';

import {
  Briefcase,
  CodeXml,
  GanttChartSquare,
  Github,
  Home,
  Linkedin,
  Mail,
  MousePointerClick,
  ScanText,
  User,
  Workflow,
  BrainCircuit,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

/* -------------------- Simple Icons (ONLY for skills) -------------------- */
import {
  siPython,
  siDjango,
  siFlask,
  siFastapi,
  siSelenium,
  siN8n
} from 'simple-icons';

/* -------------------- Mixed Icon Type -------------------- */
type SkillIcon =
  | React.ComponentType<{ size?: number; className?: string }>
  | {
      path: string;
      hex: string;
      title: string;
    };

/* -------------------- Navigation -------------------- */

export const navLinks = [
  { id: 'hero', label: 'Home', icon: Home },
  { id: 'about', label: 'About', icon: User },
  { id: 'skills', label: 'Skills', icon: CodeXml },
  { id: 'projects', label: 'Projects', icon: Briefcase },
  { id: 'experience', label: 'Experience', icon: GanttChartSquare },
  { id: 'contact', label: 'Contact', icon: Mail },
] as const;

export type SectionId = typeof navLinks[number]['id'];

/* -------------------- Skills (Simple Icons ONLY here) -------------------- */
export const skills = [
  { name: 'Python', icon: siPython },
  { name: 'Django', icon: siDjango },
  { name: 'Flask', icon: siFlask },
  { name: 'FastAPI', icon: siFastapi },
  { name: 'Selenium', icon: siSelenium },
  { name: 'n8n', icon: siN8n },
  { name: 'OCR', icon: ScanText },
  { name: 'NLP', icon: BrainCircuit },
] satisfies { name: string; icon: SkillIcon }[];

/* -------------------- Projects -------------------- */
export const projects = [
  {
    title: 'Log Management System',
    description:
      'A scalable system to collect, process, and visualize logs from various sources in real-time, enabling proactive monitoring and faster incident response.',
    stack: ['Python', 'Flask', 'Elasticsearch', 'Kibana'],
    links: { github: '#', demo: '#' },
  },
  {
    title: 'Inventory Management System',
    description:
      'Automated inventory tracking system for a warehouse, integrating barcode scanners and providing a dashboard for stock levels and order management.',
    stack: ['Python', 'Django', 'PostgreSQL', 'REST APIs'],
    links: { github: '#', demo: '#' },
  },
  {
    title: 'OCR Recognition System',
    description:
      'An Optical Character Recognition pipeline that extracts structured data from scanned documents and invoices, reducing manual data entry by 95%.',
    stack: ['Python', 'Tesseract', 'OpenCV', 'Pandas'],
    links: { github: '#', demo: '#' },
  },
  {
    title: 'Sentiment Analysis Application',
    description:
      'A web app that analyzes customer feedback from social media and reviews, providing sentiment scoring and trend analysis to improve products.',
    stack: ['Python', 'FastAPI', 'NLTK', 'Scikit-learn'],
    links: { github: '#', demo: '#' },
  },
];

/* -------------------- Experience -------------------- */
export const experience = [
  {
    title: 'Senior Python Developer',
    company: 'Elxer Communications Pvt Ltd',
    date: 'Dec 2023 - Present',
    description:
      'Designed and implemented Python-based automation scripts, reducing manual workload by 40%. Developed and maintained backend services for internal tools. Integrated various third-party APIs to streamline data workflows.',
  },
  {
    title: 'Python Developer',
    company: 'Railworld India Pvt Ltd',
    date: 'Aug 2023 - Dec 2023',
    description:
      'Assisted in the development of REST APIs using Flask and Django. Wrote unit and integration tests to ensure code quality. Managed database schemas and migrations.',
  },
];

/* -------------------- Social Links (Lucide stays) -------------------- */
export const socialLinks: { name: string; url: string; icon: LucideIcon }[] = [
  { name: 'GitHub', url: 'https://github.com/rajatnair05?tab=overview', icon: Github },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/rajat-nair-2874b4233?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', icon: Linkedin },
  { name: 'Email', url: 'mailto:rajatnair05@gmail.com', icon: Mail },
];
