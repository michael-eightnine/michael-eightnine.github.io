import { useCallback, useMemo, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

import { Offering } from 'content';
import { buildResponsiveImage } from 'utils';

import Lightbox from './lightbox';

type Props = {
  filename: Offering['filename'];
  className: React.HTMLProps<HTMLElement>['className'];
};

const PaintingDisplay = ({ className, filename }: Props) => {
  const imageRef = useRef<HTMLImageElement | null>(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const { src, srcSet, sizes } = useMemo(
    () => buildResponsiveImage(filename),
    [filename]
  );

  const renderImage = useCallback(
    (
      isLightbox = false,
      ref?: React.MutableRefObject<HTMLImageElement | null>
    ) => {
      const interactiveProps = {
        onClick: () => setLightboxOpen(true),
        onKeyDown: (e: React.KeyboardEvent) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            setLightboxOpen(true);
          }
        },
        tabIndex: 0,
        role: 'button'
      };

      return (
        <img
          alt="the big picture"
          className={className}
          loading="eager"
          ref={ref}
          sizes={sizes}
          src={src}
          srcSet={srcSet}
          {...(isLightbox ? {} : interactiveProps)}
        />
      );
    },
    [className, sizes, src, srcSet]
  );

  const handleLightboxClose = useCallback(() => {
    setLightboxOpen(false);
    imageRef.current?.focus();
  }, []);

  return (
    <>
      {renderImage(false, imageRef)}
      {createPortal(
        <Lightbox
          image={renderImage(true)}
          isOpen={lightboxOpen}
          onClose={handleLightboxClose}
        />,
        document.body
      )}
    </>
  );
};

export default PaintingDisplay;
