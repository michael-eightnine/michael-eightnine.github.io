import { Offering, createContentPathname } from 'content';

type Props = {
  filename: Offering['filename'];
  className: React.HTMLProps<HTMLElement>['className'];
};

const sizes = [420, 940, 1280, 1920] as const;
const formats = ['avif', 'webp'] as const;

// TODO: Lightbox feature
const PaintingDisplay = ({ className, filename }: Props) => {
  const srcSet = formats
    .reduce((acc, format) => {
      return [
        ...acc,
        ...sizes.map(
          (size) =>
            `${createContentPathname(`${filename}-${size}.${format}`)} ${size}w`
        )
      ];
    }, [] as string[])
    .join(', ');

  const sizesProp =
    sizes
      .map(
        (size, index) =>
          `(max-width: ${size}px) ${index === 0 ? size / 2 : sizes[index - 1]}px`
      )
      .join(', ') + `, ${sizes[sizes.length - 1]}px`;

  return (
    <img
      alt="the big picture"
      className={className}
      sizes={sizesProp}
      src={`${createContentPathname(`${filename}-1280.webp`)}`}
      srcSet={srcSet}
    />
  );
};

export default PaintingDisplay;
