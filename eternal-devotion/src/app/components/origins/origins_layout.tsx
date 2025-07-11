import { createContentPathname } from 'content';
import OriginsCopy from './origins_copy';

import styles from './origins_layout.module.scss';

const OriginsLayout = () => (
  <div className={styles.layout}>
    <img
      alt="myself"
      className={styles.image}
      src={`${createContentPathname('me.png', 'root')}`}
    />
    <div className={styles.copy}>
      <OriginsCopy />
    </div>
  </div>
);

export default OriginsLayout;
