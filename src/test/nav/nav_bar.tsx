import AnimatedTitle from './animated_title';
import styles from './nav.module.scss';
import { Globe } from 'svg';

import Dock from './dock';

type Props = {
  onAnimationEnd: () => void;
};

const NavBar = ({ onAnimationEnd }: Props) => {
  return (
    <div className={styles.wrapper}>
      <nav className={styles.nav}>
        <Globe className={styles.navLogo} />
        <AnimatedTitle onAnimationEnd={onAnimationEnd} />
      </nav>
      <Dock />
    </div>
  );
};

export default NavBar;
