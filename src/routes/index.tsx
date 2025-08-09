import { Suspense } from 'react';
import { useRoutes } from 'react-router-dom';
import MainRoutes from './main-routes';
import { Loader } from '@/components/ui/loader';

const Routers = () => {
  return (
    <Suspense fallback={<Loader />}>
      {useRoutes([MainRoutes])}
    </Suspense>
  );
};

export default Routers;
