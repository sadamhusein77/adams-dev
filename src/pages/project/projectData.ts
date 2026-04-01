import { imgIrello, imgLiburi, imgLuxspace, imgNotes, imgWallyboard } from "@/assets";
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
    tags: ["React", "Vite", "Tailwindcss", "TypeScript", "AI"],
    year: 2026,
    image: imgIrello,
    url: "https://irello.vercel.app/",
  },
  {
    id: 5,
    title: "Wallyboard",
    description:
      "AI-powered white board",
    tags: ["React", "Vite", "Tailwindcss", "TypeScript", "AI"],
    year: 2026,
    image: imgWallyboard,
    url: "https://wally-board.vercel.app/",
  }
];