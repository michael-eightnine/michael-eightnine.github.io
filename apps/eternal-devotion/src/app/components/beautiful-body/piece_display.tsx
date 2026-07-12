import { useMemo } from 'react';

import { createContentPathname, IMAGE_SIZES } from 'content';

type Props = {
  filename: string;
  className: React.HTMLProps<HTMLElement>['className'];
};

const formats = ['avif', 'webp'] as const;

const PieceDisplay = ({ className, filename }: Props) => {
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

  return (
    <img
      alt="a piece of the body"
      className={className}
      loading="eager"
      sizes={sizesProp}
      src={`${createContentPathname(`${filename}-1280.webp`, 'painting')}`}
      srcSet={srcSet}
    />
  );
};

export default PieceDisplay;
