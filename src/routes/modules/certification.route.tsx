import type { RouteWithMeta } from '@/hooks/use-title';
import { lazy } from 'react';

const Certificate = lazy(() => import('@/pages/certificate'));

const certificateRoutes: RouteWithMeta[] = [
  {
    path: '/certification',
    name: 'Certification',
    title: 'AdamsDev | Certification',
    element: <Certificate />
  },
];

export default certificateRoutes;
