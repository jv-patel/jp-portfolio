import { NavItem, SocialLink } from "@/types";

export const SITE = {
  name: "Arjun Verma",
  role: "AI & Full Stack Developer",
  tagline:
    "I design and build intelligent, full-stack web products — from AI-powered tools to polished production apps.",
  email: "hello.arjunverma@gmail.com",
  location: "Ahmedabad, India",
  availability: "Available for freelance & full-time roles",
  url: "https://arjunverma.dev",
};

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Journey", href: "#journey" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { id: "github", name: "GitHub", url: "https://github.com/arjunverma", icon: "Github" },
  { id: "linkedin", name: "LinkedIn", url: "https://linkedin.com/in/arjunverma", icon: "Linkedin" },
  { id: "email", name: "Email", url: "mailto:hello.arjunverma@gmail.com", icon: "Mail" },
  { id: "instagram", name: "Instagram", url: "https://instagram.com/arjun.codes", icon: "Instagram" },
];

export const ROTATING_ROLES = [
  "AI Developer",
  "Full Stack Developer",
  "React Developer",
  "Next.js Developer",
  "Node.js Developer",
  "AI Enthusiast",
];

export const TERMINAL_LINES = [
  "AI Developer",
  "Full Stack Engineer",
  "Building Modern Products",
  "Always Learning...",
];
