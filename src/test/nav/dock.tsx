import styles from './nav.module.scss';
import DockButton from './dock_button';
import { PopupID } from '../popup';

const Dock = () => {
  return (
    <div className={styles.dock}>
      <DockButton id={PopupID.Welcome} />
    </div>
  );
};

export default Dock;
