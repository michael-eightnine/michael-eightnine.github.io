import { Navigate } from 'react-router';

import { useCurrentOffering } from 'content';
import { createOfferingPath } from 'utils';
import { PaintingRow, PositionIndicator } from 'components/offering';

import styles from './offering.module.scss';

const Offering = () => {
  const currentOffering = useCurrentOffering();

  // You've fallen astray
  if (!currentOffering) {
    return <Navigate replace to={createOfferingPath('1', '1')} />;
  }

  return (
    <>
      <PaintingRow className={styles.content} />
      <PositionIndicator className={styles.indicator} />
    </>
  );
};

export default Offering;
