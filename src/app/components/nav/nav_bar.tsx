import { useCallback, useContext, useState } from 'react';
import { Globe } from 'svg';

import { PopupContext } from 'components/popup';

import AnimatedTitle from './animated_title';
import styles from './nav.module.scss';
import Dock from './dock';

type Props = {
  onAnimationEnd: () => void;
};

const NavBar = ({ onAnimationEnd }: Props) => {
  const [showDock, setShowDock] = useState(false);
  const { closeAllPopups, closeAllInitiated } = useContext(PopupContext);

  const handleAnimationEnd = useCallback(() => {
    setShowDock(true);
    setTimeout(() => {
      onAnimationEnd();
    }, 500);
  }, [onAnimationEnd]);

  return (
    <div className={styles.wrapper}>
      <nav className={styles.nav}>
        <button
          onClick={closeAllPopups}
          className={styles.navLogo}
          title="Close all popups"
          disabled={closeAllInitiated}
        >
          <Globe />
        </button>
        <AnimatedTitle onAnimationEnd={handleAnimationEnd} />
      </nav>
      <Dock visible={showDock} />
    </div>
  );
};

export default NavBar;
