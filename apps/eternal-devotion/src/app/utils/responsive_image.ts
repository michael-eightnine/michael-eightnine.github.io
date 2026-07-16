import { createContentPathname, IMAGE_SIZES } from 'content';

const formats = ['avif', 'webp'] as const;

type ResponsiveImage = {
  src: string;
  srcSet: string;
  sizes: string;
};

// Builds the responsive <img> attributes for an optimized painting asset: an
// avif/webp srcSet across every IMAGE_SIZES width, a matching sizes string, and
// a 1280 webp src fallback. Shared by the offering and beautiful-body displays.
export const buildResponsiveImage = (filename: string): ResponsiveImage => {
  const srcSet = formats
    .reduce(
      (acc, format) => [
        ...acc,
        ...IMAGE_SIZES.map(
          (size) =>
            `${createContentPathname(`${filename}-${size}.${format}`, 'painting')} ${size}w`
        )
      ],
      [] as string[]
    )
    .join(', ');

  const sizes =
    IMAGE_SIZES.map(
      (size, index) =>
        `(max-width: ${size}px) ${index === 0 ? size / 2 : IMAGE_SIZES[index - 1]}px`
    ).join(', ') + `, ${IMAGE_SIZES[IMAGE_SIZES.length - 1]}px`;

  const src = createContentPathname(`${filename}-1280.webp`, 'painting');

  return { src, srcSet, sizes };
};
