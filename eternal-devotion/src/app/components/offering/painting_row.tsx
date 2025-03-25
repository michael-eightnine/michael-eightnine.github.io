import { useCurrentOffering } from 'content';
import PaintingDisplay from './painting_display';
import PaintingNav from './painting_nav';

import styles from './painting_row.module.scss';

const PaintingRow = () => {
  const currentOffering = useCurrentOffering();

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
