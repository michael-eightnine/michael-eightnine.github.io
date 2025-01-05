import styles from './nav.module.scss';
import DockButton from './dock_button';
import { PopupID } from '../popup';

import { Contact, Code, Info } from 'svg';
import { classnames } from 'utils';

type Props = {
  visible: boolean;
};

const Dock = ({ visible }: Props) => {
  return (
    <div
      className={classnames(styles.dock, {
        [styles.dock__visible]: visible
      })}
    >
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
