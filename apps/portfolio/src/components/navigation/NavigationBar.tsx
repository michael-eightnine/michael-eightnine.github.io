import { motion } from 'motion/react';
import Wordmark from 'components/svg/Wordmark';
import Title from './Title';
import NavigationLinks from './NavigationLinks';
import { fadeInUp, navSectionDelay } from 'utils/animationUtils';

const NavigationBar: React.FC = () => {
  return (
    <div className="py-12 px-8 flex flex-col text-light h-full">
      <motion.div
        animate={fadeInUp.animate}
        initial={fadeInUp.initial}
        transition={{ ...fadeInUp.transition, delay: navSectionDelay.title }}
      >
        <Title />
      </motion.div>
      <NavigationLinks />
      <motion.div
        animate={fadeInUp.animate}
        className="mt-auto"
        initial={fadeInUp.initial}
        transition={{ ...fadeInUp.transition, delay: navSectionDelay.wordmark }}
      >
        <Wordmark className="w-[175px]" />
      </motion.div>
    </div>
  );
};

export default NavigationBar;
