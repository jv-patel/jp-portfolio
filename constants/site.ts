import { NavItem, SocialLink } from "@/types";

export const SITE = {
  name: "Jeel Patel",
  role: "AI & web developer",
  tagline:
    "I design and build intelligent,web products — from AI-powered tools to polished production apps.",
  email: "pjeel370@gmail.com",
  location: "Anand,Gujarat",
  availability: "Available for freelance & full-time roles",
  url: "https://jeelpatel.vercel.app",
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
  { id: "github", name: "GitHub", url: "https://github.com/jv-patel", icon: "Github" },
  { id: "whatsapp", name: "WhatsApp", url: "https://wa.me/919723415082", icon: "Whatsapp" },
  { id: "email", name: "Email", url: "mailto:pjeel370@gmail.com", icon: "Mail" },
  { id: "instagram", name: "Instagram", url: "https://instagram.com/jeel_patel_.2515", icon: "Instagram" },
];

export const ROTATING_ROLES = [
  "AI Developer",
  "Web Developer",
  "React Developer",
  "Next.js Developer",
  "Node.js Developer",
  "AI Enthusiast",
];

export const TERMINAL_LINES = [
  "AI Developer",
  "Web Developer",
  "Building Modern Products",
  "Always Learning...",
];
