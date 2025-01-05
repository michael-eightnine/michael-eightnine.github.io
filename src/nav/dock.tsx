import { forwardRef, useMemo } from 'react';

import styles from './nav.module.scss';
import DockButton from './dock_button';

const Dock = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div ref={ref} className={styles.dock}>
      <DockButton />
    </div>
  );
});

export default Dock;
