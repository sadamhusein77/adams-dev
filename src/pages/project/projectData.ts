import { imgLuxspace, imgNotes } from "@/assets";
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