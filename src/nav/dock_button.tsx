import styles from './nav.module.scss';
import { usePlacementContext } from '../placement';
import { createPortal } from 'react-dom';
import TestSection from '../test_section';
import { MutableRefObject, useState } from 'react';

const DockButton = () => {
  const { toggleSection, mainContentRef } = usePlacementContext();
  const [renderExtra, setRenderExtra] = useState(false);

  const onClick = () => {
    if (!mainContentRef.current) return;

    // create new section
    // const d = createPortal(
    //   <TestSection defaultTransitionState="closed" />,
    //   mainContentRef.current
    // );
    // console.log('d', d);
    setRenderExtra(true);
  };

  return (
    <>
      <button className={styles.dockButton} onClick={onClick}>
        +
      </button>
      {renderExtra && !!mainContentRef.current &&
        createPortal(
          <TestSection defaultTransitionState="closed" onMount={(ref: MutableRefObject<any>) => } />,
          mainContentRef.current
        )}
    </>
  );
};

export default DockButton;
