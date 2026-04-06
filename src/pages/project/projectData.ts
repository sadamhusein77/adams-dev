import { imgFloflow, imgGGameHub, imgIrello, imgLiburi, imgLuxspace, imgNotes, imgOneByOne, imgWallyboard } from "@/assets";
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
    id: 3,
    title: "Liburi",
    description:
      "Booking Vacation Web Application",
    tags: ["React", "Tailwindcss", "TypeScript"],
    year: 2025,
    image: imgLiburi,
    url: "https://liburi.vercel.app/",
  },
  {
    id: 4,
    title: "Irello",
    description:
      "AI-powered task management and productivity application",
    tags: ["AI", "React", "Vite", "Tailwindcss", "TypeScript"],
    year: 2026,
    image: imgIrello,
    url: "https://irello.vercel.app/",
  },
  {
    id: 5,
    title: "Wallyboard",
    description:
      "AI-powered white board",
    tags: ["AI", "React", "Vite", "Tailwindcss", "TypeScript"],
    year: 2026,
    image: imgWallyboard,
    url: "https://wally-board.vercel.app/",
  },
  {
    id: 6,
    title: "FloFlow",
    description:
      "AI-powered simple cashflow management and report",
    tags: ["AI", "React", "Vite", "Tailwindcss", "TypeScript"],
    year: 2026,
    image: imgFloflow,
    url: "https://floflow.vercel.app/",
  },
  {
    id: 7,
    title: "G-Game Hub",
    description:
      "AI-powered simple mini game",
    tags: ["AI", "React", "Vite", "Tailwindcss", "TypeScript"],
    year: 2026,
    image: imgGGameHub,
    url: "https://ggamehub.vercel.app/",
  },
  {
    id: 8,
    title: "One by One Battle Combat",
    description:
      "AI-powered simple battle combat with inventory and crafting feature",
    tags: ["AI", "React", "Vite", "Tailwindcss", "TypeScript"],
    year: 2026,
    image: imgOneByOne,
    url: "https://onebyone-gilt.vercel.app/",
  }
];