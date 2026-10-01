export interface NavItem {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
}

export interface Skill {
  name: string;
  icon: string;
}

export interface SpecRow {
  label: string;
  items: string[];
}

export interface TimelineEntry {
  id: number;
  title: string;
  subtitle: string;
  period: string;
}

export interface Project {
  id: number;
  name: string;
  description: string;
  tools: string[];
  role: string;
  code?: string;
  demo?: string;
}
