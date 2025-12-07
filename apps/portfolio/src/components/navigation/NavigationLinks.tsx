import { motion } from 'motion/react';
import { NavLink } from 'react-router';
import {
  navLinksContainerVariants,
  mobileNavLinksContainerVariants,
  navLinksItemVariants
} from 'utils/animationUtils';
import Asterisk from 'components/svg/Asterisk';

const navItems = [
  { path: '/', label: 'Professional Focus' },
  { path: '/work-experience', label: 'Work Experience' },
  { path: '/connect-contact', label: 'Connect & Contact' },
  { path: '/bonus-content', label: 'Bonus Content' }
] as const;

const NavigationActiveIndicator: React.FC = () => (
  <motion.span
    aria-hidden
    className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none"
    layoutId="nav-active-indicator"
    transition={{
      type: 'spring',
      stiffness: 200,
      damping: 15
    }}
  >
    <Asterisk className="w-full h-full text-light" />
  </motion.span>
);

type Props = {
  onLinkClick?: () => void;
  useMobileVariant?: boolean;
};

const NavigationLinks: React.FC<Props> = ({
  onLinkClick,
  useMobileVariant = false
}) => {
  const containerVariants = useMobileVariant
    ? mobileNavLinksContainerVariants
    : navLinksContainerVariants;

  return (
    <nav className="mt-16 md:mt-24">
      <motion.ul
        animate="animate"
        className="font-mono space-y-2"
        initial="initial"
        variants={containerVariants}
      >
        {navItems.map(({ path, label }) => (
          <motion.li key={path} variants={navLinksItemVariants}>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? 'relative block focus:outline-none group'
                  : 'relative block group focus:outline-none'
              }
              onClick={onLinkClick}
              to={path}
            >
              {({ isActive }) => (
                <span
                  className={`relative inline-flex items-center w-full ${
                    !isActive
                      ? 'hover:underline group-focus-visible:underline'
                      : 'group-focus-visible:underline'
                  }`}
                >
                  {label}
                  {isActive && <NavigationActiveIndicator />}
                </span>
              )}
            </NavLink>
          </motion.li>
        ))}
      </motion.ul>
    </nav>
  );
};

export default NavigationLinks;
