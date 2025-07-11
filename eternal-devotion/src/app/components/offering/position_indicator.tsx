import { useCurrentOfferingPosition } from 'content';

import styles from './position_indicator.module.scss';

type Props = {
  className: string;
};

const PositionIndicator = ({ className }: Props) => {
  const { current, total } = useCurrentOfferingPosition();
  const [totalOne, totalTwo] = total.toString().split('');

  return (
    <div className={`${styles.indicator} ${className}`}>
      <span
        style={{
          width: `${current.toString().length}ch`
        }}
      >
        {current}
      </span>
      <span style={{ width: '1ch' }}>/</span>
      <span style={{ width: '1ch' }}>{totalOne}</span>
      <span style={{ width: '1ch' }}>{totalTwo}</span>
    </div>
  );
};

export default PositionIndicator;
