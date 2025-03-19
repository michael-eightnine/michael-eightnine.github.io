import PaintingDisplay from './painting_display';
import PaintingNav from './painting_nav';

import styles from './painting_row.module.scss';

const PaintingRow = () => {
  return (
    <>
      <div className={styles.paintingRow}>
        <PaintingDisplay className={styles.painting} />
        <PaintingNav />
      </div>
    </>
  );
};

export default PaintingRow;
