import { Navigate } from 'react-router';

import { useCurrentOffering } from 'content';
import { createOfferingPath } from 'utils';
import { PaintingRow, PositionIndicator } from 'components/offering';

const Offering = () => {
  const currentOffering = useCurrentOffering();

  // You've fallen astray
  if (!currentOffering) {
    return <Navigate replace to={createOfferingPath('1', '1')} />;
  }

  return (
    <>
      <PaintingRow />
      <PositionIndicator />
    </>
  );
};

export default Offering;
