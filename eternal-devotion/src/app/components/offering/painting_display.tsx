import { useRef, useState } from 'react';

import { Offering, createContentPathname, IMAGE_SIZES } from 'content';
import Lightbox from './lightbox';

type Props = {
  filename: Offering['filename'];
  className: React.HTMLProps<HTMLElement>['className'];
};

const formats = ['avif', 'webp'] as const;

// TODO: Lightbox feature
const PaintingDisplay = ({ className, filename }: Props) => {
  const imageRef = useRef<HTMLImageElement | null>(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const srcSet = formats
    .reduce((acc, format) => {
      return [
        ...acc,
        ...IMAGE_SIZES.map(
          (size) =>
            `${createContentPathname(`${filename}-${size}.${format}`)} ${size}w`
        )
      ];
    }, [] as string[])
    .join(', ');

  const sizesProp =
    IMAGE_SIZES.map(
      (size, index) =>
        `(max-width: ${size}px) ${index === 0 ? size / 2 : IMAGE_SIZES[index - 1]}px`
    ).join(', ') + `, ${IMAGE_SIZES[IMAGE_SIZES.length - 1]}px`;

  const renderImage = (
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
        ref={ref}
        sizes={sizesProp}
        src={`${createContentPathname(`${filename}-1280.webp`)}`}
        srcSet={srcSet}
        {...(isLightbox ? {} : interactiveProps)}
      />
    );
  };

  return (
    <>
      {renderImage(false, imageRef)}
      <Lightbox
        image={renderImage(true)}
        isOpen={lightboxOpen}
        onClose={() => {
          setLightboxOpen(false);
          imageRef.current?.focus();
        }}
      />
    </>
  );
};

export default PaintingDisplay;
