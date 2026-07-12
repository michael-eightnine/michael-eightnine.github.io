import { Fragment } from 'react';

import styles from './slice_indicator.module.scss';

type Props = {
  className: string;
  // 1-based character index for each slice, top to bottom.
  values: number[];
};

// Adapted from the offering page's PositionIndicator: the slice values divided
// by slashes (value / value / value). Spacing is handled by the flex container's
// column gap rather than the offering page's per-span 1ch widths.
const SliceIndicator = ({ className, values }: Props) => (
  <div className={`${styles.indicator} ${className}`}>
    {values.map((value, index) => (
      <Fragment key={index}>
        {index > 0 && <span>/</span>}
        <span>{value}</span>
      </Fragment>
    ))}
  </div>
);

export default SliceIndicator;
