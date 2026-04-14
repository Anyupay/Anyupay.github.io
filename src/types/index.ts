export interface Education {
  institution: string;
  program: string;
  degree: string;
  period: string;
  honors?: string;
  details?: string[];
}

export interface ResearchProject {
  title: string;
  affiliation: string;
  role: string;
  period: string;
  bullets: string[];
  tags: string[];
}

export interface Publication {
  authors: string;
  title: string;
  journal: string;
  year: number;
  volume?: string;
  pages?: string;
  link?: string;
}

export interface Project {
  title: string;
  role: string;
  period: string;
  bullets: string[];
  tags: string[];
  link?: string;
}

export interface Award {
  title: string;
  detail: string;
  date: string;
}

export interface Experience {
  role: string;
  organization: string;
  period: string;
  description?: string;
  bullets?: string[];
}

export interface SkillCategory {
  name: string;
  skills: string[];
}

export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: string;
}
