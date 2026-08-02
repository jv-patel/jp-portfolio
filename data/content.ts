import {
  TimelineItem,
  ServiceItem,
  Testimonial,
  StatItem,
  FeatureHighlight,
} from "@/types";

export const TIMELINE_ITEMS: TimelineItem[] = [
  {
    id: "start",
    year: "2019",
    title: "Started Programming",
    description:
      "Wrote my first lines of code and got hooked on turning logic into working software.",
  },
  {
    id: "web-basics",
    year: "2020",
    title: "Learned HTML, CSS & JavaScript",
    description:
      "Built the foundation for web development by mastering the core building blocks of the browser.",
  },
  {
    id: "react",
    year: "2021",
    title: "Learned React",
    description:
      "Moved into component-driven development and started building interactive single-page applications.",
  },
  {
    id: "ai-projects",
    year: "2022",
    title: "Built AI Projects",
    description:
      "Started experimenting with language models and shipped my first AI-powered tools.",
  },
  {
    id: "fullstack",
    year: "2023",
    title: "Built Full Stack Apps",
    description:
      "Combined frontend, backend, and databases to ship complete, production-ready applications.",
  },
  {
    id: "advanced-ai",
    year: "2024",
    title: "Learning Advanced AI",
    description:
      "Diving deeper into retrieval-augmented generation, agentic workflows, and model fine-tuning.",
  },
  {
    id: "future",
    year: "Ahead",
    title: "Future Goals",
    description:
      "Building AI-native products that meaningfully improve how people work, learn, and create.",
  },
];

export const SERVICES: ServiceItem[] = [
  {
    id: "frontend-dev",
    title: "Frontend Development",
    description: "Pixel-perfect, accessible interfaces built with React and modern tooling.",
    icon: "LayoutTemplate",
  },
  {
    id: "fullstack-dev",
    title: "Full Stack Development",
    description: "End-to-end applications with robust APIs, databases, and auth.",
    icon: "Layers",
  },
  {
    id: "ai-web-apps",
    title: "AI Web Applications",
    description: "Integrating language models into practical, user-facing products.",
    icon: "BrainCircuit",
  },
  {
    id: "responsive-sites",
    title: "Responsive Websites",
    description: "Fluid layouts that feel native on every device and screen size.",
    icon: "Smartphone",
  },
  {
    id: "modern-ui-ux",
    title: "Modern UI/UX",
    description: "Interface design grounded in clarity, hierarchy, and delightful motion.",
    icon: "Palette",
  },
  {
    id: "portfolio-sites",
    title: "Portfolio Websites",
    description: "Personal brand sites that help you stand out to recruiters and clients.",
    icon: "UserCircle",
  },
  {
    id: "dashboard-apps",
    title: "Dashboard Applications",
    description: "Data-dense interfaces that stay readable, fast, and easy to navigate.",
    icon: "LayoutDashboard",
  },
  {
    id: "api-integration",
    title: "API Integration",
    description: "Connecting third-party services and data sources into your product.",
    icon: "Plug",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    name: "Priya Sharma",
    role: "Product Manager, Nimbus Labs",
    review:
      "Arjun turned a vague brief into a polished AI product in weeks. His attention to detail and communication made the whole process effortless.",
    avatarInitials: "PS",
  },
  {
    id: "t2",
    name: "David Chen",
    role: "Founder, Loopwork",
    review:
      "One of the strongest full-stack developers I've worked with. The app he built handles real traffic without a hitch.",
    avatarInitials: "DC",
  },
  {
    id: "t3",
    name: "Meera Iyer",
    role: "Engineering Lead, Verta AI",
    review:
      "Great eye for design and a genuine understanding of how AI features should feel to end users. Highly recommended.",
    avatarInitials: "MI",
  },
  {
    id: "t4",
    name: "Tom Whitfield",
    role: "CTO, Brightline",
    review:
      "Reliable, fast, and communicates clearly at every step. Our dashboard rebuild shipped ahead of schedule.",
    avatarInitials: "TW",
  },
];

export const STATS: StatItem[] = [
  { id: "projects", label: "Projects Completed", value: 32, suffix: "+" },
  { id: "years", label: "Years Learning", value: 5, suffix: "+" },
  { id: "tech", label: "Technologies", value: 24, suffix: "+" },
  { id: "contributions", label: "GitHub Contributions", value: 1400, suffix: "+" },
  { id: "satisfaction", label: "Client Satisfaction", value: 98, suffix: "%" },
];

export const FEATURE_HIGHLIGHTS: FeatureHighlight[] = [
  { id: "fast-learner", title: "Fast Learner", description: "Quick to pick up new frameworks, tools and paradigms.", icon: "Zap" },
  { id: "creative-thinker", title: "Creative Thinker", description: "Approaches problems from unexpected, effective angles.", icon: "Lightbulb" },
  { id: "ai-focused", title: "AI Focused", description: "Deeply invested in applying AI to real-world products.", icon: "Sparkles" },
  { id: "fullstack-dev", title: "Full Stack Development", description: "Comfortable across the entire product stack.", icon: "Layers" },
  { id: "responsive-design", title: "Responsive Design", description: "Builds interfaces that adapt beautifully everywhere.", icon: "Smartphone" },
  { id: "clean-code", title: "Clean Code", description: "Writes readable, maintainable, well-structured code.", icon: "Code2" },
];
