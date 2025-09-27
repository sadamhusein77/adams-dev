import type { RouteWithMeta } from '@/hooks/use-title';
import { lazy } from 'react';

const About = lazy(() => import('@/pages/about'));

const aboutRoutes: RouteWithMeta[] = [
  {
    path: '/about',
    name: 'About',
    title: 'AdamsDev | About',
    element: <About />
  },
];

export default aboutRoutes;
