import { useMatch } from 'react-router';

import { createOfferingPath } from 'utils';

import NavLink from './nav_link';
import LogoLink from './logo_link';

import styles from './nav.module.scss';

const NavBar = () => {
  const offeringLinkActive = !!useMatch(createOfferingPath(':id'));

  return (
    <nav className={styles.navBar}>
      <NavLink
        isActive={offeringLinkActive}
        label="for viewing"
        path={createOfferingPath('1')}
      />
      <NavLink label="for reading" path="/origins" />
      <LogoLink />
    </nav>
  );
};

export default NavBar;
