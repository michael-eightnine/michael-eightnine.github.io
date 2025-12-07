import { useCallback, useContext, useState } from 'react';

import { Globe } from 'svg';
import { PopupContext } from 'components/popup';

import AnimatedTitle from './animated_title';
import Dock from './dock';

import styles from './nav.module.scss';

type Props = {
  onAnimationEnd: () => void;
};

const NavBar = ({ onAnimationEnd }: Props) => {
  const [showDock, setShowDock] = useState(false);
  const { closeAllPopups, closeAllProcessing, instances } =
    useContext(PopupContext);

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
          aria-label="Close all popups"
          className={styles.navLogo}
          disabled={closeAllProcessing || !instances.length}
          onClick={closeAllPopups}
          title="Close all popups"
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
