import OriginsCopy from './origins_copy';

import styles from './origins_layout.module.scss';

const OriginsLayout = () => (
  <div className={styles.layout}>
    <div className={styles.copy}>
      <OriginsCopy />
    </div>
  </div>
);

export default OriginsLayout;
