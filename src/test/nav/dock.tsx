import styles from './nav.module.scss';
import DockButton from './dock_button';
import { PopupID } from '../popup';

import { Contact, Code, Info } from 'svg';

const Dock = () => {
  return (
    <div className={styles.dock}>
      <DockButton id={PopupID.Welcome} title="About">
        <Info className={styles.dockIcon} />
      </DockButton>
      <DockButton id={PopupID.Skills} title="Skills">
        <Code className={styles.dockIcon} />
      </DockButton>
      <DockButton id={PopupID.Contact} title="Contact">
        <Contact className={styles.dockIcon} />
      </DockButton>
    </div>
  );
};

export default Dock;
