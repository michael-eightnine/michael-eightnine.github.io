import { motion } from 'motion/react';
import { pageTransition } from 'utils/animationUtils';

type Props = {
  children: React.ReactNode;
};

const PageTransition: React.FC<Props> = ({ children }) => {
  return (
    <motion.div
      animate={pageTransition.animate}
      className="max-w-lg bg-white mx-auto rounded-small p-8 relative"
      exit={pageTransition.exit}
      initial={pageTransition.initial}
      transition={pageTransition.transition}
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;
