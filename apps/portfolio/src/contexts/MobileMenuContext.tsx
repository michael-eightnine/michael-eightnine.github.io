import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback
} from 'react';
import { useLocation } from 'react-router';
import { useMediaQuery } from 'utils/useMediaQuery';

interface MobileMenuContextValue {
  isOpen: boolean;
  closeMenu: () => void;
  toggleMenu: () => void;
}

const MobileMenuContext = createContext<MobileMenuContextValue | undefined>(
  undefined
);

// eslint-disable-next-line react-refresh/only-export-components
export const useMobileMenu = (): MobileMenuContextValue => {
  const context = useContext(MobileMenuContext);
  if (!context) {
    throw new Error('useMobileMenu must be used within MobileMenuProvider');
  }
  return context;
};

export const MobileMenuProvider: React.FC<ChildrenProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isDesktop = useMediaQuery('(min-width: 768px)');

  const closeMenu = useCallback(() => setIsOpen(false), []);
  const toggleMenu = useCallback(() => setIsOpen((prev) => !prev), []);

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Close menu when switching to desktop view
  useEffect(() => {
    if (isDesktop) {
      setIsOpen(false);
    }
  }, [isDesktop]);

  const value: MobileMenuContextValue = {
    isOpen,
    closeMenu,
    toggleMenu
  };

  return (
    <MobileMenuContext.Provider value={value}>
      {children}
    </MobileMenuContext.Provider>
  );
};
