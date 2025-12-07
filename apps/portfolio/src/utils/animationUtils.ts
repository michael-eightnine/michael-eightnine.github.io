// Animation configuration utilities for consistent, delightful animations

// Page transition animations (left to right)
export const pageTransition = {
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 50 },
  initial: { opacity: 0, x: -50 },
  transition: { duration: 0.4, ease: 'easeInOut' }
};

// Sidebar slide in from left
export const sidebarSlide = {
  initial: { x: -320 },
  animate: { x: 0 },
  transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }
};

// Initial mount animations
export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut' }
};

export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.6, ease: 'easeOut' }
};

// Staggered container for child animations
export const staggerContainer = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15
    }
  }
};

// Staggered child item
export const staggerItem = {
  initial: { opacity: 0, x: -10 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.5, ease: 'easeOut' }
};

// Main content area initial mount
export const contentMount = {
  initial: { opacity: 0, scale: 0.98 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.3, ease: 'easeOut', delay: 1.8 }
};

// Navigation bar sections - delays relative to sidebar slide completion
export const navSectionDelay = {
  title: 0.9, // Start after sidebar slides in (0.8s duration)
  links: 1.1, // Links start slightly after title
  wordmark: 1.6 // Wordmark comes in last
};

// Navigation links variants (for use with Framer Motion variants prop)
export const navLinksContainerVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 1.1
    }
  }
};

// Mobile menu navigation links variants (faster animation, no delay)
export const mobileNavLinksContainerVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

export const navLinksItemVariants = {
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

// Mobile menu overlay animation
export const mobileMenuOverlay = {
  initial: { opacity: 0, y: -20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.3, ease: 'easeOut' }
};

// Mobile header slide in from top
export const mobileHeaderSlide = {
  initial: { y: -72 },
  animate: { y: 0 },
  transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }
};

// Mobile content mount (faster, no delay)
export const mobileContentMount = {
  initial: { opacity: 0, scale: 0.98 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.3, ease: 'easeOut', delay: 0.3 }
};
