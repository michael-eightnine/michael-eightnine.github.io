import { useMatch } from 'react-router';

import { offeringsConfig } from 'content';

import NavLink from './nav_link';
import LogoLink from './logo_link';

import styles from './nav.module.scss';

const NavBar = () => {
  const selectionLinkActive = !!useMatch('/selection');
  const offeringsGroupCount = Object.keys(offeringsConfig).length;

  return (
    <nav className={styles.navBar}>
      <NavLink
        isActive={selectionLinkActive}
        label={`for viewing (${offeringsGroupCount})`}
        path={'/selection'}
      />
      <NavLink label="for reading" path="/origins" />
      <LogoLink />
    </nav>
  );
};

export default NavBar;
