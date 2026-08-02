import { Project } from "@/types";

export const PROJECTS: Project[] = [
  {
    id: "ai-chatbot",
    title: "AI Chatbot",
    description:
      "A context-aware conversational assistant with streaming responses and memory.",
    longDescription:
      "A production-grade conversational AI assistant that maintains context across sessions, streams responses token-by-token, and supports custom personas. Built with a focus on low-latency UX and graceful error recovery.",
    image: "/images/projects/ai-chatbot.svg",
    categories: ["AI", "Full Stack"],
    stack: ["Next.js", "TypeScript", "OpenAI API", "Tailwind CSS", "MongoDB"],
    liveUrl: "https://ai-chatbot-nine-navy-46.vercel.app/",
    githubUrl: "https://github.com/jv-patel/ai-chatbot",
    status: "Live",
    featured: true,
    size: "large",
    features: [
      "Streaming token-by-token responses",
      "Persistent conversation memory",
      "Custom persona configuration",
      "Rate-limited public demo mode",
    ],
    challenges:
      "Balancing response latency with context length required careful prompt truncation and a sliding-window memory strategy.",
  },
  {
    id: "ai-image-generator",
    title: "AI Image Generator",
    description:
      "Text-to-image generation studio with prompt history and style presets.",
    longDescription:
      "A creative studio interface for generating images from text prompts, featuring style presets, aspect-ratio controls, prompt history, and downloadable high-resolution output.",
    image: "/images/projects/ai-image-generator.svg",
    categories: ["AI", "Web"],
    stack: ["React", "Node.js", "Express", "Stability API"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/jv-patel/ai-image-generator",
    status: "Live",
    featured: true,
    size: "medium",
    features: [
      "Style presets & aspect ratio control",
      "Prompt history with re-run",
      "Batch generation queue",
    ],
    challenges:
      "Queuing concurrent generation jobs without blocking the UI meant building a lightweight client-side job tracker.",
  },
  {
    id: "ai-email-writer",
    title: "AI Email Writer",
    description: "Smart email drafting assistant with tone and length controls.",
    longDescription:
      "An AI-assisted email composer that generates drafts based on a short brief, with adjustable tone (formal, friendly, concise) and one-click rewriting.",
    image: "/images/projects/ai-email-writer.svg",
    categories: ["AI", "Web"],
    stack: ["React", "TypeScript", "OpenAI API", "Tailwind CSS"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/jv-patel/ai-email-writer",
    status: "Completed",
    size: "small",
    features: ["Tone presets", "One-click rewrite", "Copy-to-clipboard export"],
    challenges:
      "Keeping generated tone consistent across rewrites required a structured system prompt with explicit style anchors.",
  },
  {
    id: "blinkit-clone",
    title: "Blinkit Clone",
    description: "Quick-commerce grocery app with real-time cart and order tracking.",
    longDescription:
      "A full-stack quick-commerce grocery ordering platform with category browsing, a real-time cart, address management, and live order status tracking.",
    image: "/images/projects/blinkit-clone.svg",
    categories: ["Full Stack", "Web"],
    stack: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/jv-patel/blinkit-clone",
    status: "Completed",
    size: "medium",
    features: [
      "Real-time cart synchronization",
      "Category & search browsing",
      "Order status tracking",
    ],
    challenges:
      "Modeling inventory and cart state consistently across multiple tabs required a centralized store with optimistic updates.",
  },
  {
    id: "youtube-downloader",
    title: "YouTube Downloader",
    description: "Web utility for downloading videos and extracting audio.",
    longDescription:
      "A utility web app that fetches metadata for a given video link and offers multiple resolution and audio-only download options, with progress feedback.",
    image: "/images/projects/youtube-downloader.svg",
    categories: ["Web", "Full Stack"],
    stack: ["Node.js", "Express", "React"],
    githubUrl: "https://github.com/jv-patel/youtube-downloader",
    status: "Completed",
    size: "small",
    features: ["Resolution selection", "Audio-only extraction", "Download progress feedback"],
    challenges:
      "Handling large file streams without exhausting server memory required piping streams directly to the response.",
  },
  {
    id: "hackathon-simulator",
    title: "Hackathon Simulator",
    description: "A gamified platform to practice hackathon problem-solving under time pressure.",
    longDescription:
      "An interactive simulator that presents randomized hackathon-style briefs with a countdown timer, judging rubric, and submission workflow to help developers practice building under pressure.",
    image: "/images/projects/hackathon-simulator.svg",
    categories: ["Web", "React"],
    stack: ["React", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/jv-patel/hackathon-simulator",
    status: "In Progress",
    size: "medium",
    features: ["Randomized problem briefs", "Countdown timer", "Judging rubric generator"],
    challenges:
      "Designing a rubric engine flexible enough for varied problem types took several rounds of scoring-model iteration.",
  },
  {
    id: "student-attendance-system",
    title: "Student Attendance System",
    description: "Role-based attendance tracker for classrooms with analytics dashboard.",
    longDescription:
      "A role-based system for teachers to mark attendance and for administrators to view analytics — attendance trends, at-risk students, and exportable reports.",
    image: "/images/projects/student-attendance.svg",
    categories: ["Java", "Full Stack"],
    stack: ["Java", "Spring Boot", "MySQL", "React"],
    githubUrl: "https://github.com/jv-patel/student-attendance-system",
    status: "Completed",
    size: "small",
    features: ["Role-based access", "Attendance analytics dashboard", "Exportable reports"],
    challenges:
      "Designing the schema to efficiently support both daily marking and long-range analytics queries needed careful indexing.",
  },
];

export const PROJECT_FILTERS = ["All", "AI", "Web", "Full Stack", "Java", "React"] as const;
