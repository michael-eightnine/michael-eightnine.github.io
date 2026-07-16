import { Navigate } from 'react-router';

import { useCurrentOffering } from 'content';
import { getSelectionPath } from 'utils';
import { PaintingRow, PositionIndicator } from 'components/offering';

import styles from './offering.module.scss';

const Offering = () => {
  const currentOffering = useCurrentOffering();

  // You've fallen astray — an unknown group/id lands back at the selection.
  if (!currentOffering) {
    return <Navigate replace to={getSelectionPath()} />;
  }

  return (
    <>
      <PaintingRow className={styles.content} />
      <PositionIndicator className={styles.indicator} />
    </>
  );
};

export default Offering;
