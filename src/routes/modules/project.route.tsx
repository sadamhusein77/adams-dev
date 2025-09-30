import type { RouteWithMeta } from '@/hooks/use-title';
import { lazy } from 'react';

const Project = lazy(() => import('@/pages/project'));

const projectRoutes: RouteWithMeta[] = [
  {
    path: '/project',
    name: 'Project',
    title: 'AdamsDev | Project',
    element: <Project />
  },
];

export default projectRoutes;
