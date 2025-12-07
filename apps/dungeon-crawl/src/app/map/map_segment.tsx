import { classnames } from '../utils';

import styles from './map.module.scss';
import { AreaId } from '../types';
import { useMemo } from 'react';
import { AREAS_BY_ID } from '../area_config';

type Props = {
  activeAreaId: AreaId;
  segmentId: AreaId;
};

const MapSegment = ({ activeAreaId, segmentId }: Props) => {
  const representedArea = useMemo(() => AREAS_BY_ID[segmentId], [segmentId]);

  return (
    <div
      className={classnames(styles.segment, {
        [styles.segment__areaActive]: activeAreaId === representedArea.areaId,
        [styles.segment__subareaActive]:
          activeAreaId === representedArea.subAreaId,
        [styles.segment__center]: segmentId === AreaId.TownSquare
      })}
    />
  );
};

export default MapSegment;
