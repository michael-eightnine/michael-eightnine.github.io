import { offeringsConfig } from 'content';
import { getSelectionPath } from 'utils';

import NavLink from './nav_link';
import LogoLink from './logo_link';

import styles from './nav.module.scss';

const NavBar = () => {
  const offeringsGroupCount = Object.keys(offeringsConfig).length;

  return (
    <nav className={styles.navBar}>
      <NavLink
        label={`for viewing (${offeringsGroupCount})`}
        path={getSelectionPath()}
      />
      <NavLink label="for reading" path="/origins" />
      <LogoLink />
    </nav>
  );
};

export default NavBar;
