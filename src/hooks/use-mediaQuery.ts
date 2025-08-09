import { useEffect, useState } from 'react';

/**
 * Tailwind-style responsive breakpoints using media queries.
 */
const breakpoints = {
  sm: '(min-width: 640px)',
  md: '(min-width: 768px)',
  lg: '(min-width: 1024px)',
  xl: '(min-width: 1280px)',
  '2xl': '(min-width: 1536px)',
};

type BreakpointKeys = keyof typeof breakpoints;

type BreakpointMatches = {
  [key in BreakpointKeys]: boolean;
};

const useMediaQuery = (): BreakpointMatches => {
  const getMatches = (): BreakpointMatches => {
    return Object.fromEntries(
      Object.entries(breakpoints).map(([key, query]) => [
        key,
        typeof window !== 'undefined' && window.matchMedia(query).matches,
      ])
    ) as BreakpointMatches;
  };

  const [matches, setMatches] = useState<BreakpointMatches>(getMatches);

  useEffect(() => {
    const mediaQueryLists = Object.entries(breakpoints).map(([key, query]) => ({
      key,
      mql: window.matchMedia(query),
    }));

    const handler = () => {
      setMatches(getMatches());
    };

    mediaQueryLists.forEach(({ mql }) => {
      mql.addEventListener('change', handler);
    });

    return () => {
      mediaQueryLists.forEach(({ mql }) => {
        mql.removeEventListener('change', handler);
      });
    };
  }, []);

  return matches;
};

export default useMediaQuery;
