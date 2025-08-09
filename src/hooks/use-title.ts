import { useEffect } from 'react';
import { matchRoutes, type RouteObject, useLocation } from 'react-router-dom';

export type RouteWithMeta = RouteObject & {
  name?: string;
  title?: string; // Include title in route type
};

const useTitle = (routes: RouteWithMeta[]) => {
  const location = useLocation();

  useEffect(() => {
    // Match the current route to find the corresponding route object
    const matchedRoutes = matchRoutes(routes, location);
    if (matchedRoutes) {
      // Get the title of the first matched route
      const routeTitle = matchedRoutes[0].route.title;
      if (routeTitle) {
        document.title = routeTitle;
      } else {
        document.title = 'FMC Indihome';
      }
    }
  }, [location, routes]);
};

export default useTitle;
