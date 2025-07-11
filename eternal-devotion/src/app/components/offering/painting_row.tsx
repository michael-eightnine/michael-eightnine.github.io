import { useEffect } from 'react';
import { useParams } from 'react-router';

import { useCurrentOffering, useAdjacentOfferingFilenames } from 'content';
import { preloadImages } from 'utils';

import PaintingDisplay from './painting_display';
import PaintingNav from './painting_nav';

import styles from './painting_row.module.scss';

type Props = {
  className: string;
};

const PaintingRow = ({ className }: Props) => {
  const currentOffering = useCurrentOffering();
  const { id } = useParams();
  const getAdjacentOfferingFilenames = useAdjacentOfferingFilenames();

  // Preload adjacent images for smoother navigation
  useEffect(() => {
    if (id) {
      const adjacentFilenames = getAdjacentOfferingFilenames();
      if (adjacentFilenames.length > 0) {
        preloadImages(adjacentFilenames);
      }
    }
  }, [getAdjacentOfferingFilenames, id]);

  return (
    !!currentOffering && (
      <div className={`${styles.paintingRow} ${className}`}>
        <PaintingDisplay
          className={styles.painting}
          filename={currentOffering.filename}
        />
        <PaintingNav />
      </div>
    )
  );
};

export default PaintingRow;
