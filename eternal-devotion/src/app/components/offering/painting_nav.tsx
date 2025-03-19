import NavLink from 'components/nav/nav_link';
import styles from './painting_nav.module.scss';
import { createOfferingPath } from 'utils';
import PaintingDescription from './painting_description';

const PaintingNav = () => {
  return (
    <div className={styles.paintingNav}>
      <div className={styles.paintingDie} />
      <div className={styles.paintingDie} />
      <div className={styles.paintingNavGroup}>
        <NavLink label="prev" path={createOfferingPath('22')} />
        <div className={styles.paintingDie} />
        <NavLink label="next" path={createOfferingPath('2')} />
      </div>
      <PaintingDescription />
    </div>
  );
};

export default PaintingNav;
