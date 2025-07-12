import { useCallback, useMemo, useRef, useState } from 'react';

import { Offering, createContentPathname, IMAGE_SIZES } from 'content';

import Lightbox from './lightbox';
import { createPortal } from 'react-dom';

type Props = {
  filename: Offering['filename'];
  className: React.HTMLProps<HTMLElement>['className'];
};

const formats = ['avif', 'webp'] as const;

const PaintingDisplay = ({ className, filename }: Props) => {
  const imageRef = useRef<HTMLImageElement | null>(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const srcSet = useMemo(
    () =>
      formats
        .reduce((acc, format) => {
          return [
            ...acc,
            ...IMAGE_SIZES.map(
              (size) =>
                `${createContentPathname(`${filename}-${size}.${format}`, 'painting')} ${size}w`
            )
          ];
        }, [] as string[])
        .join(', '),
    [filename]
  );

  const sizesProp = useMemo(
    () =>
      IMAGE_SIZES.map(
        (size, index) =>
          `(max-width: ${size}px) ${index === 0 ? size / 2 : IMAGE_SIZES[index - 1]}px`
      ).join(', ') + `, ${IMAGE_SIZES[IMAGE_SIZES.length - 1]}px`,
    []
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
          sizes={sizesProp}
          src={`${createContentPathname(`${filename}-1280.webp`, 'painting')}`}
          srcSet={srcSet}
          {...(isLightbox ? {} : interactiveProps)}
        />
      );
    },
    [className, filename, sizesProp, srcSet]
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
