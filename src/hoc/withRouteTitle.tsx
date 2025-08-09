import React from 'react';
import useTitle, { type RouteWithMeta } from '@/hooks/use-title';

const withRouteTitle = <P extends object>(
  Component: React.ComponentType<P>,
  routes: RouteWithMeta[] // Pass routes directly
): React.FC<P> => {
  return (props: P) => {
    useTitle(routes); // Hook handles setting the title
    return <Component {...props} />;
  };
};

export default withRouteTitle;
