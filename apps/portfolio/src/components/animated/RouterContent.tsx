import { AnimatePresence } from 'motion/react';
import { useLocation, useOutlet } from 'react-router';

/**
 * Exposes route content via `Outlet`
 * Wrapped in AnimatePresence to support the animation config in `PageTransition`
 */
const RouterContent: React.FC = () => {
  const location = useLocation();
  const outlet = useOutlet();

  return (
    <AnimatePresence initial={false} mode="wait">
      <div key={location.pathname}>{outlet}</div>
    </AnimatePresence>
  );
};

export default RouterContent;
