import styles from './position_indicator.module.scss';

const PositionIndicator = () => {
  return (
    <div className={styles.indicator}>
      <span>1</span>
      <span>/</span>
      <span>2</span>
      <span>2</span>
    </div>
  );
};

export default PositionIndicator;
