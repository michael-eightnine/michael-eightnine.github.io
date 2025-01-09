import { AreaId } from '../types';

import styles from './map.module.scss';
import MapSegment from './map_segment';

type Props = {
  activeAreaId: AreaId;
};

const MapDisplay = ({ activeAreaId }: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.map}>
        {/* Top Row */}
        <div className={`${styles.segment} ${styles.segment__spacer}`} />
        <MapSegment activeAreaId={activeAreaId} segmentId={AreaId.Cathedral} />
        <div className={`${styles.segment} ${styles.segment__spacer}`} />
        {/* Center Row */}
        <MapSegment activeAreaId={activeAreaId} segmentId={AreaId.Florist} />
        <MapSegment activeAreaId={activeAreaId} segmentId={AreaId.TownSquare} />
        <MapSegment activeAreaId={activeAreaId} segmentId={AreaId.Marsh} />
        {/* Bottom Row */}
        <div className={`${styles.segment} ${styles.segment__spacer}`} />
        <MapSegment activeAreaId={activeAreaId} segmentId={AreaId.Cave} />
        <div className={`${styles.segment} ${styles.segment__spacer}`} />
      </div>
    </div>
  );
};

export default MapDisplay;
