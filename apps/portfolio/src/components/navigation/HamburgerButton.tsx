import { useMobileMenu } from 'contexts/MobileMenuContext';

const HamburgerButton: React.FC = () => {
  const { isOpen, toggleMenu } = useMobileMenu();

  return (
    <button
      aria-controls="mobile-menu"
      aria-expanded={isOpen}
      aria-label={isOpen ? 'Close menu' : 'Open menu'}
      className="relative w-10 h-10 flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-light focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
      onClick={toggleMenu}
      type="button"
    >
      <div className="w-6 h-5 relative">
        {/* Top line - fades out when open */}
        <span
          className={`absolute w-full h-0.5 left-0 bg-light top-0 transition-all duration-300 ease-in-out ${
            isOpen ? 'opacity-0' : 'opacity-100'
          }`}
        />
        {/* Center line 1 - rotates to form top part of X */}
        <span
          className={`absolute w-full h-0.5 left-0 bg-light top-1/2 -translate-y-1/2 transition-all duration-300 ease-in-out ${
            isOpen ? 'rotate-45' : 'rotate-0'
          }`}
        />
        {/* Center line 2 - rotates to form bottom part of X */}
        <span
          className={`absolute w-full h-0.5 left-0 bg-light top-1/2 -translate-y-1/2 transition-all duration-300 ease-in-out ${
            isOpen ? '-rotate-45' : 'rotate-0'
          }`}
        />
        {/* Bottom line - fades out when open */}
        <span
          className={`absolute w-full h-0.5 left-0 bg-light bottom-0 transition-all duration-300 ease-in-out ${
            isOpen ? 'opacity-0' : 'opacity-100'
          }`}
        />
      </div>
    </button>
  );
};

export default HamburgerButton;
