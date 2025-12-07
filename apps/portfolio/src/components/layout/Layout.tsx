import { motion } from 'motion/react';
import Background from 'components/svg/Background';
import {
  contentMount,
  mobileContentMount,
  sidebarSlide
} from 'utils/animationUtils';
import { MobileMenuProvider } from 'contexts/MobileMenuContext';
import MobileHeader from 'components/navigation/MobileHeader';
import MobileMenuOverlay from 'components/navigation/MobileMenuOverlay';
import { useMediaQuery } from 'utils/useMediaQuery';

type Props = {
  content: React.ReactNode;
  navigation: React.ReactNode;
};

const Layout: React.FC<Props> = ({ content, navigation }) => {
  const isDesktop = useMediaQuery('(min-width: 768px)');

  // Use different animation timings for mobile vs desktop
  const contentAnimation = isDesktop ? contentMount : mobileContentMount;

  return (
    <MobileMenuProvider>
      <div className="h-screen overflow-hidden flex min-w-screen bg-light relative">
        <div className="absolute inset-0 pointer-events-none">
          <Background />
        </div>
        {!isDesktop && <MobileHeader />}
        {isDesktop && (
          <motion.div
            animate={sidebarSlide.animate}
            className="flex-none min-h-screen w-[var(--spacing-nav-width)] bg-primary relative z-10"
            initial={sidebarSlide.initial}
            transition={sidebarSlide.transition}
          >
            {navigation}
          </motion.div>
        )}
        {!isDesktop && <MobileMenuOverlay />}
        <motion.div
          animate={contentAnimation.animate}
          className={`grow h-screen overflow-auto relative bg-transparent z-10 ${
            isDesktop ? 'px-8 py-12' : 'p-6 pt-[var(--spacing-header-offset)]'
          }`}
          initial={contentAnimation.initial}
          transition={contentAnimation.transition}
        >
          {content}
        </motion.div>
      </div>
    </MobileMenuProvider>
  );
};

export default Layout;
