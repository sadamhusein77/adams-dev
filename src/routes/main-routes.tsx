import withRouteTitle from '@/hoc/withRouteTitle';
import { lazy } from 'react';
import { Navigate } from 'react-router-dom';
import landingRoutes from './modules/landing.route';
const NotFoundPage = lazy(() => import('@/pages/not-found'));
const MainLayout = lazy(() => import('@/components/layouts/main-layout'));

const allRoutes = [
  ...landingRoutes,
  {
    path: '*',
    element: <NotFoundPage />,
    title: 'Page Not Found'
  }
];

const MainLayoutWithTitle = withRouteTitle(MainLayout, allRoutes);

const MainRoutes = {
  children: [
    {
      index: true,
      element: <Navigate to="/home" replace />
    },
    {
      path: '/',
      element: <MainLayoutWithTitle />,
      children: allRoutes
    }
  ]
};

export default MainRoutes;
