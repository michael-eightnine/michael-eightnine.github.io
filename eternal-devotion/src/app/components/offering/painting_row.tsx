import { useEffect } from 'react';
import { useParams } from 'react-router';

import { useCurrentOffering, getAdjacentOfferingFilenames } from 'content';
import { preloadImages } from 'utils';

import PaintingDisplay from './painting_display';
import PaintingNav from './painting_nav';

import styles from './painting_row.module.scss';

const PaintingRow = () => {
  const currentOffering = useCurrentOffering();
  const { id } = useParams();

  // Preload adjacent images for smoother navigation
  useEffect(() => {
    if (id) {
      const adjacentFilenames = getAdjacentOfferingFilenames(id);
      if (adjacentFilenames.length > 0) {
        preloadImages(adjacentFilenames);
      }
    }
  }, [id]);

  return (
    !!currentOffering && (
      <>
        <div className={styles.paintingRow}>
          <PaintingDisplay
            className={styles.painting}
            filename={currentOffering.filename}
          />
          <PaintingNav />
        </div>
      </>
    )
  );
};

export default PaintingRow;
