import { NavDirection } from '../types';

import styles from './navigation.module.scss';

type Props = {
  direction: NavDirection;
  onClick: () => void;
};

const getDirectionLabel = (direction: NavDirection) => {
  const prefix = 'Travel';

  switch (direction) {
    case NavDirection.East:
      return `${prefix} east`;
    case NavDirection.West:
      return `${prefix} west`;
    case NavDirection.North:
      return `${prefix} north`;
    case NavDirection.South:
      return `${prefix} south`;
  }
};

const Button = ({ direction, onClick }: Props) => {
  return (
    <button
      className={`${styles.button} ${styles[`button__${direction}`]}`}
      onClick={onClick}
      title={getDirectionLabel(direction)}
    >
      {direction}
    </button>
  );
};

export default Button;
