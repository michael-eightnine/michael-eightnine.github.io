import { Fragment } from 'react';

import styles from './slice_indicator.module.scss';

type Props = {
  className: string;
  // Display label for each slice, top to bottom (e.g. A / B / D).
  labels: string[];
};

// Adapted from the offering page's PositionIndicator: the slice labels divided
// by slashes (label / label / label). Spacing is handled by the flex container's
// column gap rather than the offering page's per-span 1ch widths.
const SliceIndicator = ({ className, labels }: Props) => (
  <div className={`${styles.indicator} ${className}`}>
    {labels.map((label, index) => (
      <Fragment key={index}>
        {index > 0 && <span>/</span>}
        <span className={styles.label}>{label}</span>
      </Fragment>
    ))}
  </div>
);

export default SliceIndicator;
