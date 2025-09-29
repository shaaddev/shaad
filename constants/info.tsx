import { Github, Linkedin, Mail, Globe2, Rss } from "lucide-react";

import type { JSX } from "react";

export interface Projects {
  title: string;
  desc: string;
  techStack: string[];
  link?: string;
  activeLink: string;
  image?: string;
  video?: string;
  dates: string;
  links?: {
    icon: JSX.Element;
    type: string;
    href: string;
  }[];
}

export interface Education {
  id: number;
  href?: string;
  logoUrl?: string | undefined;
  school: string;
  title: string;
  duration: string;
  degree: string;
  desc: string;
}

export const projects: Projects[] = [
  {
    title: "Chat AI",
    desc: "",
    techStack: ["Next.js", "Tailwind CSS", "Shadcn", "Neon", "Better Auth"],
    activeLink: "https://chat.shaaddev.com/",
    link: "https://github.com/shaaddev/chat-ai",
    dates: "February 2025 - Present",
  },
  {
    title: "Landit (Application Record)",
    desc: "Spreadsheet alternative for managing Job Applications. Scaling to 400+ users and iterated on user feedback to make continuous optimizations",
    techStack: [
      "Next.js",
      "Tailwind CSS",
      "Shadcn",
      "Supabase",
      "PostgreSQL",
      "Kinde Auth",
    ],
    activeLink: "https://application-record.vercel.app/",
    link: "https://github.com/shaaddev/ApplicationRecord",
    dates: "June 2024 - Present",
  },
  {
    title: "Rate your Professor AI",
    desc: "In this project we learned how to use Retrieval-Augmented Generation (RAG) to improve AI-powered applications to provide accurate, context-aware responses",
    techStack: [
      "Next.js",
      "Tailwind CSS",
      "OpenAI",
      "Pinecone",
      "Shadcn",
      "Clerk",
    ],
    link: "https://github.com/rukaiah-edhah/RateMyProf",
    activeLink: "https://rate-my-prof-plum.vercel.app/",
    dates: "August 2024 - August 2024",
    video: "",
  },
];

const techwise_desc =
  "Selected among the top 120 students across select colleges for TechWise, a program offered by TalentSprint \
and supported by Google that identifies and empowers capable students, preparing them for high-growth tech \
careers. A holistic program cultivating Industry-Ready Skills in Python, Web Developement, DSA, and Corporate \
Proficiency, TechWise enables its participants to be job ready.";

const mercy_desc =
  "Currently studying Computer Science at Mercy University obtaining knowledge of programme creation and computer systems \
analysis. Useful abilities in software engineering, computer architecture, operating systems, and computer networking.";

export const education: Education[] = [
  {
    id: 1,
    school: "Mercy University",
    title: "CS Major",
    duration: "2022 - 2026",
    degree: "Bachelor of Science - Computer Science",
    desc: mercy_desc,
    href: "https://mercy.edu/",
    logoUrl: "/education/mu.png",
  },
  {
    id: 2,
    school: "TechWise by Talentsprint, Powered by Google",
    title: "Student",
    duration: "2023 - 2024",
    degree: "Certificate",
    desc: techwise_desc,
    href: "",
    logoUrl: "/education/tw.png",
  },
];

export interface Experience {
  company: string;
  href: string;
  badges: string[];
  location: string;
  title: string;
  logoUrl?: string;
  duration: string;
}

export const experience: Experience[] = [
  {
    company: "Masira",
    href: "",
    badges: [],
    location: "New York, NY, Hybrid",
    title: "CTO",
    duration: "December 2024 - Present",
  },
  {
    company: "Headstarter",
    href: "https://headstarter.com/",
    badges: [],
    location: "New York, NY, Hybrid",
    title: "Software Engineer Fellow",
    logoUrl: "/hs.jpg",
    duration: "July 2024 - November 2024",
  },
];

export interface SocialProps {
  name: string;
  link: string;
  icon: any;
  target?: string;
}

export const social: SocialProps[] = [
  {
    name: "Github",
    link: "https://github.com/shaaddev",
    icon: Github,
    target: "_blank",
  },
  {
    name: "Linkedin",
    link: "https://www.linkedin.com/in/rleehue-joseph/",
    icon: Linkedin,
    target: "_blank",
  },
  {
    name: "Medium",
    link: "https://medium.com/@shaaddev",
    icon: Rss,
    target: "_blank",
  },
  {
    name: "Email",
    link: "/say_hi",
    icon: Mail,
  },
];

export const about = {
  summary:
    "I am currently a third year Computer Science major (Bachelor of Science) at **[Mercy University, Dobbs Ferry](https://mercy.edu/)**. Seeking a challenging role within a progressive organization to provide the opportunity to utilize my skills as a **[Software Development Engineer](https://www.linkedin.com/in/rleehue-joseph/)**.",
  skills: [
    "AI SDK",
    "Next.js",
    "TypeScript",
    "Python",
    "Postgres",
    "Docker",
    "Git",
    "Amazon Web Services",
  ],
};

export const notes = [
  {
    name: "Google Analytics",
    link: "/w/using-google-analytics-with-react-next-projects",
    desc: "Using Google Analytics with React and Next.js Projects",
  },
  {
    name: "AI SDK Core",
    link: "/w/ai-sdk-core",
    desc: "Using AI Vercel SDK (AI SDK Core) with Next.js and App Router",
  },
];
