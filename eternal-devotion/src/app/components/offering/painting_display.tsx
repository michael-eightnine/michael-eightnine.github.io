import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

import { Offering, createContentPathname, IMAGE_SIZES } from 'content';

import Lightbox from './lightbox';

type Props = {
  filename: Offering['filename'];
  className: React.HTMLProps<HTMLElement>['className'];
};

const formats = ['avif', 'webp'] as const;

const PaintingDisplay = ({ className, filename }: Props) => {
  const imageRef = useRef<HTMLImageElement | null>(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const srcSet = useMemo(
    () =>
      formats
        .reduce((acc, format) => {
          return [
            ...acc,
            ...IMAGE_SIZES.map(
              (size) =>
                `${createContentPathname(`${filename}-${size}.${format}`)} ${size}w`
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

  const handleImageLoad = useCallback(() => {
    setImageLoaded(true);
  }, []);

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
          onLoad={isLightbox ? undefined : handleImageLoad}
          ref={ref}
          sizes={sizesProp}
          src={`${createContentPathname(`${filename}-1280.webp`)}`}
          srcSet={srcSet}
          {...(isLightbox ? {} : interactiveProps)}
        />
      );
    },
    [className, filename, sizesProp, srcSet, handleImageLoad]
  );

  const handleLightboxClose = useCallback(() => {
    setLightboxOpen(false);
    imageRef.current?.focus();
  }, []);

  // Reset loading state when filename changes
  useEffect(() => {
    setImageLoaded(false);
  }, [filename]);

  return (
    <>
      <div style={{ position: 'relative' }}>
        {!imageLoaded && (
          <div
            className={className}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: '#f5f5f5',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 1
            }}
          >
            <div
              style={{
                width: '40px',
                height: '40px',
                border: '2px solid #ddd',
                borderTop: '2px solid #333',
                borderRadius: '50%',
                animation: 'spin 1s linear infinite'
              }}
            />
          </div>
        )}
        {renderImage(false, imageRef)}
      </div>
      <Lightbox
        image={renderImage(true)}
        isOpen={lightboxOpen}
        onClose={handleLightboxClose}
      />
    </>
  );
};

export default PaintingDisplay;
