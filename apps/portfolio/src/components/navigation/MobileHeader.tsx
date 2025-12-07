import { motion } from 'motion/react';
import Wordmark from 'components/svg/Wordmark';
import HamburgerButton from './HamburgerButton';
import { mobileHeaderSlide } from 'utils/animationUtils';

const MobileHeader: React.FC = () => {
  return (
    <motion.header
      animate={mobileHeaderSlide.animate}
      className="fixed top-0 left-0 right-0 z-50 bg-primary px-6 py-4 flex items-center justify-between"
      initial={mobileHeaderSlide.initial}
      transition={mobileHeaderSlide.transition}
    >
      <Wordmark className="w-42 text-light" />
      <HamburgerButton />
    </motion.header>
  );
};

export default MobileHeader;
