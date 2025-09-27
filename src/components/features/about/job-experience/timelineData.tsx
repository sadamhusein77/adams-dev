import type { TTimelineItem } from '@/components/ui/timeline/item';
import { Briefcase, Code, Palette, CircleDollarSign, Landmark } from 'lucide-react';

export const timelineData: TTimelineItem[] = [
  {
    id: 1,
    company: 'Ako Media Asia, PT (IT Consultant)',
    title: 'Middle Frontend Developer',
    period: '2023 — Present',
    description:
      'As a developer, I am skilled in converting Figma designs into responsive applications...',
    icon: <Code className="icon" />,
    color: 'bg-blue-500',
  },
  {
    id: 2,
    company: 'Buana Varia Komputama, PT (IT Consultant)',
    title: 'Middle Frontend Developer',
    period: '2022 — 2023',
    description:
      'I specialize in transforming Figma designs into responsive healthcare applications...',
    icon: <Code className="icon" />,
    color: 'bg-blue-500',
  },
  {
    id: 3,
    company: 'Extramarks Education Indonesia, PT (Edutech)',
    title: 'Frontend Developer',
    period: '2022 — 2023',
    description: 'I am an expert in crafting educational technology platforms...',
    icon: <Code className="icon" />,
    color: 'bg-blue-500',
  },
  {
    id: 4,
    company: 'Serba Mulia Auto, PT (Funding)',
    title: 'Web Developer',
    period: '2021 — 2021',
    description: 'I am an experienced web developer who transforms Figma designs...',
    icon: <Briefcase className="icon" />,
    color: 'bg-green-500',
  },
  {
    id: 5,
    company: 'Yufendy Konsultan Indonesia, PT (Law Firm)',
    title: 'Accounting and Tax Staff',
    period: '2019 — 2021',
    description: 'As an Accounting and Tax Staff, I am responsible for managing...',
    icon: <CircleDollarSign className="icon" />,
    color: 'bg-amber-400',
  },
  {
    id: 6,
    company: 'Bank Central Asia, PT (Bank)',
    title: 'Teller Staff',
    period: '2016 — 2019',
    description: 'As a Bank Teller, I am the first point of contact for customers...',
    icon: <Landmark className="icon" />,
    color: 'bg-amber-400',
  },
  {
    id: 7,
    company: '20 Fit (Health Center)',
    title: 'Office Boy',
    period: '2016 — 2016',
    description:
      'As an Office Boy, I am responsible for the daily upkeep and smooth operation...',
    icon: <Palette className="icon" />,
    color: 'bg-pink-500',
  },
];
