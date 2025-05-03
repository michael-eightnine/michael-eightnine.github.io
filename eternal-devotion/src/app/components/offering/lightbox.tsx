import { useEffect, useRef } from 'react';
import styles from './lightbox.module.scss';

type Props = {
  image: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
};

const Lightbox = ({ image, isOpen, onClose }: Props) => {
  const lightboxRef = useRef<HTMLDivElement | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    // Trap focus by cycling between first and last focusable elements
    const handleKeydown = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        e.preventDefault();
        closeButtonRef.current?.focus();
      }
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      }
    };

    if (isOpen) {
      // Focus the close button when the modal opens
      closeButtonRef.current?.focus();

      // Add event listener to trap focus inside the modal
      document.addEventListener('keydown', handleKeydown);
    }

    // Cleanup when the modal is closed
    return () => {
      document.removeEventListener('keydown', handleKeydown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className={styles.lightbox} ref={lightboxRef} role="dialog">
      <button
        onClick={onClose}
        ref={(el) => {
          el?.focus();
          closeButtonRef.current = el;
        }}
      >
        [close]
      </button>
      {image}
    </div>
  );
};

export default Lightbox;
