import { forwardRef, useMemo } from 'react';
import { usePlacementContext } from '../placement';

import styles from './nav.module.scss';

const Dock = forwardRef<HTMLDivElement>((_, ref) => {
  const { closedSections } = usePlacementContext();

  const width = useMemo(() => {
    const baseWidth = 48 * closedSections.length;
    const withPadding = closedSections.length
      ? (closedSections.length - 1) * 10
      : 0;
    return `${baseWidth + withPadding}px`;
  }, [closedSections.length]);

  return <div ref={ref} className={styles.dock} style={{ width }}></div>;
});

export default Dock;
