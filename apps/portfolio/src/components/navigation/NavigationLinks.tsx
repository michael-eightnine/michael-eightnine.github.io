import { motion } from 'motion/react';
import { NavLink } from 'react-router';

const navItems = [
  { path: '/', label: 'Professional Focus' },
  { path: '/work-experience', label: 'Work Experience' },
  { path: '/connect-contact', label: 'Connect & Contact' },
  { path: '/bonus-content', label: 'Bonus Content' }
];

const containerVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 1.1
    }
  }
};

const itemVariants = {
  initial: { opacity: 0, x: -10 },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut'
    }
  }
};

const NavigationLinks: React.FC = () => {
  return (
    <nav className="pt-24">
      <motion.ul
        animate="animate"
        className="font-mono space-y-2"
        initial="initial"
        variants={containerVariants}
      >
        {navItems.map(({ path, label }) => (
          <motion.li key={path} variants={itemVariants}>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? 'underline opacity-100'
                  : 'opacity-70 hover:opacity-100 transition-opacity'
              }
              to={path}
            >
              {label}
            </NavLink>
          </motion.li>
        ))}
      </motion.ul>
    </nav>
  );
};

export default NavigationLinks;
