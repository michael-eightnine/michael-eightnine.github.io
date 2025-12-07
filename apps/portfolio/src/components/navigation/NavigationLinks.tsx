import { motion } from 'motion/react';
import { NavLink } from 'react-router';
import {
  navLinksContainerVariants,
  navLinksItemVariants
} from 'utils/animationUtils';

const navItems = [
  { path: '/', label: 'Professional Focus' },
  { path: '/work-experience', label: 'Work Experience' },
  { path: '/connect-contact', label: 'Connect & Contact' },
  { path: '/bonus-content', label: 'Bonus Content' }
];

const NavigationLinks: React.FC = () => {
  return (
    <nav className="pt-24">
      <motion.ul
        animate="animate"
        className="font-mono space-y-2"
        initial="initial"
        variants={navLinksContainerVariants}
      >
        {navItems.map(({ path, label }) => (
          <motion.li key={path} variants={navLinksItemVariants}>
            <NavLink
              className={({ isActive }) =>
                isActive ? 'relative block' : 'relative block group'
              }
              to={path}
            >
              {({ isActive }) => (
                <span
                  className={`relative inline-flex items-center w-full ${
                    !isActive
                      ? 'hover:underline group-focus-visible:underline'
                      : ''
                  }`}
                >
                  {label}
                  {isActive && (
                    <motion.span
                      className="absolute right-0 top-0.25 font-mono text-2xl"
                      layoutId="nav-active-indicator"
                      transition={{
                        type: 'spring',
                        stiffness: 350,
                        damping: 30
                      }}
                    >
                      *
                    </motion.span>
                  )}
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
