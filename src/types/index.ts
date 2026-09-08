export interface Education {
  institution: string;
  program: string;
  degree: string;
  period: string;
  honors?: string;
  details?: string[];
}

export interface ProjectDetails {
  title: string;
  period: string;
  bullets: string[];
  tags: string[];
  link?: string;
  linkLabel?: string;
}

export interface ResearchProject extends ProjectDetails {
  affiliation: string;
  role: string;
}

export interface ResearchGroup {
  title: string;
  affiliation: string;
  role: string;
  period: string;
  principalInvestigator: string;
  projects: ProjectDetails[];
}

export interface Publication {
  authors: string;
  title: string;
  journal: string;
  year: number;
  volume?: string;
  pages?: string;
  link?: string;
  status?: "submitted";
}

export interface Project extends ProjectDetails {
  role: string;
  affiliation?: string;
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
