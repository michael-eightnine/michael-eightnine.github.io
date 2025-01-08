import { NavDirection } from '../types';

import styles from './navigation.module.scss';

type Props = {
  direction: NavDirection;
  onClick: () => void;
};

const Button = ({ direction, onClick }: Props) => {
  return (
    <button
      className={`${styles.button} ${styles[`button__${direction}`]}`}
      onClick={onClick}
    >
      {`>`}
    </button>
  );
};

export default Button;
