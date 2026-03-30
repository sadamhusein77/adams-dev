import { imgLiburi, imgLuxspace, imgNotes } from "@/assets";
import type { IProject } from ".";

export const SAMPLE_PROJECTS: IProject[] = [
  {
    id: 1,
    title: "Luxspace",
    description:
      "Prototype of sample web e-commerce",
    tags: ["React", "Tailwindcss", "TypeScript"],
    year: 2022,
    image: imgLuxspace,
    url: "https://luxtspace-rfd.netlify.app/",
  },
  {
    id: 2,
    title: "My Keep Notes",
    description:
      "Example notes with temporary storage",
    tags: ["React", "Tailwindcss", "TypeScript"],
    year: 2022,
    image: imgNotes,
    url: "https://my-keep-notes.netlify.app/",
  },
  {
    id: 5,
    title: "Liburi",
    description:
      "Booking Vacation Web Application",
    tags: ["React", "Tailwindcss", "TypeScript"],
    year: 2025,
    image: imgLiburi,
    url: "https://liburi.vercel.app/",
  },
  {
    id: 6,
    title: "Irello",
    description:
      "AI-powered task management and productivity application",
    tags: ["React", "Vite", "Tailwindcss", "TypeScript", "AI"],
    year: 2026,
    image: "https://minimax-algeng-chat-tts-us.oss-us-east-1.aliyuncs.com/ccv2%2F2026-03-30%2FMiniMax-M2.7%2F2027207676231954527%2F51884f2291240a9f0d449492ec42710f724bd00e4270f6a8e133927816446dc0..png?Expires=1774968194&OSSAccessKeyId=LTAI5tCpJNKCf5EkQHSuL9xg&Signature=4n94wuGyjMUBnYs%2FUq6eKnmLUOQ%3D",
    url: "https://irello.vercel.app/",
  },
  {
    id: 3,
    title: "Interactive Data Explorer",
    description:
      "A visualization tool for exploring financial time series with custom queries and export functionality.",
    tags: ["D3", "React", "Data Viz"],
    year: 2025,
    image: "https://images.unsplash.com/photo-1509395176047-4a66953fd231?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=3",
    url: "#",
  },
  {
    id: 4,
    title: "Mobile Social App",
    description: "A social app prototype focusing on privacy, offline reading, and small-group interactions.",
    tags: ["React Native", "Product"],
    year: 2022,
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=4",
    url: "#",
  },
];