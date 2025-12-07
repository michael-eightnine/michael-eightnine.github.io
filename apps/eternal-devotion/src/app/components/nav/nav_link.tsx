import { NavLink as RouterNavLink } from 'react-router';

import { classnames } from 'utils';

import styles from './nav.module.scss';

type Props = {
  isActive?: boolean;
  enabled?: boolean;
  label: string;
  path: string;
};

const NavLink = ({ isActive = false, enabled = true, label, path }: Props) => {
  return (
    <RouterNavLink
      aria-disabled={!enabled}
      className={({ isActive: directLinkActive }) =>
        classnames(styles.navLink, {
          [styles.navLink__active]: directLinkActive || isActive,
          [styles.navLink__hidden]: !enabled
        })
      }
      to={path}
    >
      [{label}]
    </RouterNavLink>
  );
};

export default NavLink;
