import { motion } from 'motion/react';
import { pageTransition } from 'utils/animationUtils';

type Props = {
  className?: string;
};

const PageTransition: React.FC<Props & ChildrenProps> = ({
  children,
  className = ''
}) => {
  return (
    <motion.div
      animate={pageTransition.animate}
      className={`${className} max-w-3xl bg-light mx-auto p-4 md:p-8 relative [&>p+p]:mt-4`}
      exit={pageTransition.exit}
      initial={pageTransition.initial}
      transition={pageTransition.transition}
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;
