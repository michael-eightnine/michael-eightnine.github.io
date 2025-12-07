import { useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { useMobileMenu } from 'contexts/MobileMenuContext';
import { mobileMenuOverlay } from 'utils/animationUtils';
import Title from './Title';
import NavigationLinks from './NavigationLinks';

const MobileMenuOverlay: React.FC = () => {
  const { isOpen, closeMenu } = useMobileMenu();
  const overlayRef = useRef<HTMLDivElement>(null);

  // Body scroll lock
  useEffect(() => {
    if (isOpen) {
      const originalOverflow = document.body.style.overflow;
      const originalPosition = document.body.style.position;
      const originalWidth = document.body.style.width;

      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';

      return () => {
        document.body.style.overflow = originalOverflow;
        document.body.style.position = originalPosition;
        document.body.style.width = originalWidth;
      };
    }
  }, [isOpen]);

  // Escape key handler
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        closeMenu();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, closeMenu]);

  // Focus management and focus trap
  useEffect(() => {
    if (!isOpen || !overlayRef.current) return;

    const overlay = overlayRef.current;
    const focusableElements = overlay.querySelectorAll(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
    );

    if (focusableElements.length === 0) return;

    const firstElement = focusableElements[0] as HTMLElement;
    const lastElement = focusableElements[
      focusableElements.length - 1
    ] as HTMLElement;

    // Focus first element when menu opens
    firstElement.focus();

    // Focus trap handler
    const handleTabKey = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;

      if (e.shiftKey) {
        // Shift + Tab
        if (document.activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        }
      } else {
        // Tab
        if (document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    };

    overlay.addEventListener('keydown', handleTabKey);
    return () => overlay.removeEventListener('keydown', handleTabKey);
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          animate={mobileMenuOverlay.animate}
          aria-label="Navigation menu"
          aria-modal="true"
          className="fixed top-[var(--spacing-header-height)] left-0 right-0 bottom-0 z-50 bg-primary flex flex-col p-6 overflow-y-auto border-t border-light"
          exit={mobileMenuOverlay.exit}
          id="mobile-menu"
          initial={mobileMenuOverlay.initial}
          ref={overlayRef}
          role="dialog"
          transition={mobileMenuOverlay.transition}
        >
          <div className="text-light mt-10">
            <Title />
          </div>
          <div className="text-light">
            <NavigationLinks onLinkClick={closeMenu} useMobileVariant={true} />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenuOverlay;
