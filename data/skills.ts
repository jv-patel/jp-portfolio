import { SkillCategory } from "@/types";

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "frontend",
    title: "Frontend",
    icon: "MonitorSmartphone",
    skills: [
      { name: "React", level: 92 },
      { name: "Next.js", level: 90 },
      { name: "Tailwind CSS", level: 94 },
      { name: "HTML", level: 96 },
      { name: "CSS", level: 92 },
      { name: "JavaScript", level: 93 },
      { name: "TypeScript", level: 88 },
    ],
  },
  {
    id: "backend",
    title: "Backend",
    icon: "Server",
    skills: [
      { name: "Node.js", level: 87 },
      { name: "Express.js", level: 86 },
      { name: "REST API", level: 90 },
      { name: "Authentication", level: 83 },
    ],
  },
  {
    id: "database",
    title: "Database",
    icon: "Database",
    skills: [
      { name: "MongoDB", level: 85 },
      { name: "MySQL", level: 80 },
      { name: "Firebase", level: 75 },
    ],
  },
  {
    id: "programming",
    title: "Programming",
    icon: "Code2",
    skills: [
      { name: "Java", level: 84 },
      { name: "Python", level: 82 },
      { name: "JavaScript", level: 93 },
      { name: "TypeScript", level: 88 },
    ],
  },
  {
    id: "ai-tools",
    title: "AI Tools",
    icon: "Sparkles",
    skills: [
      { name: "OpenAI API", level: 88 },
      { name: "Prompt Engineering", level: 90 },
      { name: "LangChain", level: 78 },
      { name: "Vector Search", level: 74 },
    ],
  },
  {
    id: "dev-tools",
    title: "Developer Tools",
    icon: "Wrench",
    skills: [
      { name: "Git", level: 92 },
      { name: "GitHub", level: 92 },
      { name: "VS Code", level: 95 },
      { name: "Postman", level: 85 },
      { name: "Figma", level: 78 },
    ],
  },
];
