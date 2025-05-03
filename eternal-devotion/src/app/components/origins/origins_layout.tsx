import OriginsCopy from './origins_copy';

import styles from './origins_layout.module.scss';

const OriginsLayout = () => (
  <div className={styles.layout}>
    <img
      alt="myself"
      className={styles.image}
      src={`${import.meta.env.BASE_URL}/me.png`}
    />
    <div className={styles.copy}>
      <OriginsCopy />
    </div>
  </div>
);

export default OriginsLayout;
