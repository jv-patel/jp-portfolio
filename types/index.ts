export type ProjectCategory = "AI" | "Web" | "Full Stack" | "Java" | "React";

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  categories: ProjectCategory[];
  stack: string[];
  liveUrl?: string;
  githubUrl?: string;
  status: "Live" | "In Progress" | "Completed";
  featured?: boolean;
  size: "large" | "medium" | "small";
  features: string[];
  challenges: string;
}

export interface SkillItem {
  name: string;
  level: number; // 0-100
}

export interface SkillCategory {
  id: string;
  title: string;
  icon: string;
  skills: SkillItem[];
}

export interface TimelineItem {
  id: string;
  year: string;
  title: string;
  description: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  review: string;
  avatarInitials: string;
}

export interface StatItem {
  id: string;
  label: string;
  value: number;
  suffix?: string;
}

export interface SocialLink {
  id: string;
  name: string;
  url: string;
  icon: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface FeatureHighlight {
  id: string;
  title: string;
  description: string;
  icon: string;
}
