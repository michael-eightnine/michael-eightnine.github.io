import { AnimatePresence } from 'motion/react';
import { useLocation, useOutlet } from 'react-router';

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
