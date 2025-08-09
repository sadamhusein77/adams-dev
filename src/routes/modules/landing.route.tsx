import type { RouteWithMeta } from '@/hooks/use-title';
import { lazy } from 'react';

const Landing = lazy(() => import('@/pages/landing'));

const landingRoutes: RouteWithMeta[] = [
  {
    path: '/home',
    name: 'Home',
    title: 'AdamsDev | Home',
    element: <Landing />
  },
];

export default landingRoutes;
