import { forwardRef, useCallback } from 'react';

import AnimatedTitle from './animated_title';
import styles from './nav.module.scss';
import { Globe } from 'svg';

import Dock from './dock';

type Props = {
  onAnimationEnd: () => void;
};

const NavBar = forwardRef<HTMLDivElement, Props>(({ onAnimationEnd }, ref) => {
  const onTitleAnimationEnd = useCallback(() => {
    console.log('DONE!');
    onAnimationEnd();
  }, [onAnimationEnd]);

  return (
    <div className={styles.wrapper}>
      <nav className={styles.nav}>
        <Globe className={styles.navLogo} />
        <AnimatedTitle onAnimationEnd={onTitleAnimationEnd} />
      </nav>
      <Dock ref={ref} />
    </div>
  );
});

export default NavBar;
