import { Link } from 'react-router';

import { LogoImage } from 'svg';

import styles from './nav.module.scss';

const LogoLink = () => {
  return (
    <Link
      aria-label="Return home"
      className={styles.logoLink}
      title="Return home"
      to="/"
    >
      <LogoImage />
    </Link>
  );
};

export default LogoLink;
