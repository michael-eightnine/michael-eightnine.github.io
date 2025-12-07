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
import NavigationBar from 'components/navigation/NavigationBar';

type Props = {
  content: React.ReactNode;
};

/**
 * Primary layout component, handles mounting of mobile vs desktop nav
 * Content is provided as prop, derived from routing config in implementing component
 */
const Layout: React.FC<Props> = ({ content }) => {
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
          <motion.aside
            animate={sidebarSlide.animate}
            className="flex-none min-h-screen w-[var(--spacing-nav-width)] bg-primary relative z-10"
            initial={sidebarSlide.initial}
            transition={sidebarSlide.transition}
          >
            <NavigationBar />
          </motion.aside>
        )}
        {!isDesktop && <MobileMenuOverlay />}
        <motion.main
          animate={contentAnimation.animate}
          className={`grow h-screen overflow-auto relative bg-transparent z-10 ${
            isDesktop ? 'px-8 py-12' : 'p-6 pt-[var(--spacing-header-offset)]'
          }`}
          initial={contentAnimation.initial}
          transition={contentAnimation.transition}
        >
          {content}
        </motion.main>
      </div>
    </MobileMenuProvider>
  );
};

export default Layout;
