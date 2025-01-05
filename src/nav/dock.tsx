import { forwardRef } from 'react';
// import { usePlacementContext } from "../placement"

import styles from './nav.module.scss';

const Dock = forwardRef<HTMLDivElement>((_, ref) => {
  // const {closedSections} = usePlacementContext();

  return <div ref={ref} className={styles.dock}></div>;
});

export default Dock;
