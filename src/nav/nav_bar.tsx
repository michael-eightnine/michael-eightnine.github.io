import { useCallback } from 'react';

import AnimatedTitle from './animated_title';
import styles from './nav.module.scss';
import { Globe } from 'svg';

type Props = {
  onAnimationEnd: () => void;
};

const NavBar = ({ onAnimationEnd }: Props) => {
  const onTitleAnimationEnd = useCallback(() => {
    console.log('DONE!');
    onAnimationEnd();
  }, [onAnimationEnd]);

  return (
    <nav className={styles.nav}>
      <Globe className={styles.navLogo} />
      <AnimatedTitle onAnimationEnd={onTitleAnimationEnd} />
    </nav>
  );
};

export default NavBar;
