import { useEffect, useState } from 'react';

export const useBreakpoints = () => {
  const getState = () => ({
    isMobile: window.matchMedia('(max-width: 768px)').matches,
    isTablet: window.matchMedia('(max-width: 1024px)').matches,
    isDesktop: window.matchMedia('(min-width: 1025px)').matches,
  });

  const [state, setState] = useState(getState);

  useEffect(() => {
    const mobile = window.matchMedia('(max-width: 768px)');
    const tablet = window.matchMedia('(max-width: 1024px)');

    const update = () => {
      setState({
        isMobile: mobile.matches,
        isTablet: tablet.matches,
        isDesktop: !mobile.matches && !tablet.matches,
      });
    };

    update();

    mobile.addEventListener('change', update);
    tablet.addEventListener('change', update);

    return () => {
      mobile.removeEventListener('change', update);
      tablet.removeEventListener('change', update);
    };
  }, []);

  return state;
};
