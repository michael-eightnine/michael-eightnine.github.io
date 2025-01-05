import AnimatedTitle from './animated_title';
import styles from './nav.module.scss';
import { Globe } from 'svg';

import Dock from './dock';
import { useContext } from 'react';
import { PopupContext } from '../popup';

type Props = {
  onAnimationEnd: () => void;
};

const NavBar = ({ onAnimationEnd }: Props) => {
  const { closeAllPopups, closeAllInitiated } = useContext(PopupContext);

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
        <AnimatedTitle onAnimationEnd={onAnimationEnd} />
      </nav>
      <Dock />
    </div>
  );
};

export default NavBar;
