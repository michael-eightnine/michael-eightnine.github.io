import styles from './nav.module.scss';
import { useContext } from 'react';
import { PopupContext, PopupID } from '../popup';

type Props = {
  id: PopupID;
};

const DockButton = ({ id }: Props) => {
  const { addInstance, welcomeDockButtonRef } = useContext(PopupContext);

  return (
    <button
      className={styles.dockButton}
      onClick={() => addInstance(id)}
      ref={welcomeDockButtonRef}
    >
      +
    </button>
  );
};

export default DockButton;
