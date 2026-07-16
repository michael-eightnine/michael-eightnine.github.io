import { useMemo } from 'react';

import { buildResponsiveImage } from 'utils';

type Props = {
  filename: string;
  className: React.HTMLProps<HTMLElement>['className'];
};

const PieceDisplay = ({ className, filename }: Props) => {
  const { src, srcSet, sizes } = useMemo(
    () => buildResponsiveImage(filename),
    [filename]
  );

  return (
    <img
      alt="a piece of the body"
      className={className}
      loading="eager"
      sizes={sizes}
      src={src}
      srcSet={srcSet}
    />
  );
};

export default PieceDisplay;
