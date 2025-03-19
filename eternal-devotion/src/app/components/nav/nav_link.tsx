import { NavLink as RouterNavLink } from 'react-router';

import styles from './nav.module.scss';
import { classnames } from 'utils';

type Props = {
  isActive?: boolean;
  label: string;
  path: string;
};

const NavLink = ({ isActive = false, label, path }: Props) => {
  return (
    <RouterNavLink
      className={({ isActive: directLinkActive }) =>
        classnames(styles.navLink, {
          [styles.navLink__active]: directLinkActive || isActive
        })
      }
      to={path}
    >
      [{label}]
    </RouterNavLink>
  );
};

export default NavLink;
