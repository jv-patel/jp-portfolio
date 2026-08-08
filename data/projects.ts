import { Project } from "@/types";

export const PROJECTS: Project[] = [
  {
    id: "ai-chatbot",
    title: "AI Chatbot",
    description:
      "A context-aware conversational assistant with streaming responses and memory.",
    longDescription:
      "A production-grade conversational AI assistant that maintains context across sessions, streams responses token-by-token, and supports custom personas. Built with a focus on low-latency UX and graceful error recovery.",
    image: "/images/projects/ai-chatbot.jpg",
    categories: ["AI", "Full Stack"],
    stack: ["Next.js", "TypeScript", "OpenAI API", "Tailwind CSS", "MongoDB"],
    liveUrl: "https://ai-chatbot-nine-navy-46.vercel.app",
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
    id: "ai-image-detector",
    title: "AI Image Detector",
    description:
      "Classifies whether an image is a real photograph or AI-generated, with a confidence score.",
    longDescription:
      "A MobileNetV2-based image classifier, fine-tuned with transfer learning, that analyzes an uploaded image and predicts whether it's a real photograph or AI-generated — returning a confidence score alongside the result.",
    image: "/images/projects/ai-image-detector.jpg",
    categories: ["AI", "Web"],
    stack: ["Python", "TensorFlow/Keras", "MobileNetV2", "FastAPI"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/jv-patel/ai-image-detector",
    status: "Live",
    featured: true,
    size: "medium",
    features: [
      "Real vs. AI-generated classification with confidence score",
      "Transfer learning on MobileNetV2",
      "Simple drag-and-drop image upload",
    ],
    challenges:
      "Generalizing across the wide variety of modern AI image generators required training on a broad, regularly refreshed dataset to avoid overfitting to one generator's artifacts.",
  },
  {
    id: "pdf-assistant",
    title: "PDF Assistant",
    description: "AI-powered tool to chat with, summarize, and extract data from PDFs.",
    longDescription:
      "An AI assistant that lets users upload a PDF and ask questions about its content, generate summaries, and pull out structured data — built for quickly working through long documents and reports.",
    image: "/images/projects/pdf-assistant.jpg",
    categories: ["AI", "Web"],
    stack: ["React", "Node.js", "OpenAI API", "Tailwind CSS"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/jv-patel/pdf-assistant",
    status: "In Progress",
    size: "small",
    features: ["Chat with any uploaded PDF", "Auto-generated summaries", "Structured data extraction"],
    challenges:
      "Chunking long PDFs while keeping enough context for accurate answers required a careful retrieval strategy.",
  },
  {
    id: "blinkit-clone",
    title: "Blinkit Clone",
    description: "Quick-commerce grocery app with real-time cart and order tracking.",
    longDescription:
      "A full-stack quick-commerce grocery ordering platform with category browsing, a real-time cart, address management, and live order status tracking.",
    image: "/images/projects/blinkit-clone.jpg",
    categories: ["Full Stack", "Web"],
    stack: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    liveUrl: "https://jps-mart.vercel.app",
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
    image: "/images/projects/youtube-downloader.jpg",
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
    image: "/images/projects/hackathon-simulator.jpg",
    categories: ["Web", "React"],
    stack: ["React", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://hackathon-simulator-opal.vercel.app",
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
    image: "/images/projects/student-attendance.jpg",
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
