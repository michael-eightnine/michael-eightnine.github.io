import { motion } from 'motion/react';
import Background from 'components/svg/Background';
import { contentMount, sidebarSlide } from 'utils/animationUtils';

type Props = {
  content: React.ReactNode;
  navigation: React.ReactNode;
};

const Layout: React.FC<Props> = ({ content, navigation }) => {
  return (
    <div className="h-screen overflow-hidden flex min-w-screen bg-white relative">
      <div className="absolute inset-0 pointer-events-none">
        <Background />
      </div>
      <motion.div
        animate={sidebarSlide.animate}
        className="flex-none min-h-screen w-xs bg-[#0000ff] relative z-10"
        initial={sidebarSlide.initial}
        transition={sidebarSlide.transition}
      >
        {navigation}
      </motion.div>
      <motion.div
        animate={contentMount.animate}
        className="grow min-h-screen relative p-8 bg-transparent z-10"
        initial={contentMount.initial}
        transition={contentMount.transition}
      >
        {content}
      </motion.div>
    </div>
  );
};

export default Layout;
