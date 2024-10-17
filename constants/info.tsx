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
  logoUrl: string | undefined;
  school: string;
  title: string;
  duration: string;
  degree: string;
  desc: string;
}

export const projects: Projects[] = [
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
    activeLink: "https://www.llandit.com/",
    link: "https://github.com/shaaddev/ApplicationRecord",
    dates: "June 2024 - Present",
    image: "/2.png",
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
    image: "/1.png",
    video: "",
  },
  {
    title: "Serenity Focus",
    desc: "A productivity tracker app developed by a group as part of the TechWise Program web development course, supported by Google and provided by TalentSprint",
    techStack: [
      "Next.js",
      "PostgreSQL",
      "Tailwind CSS",
      "DaisyUI",
      "KindeAuth",
    ],
    link: "https://github.com/TechWise-Project-2/SerenityFocus",
    activeLink: "https://serenityfocuss.com/",
    dates: "December 2023 - Present",
    image: "/6.jpeg",
  },
  {
    title: "Social Events",
    desc: "This is a web app intended to help persons of interest to promote their upcoming events. Originally created using the python framework Django.",
    techStack: [
      "Next.js",
      "PostgreSQL",
      "Tailwind CSS",
      "Shadcn",
      "AWS",
      "KindeAuth",
    ],
    link: "https://github.com/shaaddev/SocialEventsNextJS",
    activeLink: "https://events.shaad.io/",
    dates: "2022 - 2024",
    image: "/5.jpeg",
  },
  {
    title: "Compute Age",
    desc: "From the Terminal to the User Interface, originally created in Java, this web app helps you to calculate your age",
    techStack: ["Next.js", "Tailwind CSS", "Shadcn"],
    link: "https://github.com/shaaddev/ComputeAge",
    activeLink: "https://age.shaad.io/",
    dates: "2023 - 2023",
    image: "/4.jpeg",
  },
];

const techwise_desc =
  "Selected among the top 120 students across select colleges for TechWise, a program offered by TalentSprint \
and supported by Google that identifies and empowers capable students, preparing them for high-growth tech \
careers. A holistic program cultivating Industry-Ready Skills in Python, Web Developement, DSA, and Corporate \
Proficiency, TechWise enables its participants to be job ready.";

const uwi_desc =
  "Graduated with an Associate Degree that mixes a variety of Information Technology (IT) disciplines, such as \
information systems, programming, database systems, web design, hardware, and networking, with the business skills required to \
get ready for a job in the IT sector. ";

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
  {
    id: 3,
    school: "UWI Roytec",
    title: "Information Systems Management",
    duration: "2020 - 2022",
    degree: "A.S. Information Systems Management",
    desc: uwi_desc,
    href: "https://www.roytec.edu/",
    logoUrl: "/education/uwi.png",
  },
];

export interface Experience {
  company: string;
  href: string;
  badges: string[];
  location: string;
  title: string;
  logoUrl: string;
  duration: string;
}

export const experience: Experience[] = [
  {
    company: "Headstarter",
    href: "https://headstarter.com/",
    badges: [],
    location: "New York, NY, Hybrid",
    title: "Software Engineer Fellow",
    logoUrl: "/hs.jpg",
    duration: "July 2024 - Present",
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
    "Next.js",
    "React.js",
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
    name: "AI SDK Core",
    link: "/w/ai-sdk-core",
    desc: "Using AI Vercel SDK (AI SDK Core) with Next.js and App Router",
  },
];
